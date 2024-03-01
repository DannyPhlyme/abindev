import { GlobalValidationPipe } from '@API/Configuration/Validation/GlobalValidationPipe';
import { Config, environment } from '@Environments/Index';
import { Logger, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { useContainer } from 'class-validator';
import { AppModule } from './AppModule';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableVersioning({
    type: VersioningType.URI,
    prefix: '',
  });

  app.enableCors({
    origin: '*',
    credentials: true,
  });

  app.useGlobalPipes(new GlobalValidationPipe());

  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  const port = Number(Config.get('app')[environment].port);
  await app.listen(port);

  Logger.log(`🚀 Application is running on: http://localhost:${port}`);
  Logger.log(`🚀 Running in ${Config.get('app')[environment].environment} mode`);
}
bootstrap();
