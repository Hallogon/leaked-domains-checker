import { Module } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchController } from './search.controller';
import { TwilightModule } from 'src/twilight/twilight.module';

@Module({
  imports: [TwilightModule],
  controllers: [SearchController],
  providers: [SearchService],
})
export class SearchModule {}
