// src/elasticsearch/elasticsearch-index.service.ts
import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';

@Injectable()
export class ElasticsearchIndexService implements OnModuleInit {
  private readonly logger = new Logger(ElasticsearchIndexService.name);

  constructor(private readonly elasticsearchService: ElasticsearchService) {}

  async onModuleInit() {
    try {
      await this.createDestinationsIndex();
      await this.seedSampleData();
      this.logger.log('Elasticsearch index created and seeded successfully');
    } catch (error) {
      this.logger.error(
        `Failed to initialize Elasticsearch: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
    }
  }

  private async createDestinationsIndex() {
    const indexExists = await this.elasticsearchService.indices.exists({
      index: 'destinations',
    });

    if (!indexExists) {
      await this.elasticsearchService.indices.create({
        index: 'destinations',
        body: {
          mappings: {
            properties: {
              name: { type: 'text' },
              description: { type: 'text' },
              temperature: { type: 'float' },
              status: { type: 'keyword' },
              rating: { type: 'float' },
            },
          },
        },
      });
      this.logger.log('Destinations index created');
    } else {
      this.logger.log('Destinations index already exists');
    }
  }

  private async seedSampleData() {
    // Check if there's already data in the index
    const { count } = await this.elasticsearchService.count({
      index: 'destinations',
    });

    if (count > 0) {
      this.logger.log(
        `Index already contains ${count} documents, skipping seeding`,
      );
      return;
    }

    const sampleDestinations = [
      {
        name: 'Paris',
        description:
          'City of Light with the Eiffel Tower and romantic atmosphere',
        temperature: 22,
        status: 'sunny',
        rating: 4.8,
      },
      {
        name: 'Bali',
        description:
          'Tropical paradise with beautiful beaches and lush landscapes',
        temperature: 29,
        status: 'sunny',
        rating: 4.7,
      },
      {
        name: 'Aspen',
        description:
          'Premier mountain destination for skiing and winter sports',
        temperature: -2,
        status: 'snowy',
        rating: 4.5,
      },
      {
        name: 'Tokyo',
        description: 'Modern metropolis with a blend of traditional culture',
        temperature: 18,
        status: 'cloudy',
        rating: 4.6,
      },
      {
        name: 'Cairo',
        description: 'Ancient city with pyramids and rich history',
        temperature: 32,
        status: 'sunny',
        rating: 4.2,
      },
    ];

    // Bulk insert documents
    const operations = sampleDestinations.flatMap((doc) => [
      { index: { _index: 'destinations' } },
      doc,
    ]);

    await this.elasticsearchService.bulk({ body: operations, refresh: true });
    this.logger.log(`Seeded ${sampleDestinations.length} destinations`);
  }
}
