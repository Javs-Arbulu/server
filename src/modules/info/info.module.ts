import { Module } from '@nestjs/common';
import { InfoService } from './info.services';
import { InfoController } from './info.controller';

@Module({
  controllers: [InfoController],
  providers: [InfoService],
})
export class InfoModule {}
