import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class DestinationService {
  private readonly index = 'destinations';

  constructor(private readonly elasticsearchService: ElasticsearchService) {}

  private async initializeIndex() {
    try {
      const indexExists = await this.elasticsearchService.indices.exists({
        index: this.index,
      });

      if (!indexExists) {
        await this.elasticsearchService.indices.create({
          index: this.index,
          body: {
            mappings: {
              properties: {
                name: { type: 'text' },
                description: { type: 'text' },
                rating: { type: 'float' },
                status: { type: 'keyword' },
                temperature: { type: 'float' },
                timestamp: { type: 'date' },
              },
            },
          },
        });
        console.log(`Created index ${this.index}`);
      }
    } catch (error) {
      console.error('Index initialization failed:', error);
    }
  }

  async searchDestinations(
    searchQuery: string,
    weatherCriteria: {
      status?: string;
      minTemp?: number;
      maxTemp?: number;
    },
  ) {
    try {
      const mustClauses = [];

      if (searchQuery) {
        mustClauses.push({
          multi_match: {
            query: searchQuery,
            fields: ['name^3', 'description'],
            fuzziness: 'AUTO',
          },
        });
      }

      if (weatherCriteria.status) {
        mustClauses.push({ term: { status: weatherCriteria.status } });
      }

      if (
        weatherCriteria.minTemp !== undefined ||
        weatherCriteria.maxTemp !== undefined
      ) {
        const rangeQuery: any = {};
        if (weatherCriteria.minTemp !== undefined)
          rangeQuery.gte = weatherCriteria.minTemp;
        if (weatherCriteria.maxTemp !== undefined)
          rangeQuery.lte = weatherCriteria.maxTemp;
        mustClauses.push({ range: { temperature: rangeQuery } });
      }

      const result = await this.elasticsearchService.search({
        index: this.index,
        body: {
          query: {
            bool: {
              must: mustClauses.length > 0 ? mustClauses : [{ match_all: {} }],
            },
          },
          sort: [{ rating: { order: 'desc' } }, { _score: { order: 'desc' } }],
        },
      });

      return result.hits.hits.map((hit) => ({
        id: hit._id,
        score: hit._score,
        ...(hit._source as Record<string, any>),
      }));
    } catch (error) {
      throw new HttpException(
        `Search failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
