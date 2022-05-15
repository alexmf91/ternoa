import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  try {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    const configService = app.get<ConfigService>(ConfigService);
    const APP = configService.get<string>('APP');
    const PORT = configService.get<number>('PORT') || 3000;
    const VERSION = configService.get<string>('VERSION');

    app.setGlobalPrefix('api');
    app.enableCors();
    const config = new DocumentBuilder()
      .setTitle(APP)
      .setVersion(`${VERSION}`)
      .build();

    const document = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup('api', app, document);

    await app.listen(PORT);
    const url = await app.getUrl();

    Logger.verbose(`Application ${APP} is running on: ${url} ✔️`);
    Logger.verbose(`Api documentation run on: ${url}/api ✔️`);
  } catch (error) {
    Logger.error(`❌❌❌ ${error.message} ❌❌❌`);
  }
}

bootstrap();
