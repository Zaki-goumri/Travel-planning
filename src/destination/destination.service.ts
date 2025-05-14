import { Injectable } from '@nestjs/common';
import { HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class DestinationService {
  private readonly index = 'destinations';

  constructor() {}

  private async initializeIndex() {}

  async searchDestinations(
    searchQuery: string,
    weatherCriteria: {
      status?: string;
      minTemp?: number;
      maxTemp?: number;
    },
  ) {}
}
