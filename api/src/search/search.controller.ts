import { Controller, Get, HttpCode, HttpStatus, Query } from '@nestjs/common';
import { SearchService } from './search.service';
import { GetLeakedCredentialsDto } from './dto/get-leaked-credentials.dto';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get('leaked-credentials')
  @HttpCode(HttpStatus.OK)
  async getLeakedCredentials(@Query() query: GetLeakedCredentialsDto) {
    return this.searchService.getLeakedCredentials(query);
  }
}
