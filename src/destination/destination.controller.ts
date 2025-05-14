// src/destination/destination.controller.ts
import { Controller, Get, Query } from '@nestjs/common';
import { DestinationService } from './destination.service';
@Controller('destinations')
export class DestinationController {
  constructor(private readonly destinationService: DestinationService) {}

  @Get('search')
  async searchDestinations(
    @Query('searchQuery') searchQuery: string = '',
    @Query('status') status?: string,
    @Query('minTemp') minTemp?: number,
    @Query('maxTemp') maxTemp?: number,
  ) {}
  // @Post('index')
  // async createIndex() {
  //   return this.elasticsearchIndexService.createDestinationsIndex();
  // }

  // @Post('seed')
  // async seedData() {
  //   return this.elasticsearchIndexService.seedSampleData();
  // }

  // @Delete('index')
  // async deleteIndex() {
  //   return this.elasticsearchService.indices.delete({ index: 'destinations' });
  // }
}
