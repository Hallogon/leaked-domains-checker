import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class TwilightService {
  private readonly baseURL = 'https://api3.twilightcyber.com';

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async fetchTwilight(path: string) {
    const url = `${this.baseURL}/${path}`;

    try {
      const result = await firstValueFrom(
        this.httpService.get(url, {
          headers: {
            Authorization: `Bearer ${this.configService.get<string>('TWILIGHT_CYBER_API_KEY')}`,
          },
        }),
      );

      return result?.data;
    } catch (err) {
      throw err;
    }
  }

  searchLeakedCreds(domain: string) {
    return this.fetchTwilight(
      `leaked_creds/_search?domain=${domain}&size=10000&page=1`,
    );
  }
}
