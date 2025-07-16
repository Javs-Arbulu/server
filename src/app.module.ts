import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { Module } from '@nestjs/common';
import { InfoModule } from './modules/info/info.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    InfoModule,
  ],
})
export class AppModule {}
