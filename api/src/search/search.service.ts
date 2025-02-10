import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';

import { ConfigService } from '@nestjs/config';
import { GetLeakedCredentialsDto } from './dto/get-leaked-credentials.dto';
import { TwilightService } from 'src/twilight/twilight.service';

@Injectable()
export class SearchService {
  constructor(
    private readonly configService: ConfigService,
    private readonly twilightService: TwilightService,
  ) {}
  async getLeakedCredentials(dto: GetLeakedCredentialsDto) {
    const { domain } = dto;

    const apiKey = this.configService.get<string>('TWILIGHT_CYBER_API_KEY');
    if (!apiKey) {
      throw new InternalServerErrorException('API key is missing');
    }

    try {
      const result = await this.twilightService.searchLeakedCreds(domain);
      return result;
    } catch (err) {
      const errorMessage =
        'Failed to fetch data from Twilight API. Try another domain';

      const errorStatus =
        err?.response?.status || HttpStatus.INTERNAL_SERVER_ERROR;

      throw new HttpException(errorMessage, errorStatus);
    }
  }
}
