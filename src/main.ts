import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  const configService = app.get(ConfigService);

  const port = configService.get<number>('APP_LISTEN_PORT');
  const url = configService.get<string>('APP_API_URL');

  await app.listen(port, url);

  Logger.log(
    `Application is running on: ${await app.getUrl()}`,
    'NestApplication',
  );
}
bootstrap();
