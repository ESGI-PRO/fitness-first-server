import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';

import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
    logger: ['error', 'warn'],
  });

  const config = new DocumentBuilder()
    .setTitle('Nutrition API')
    .setDescription('Nutrition API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-nutrition', app, document);

  // app.use(helmet());
  await app.listen(3001);
}
bootstrap();
