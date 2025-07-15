import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',
    // Si quieres restringir:
    // origin: 'http://localhost:4200',
  });

  await app.listen(3000);
}

bootstrap();
