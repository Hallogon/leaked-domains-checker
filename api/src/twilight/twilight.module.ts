import { Module } from '@nestjs/common';
import { TwilightService } from './twilight.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [],
  providers: [TwilightService],
  exports: [TwilightService],
})
export class TwilightModule {}
