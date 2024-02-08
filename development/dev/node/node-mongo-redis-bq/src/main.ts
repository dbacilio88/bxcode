import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import {
  DocumentBuilder,
  SwaggerModule
} from '@nestjs/swagger';
import { HttpExceptionFilter } from './components/exceptions/global.exception';
import { join } from 'path';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  const logger = new Logger('bootstrap');
  
  app.setGlobalPrefix('/api');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  );

  const config = new DocumentBuilder()
    .setTitle('quizz RESTFul API')
    .setDescription('quizz applicatiohn endpoints')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors();

  app.useGlobalFilters(new HttpExceptionFilter(app.get(HttpAdapterHost)))
  await app.listen(process.env.PORT);
  logger.log(`App running on port ${process.env.PORT}`);
}
bootstrap();