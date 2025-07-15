import { Module } from '@nestjs/common';
import { InfoModule } from './info/modules/info.module';

@Module({
  imports: [InfoModule],
})
export class AppModule {}
