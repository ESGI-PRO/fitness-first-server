import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      cors: true,
      logger: ['error', 'warn'],
      transport: Transport.TCP,
    },
  );

  const config = new DocumentBuilder()
    .setTitle('Auth API')
    .setDescription('Auth API description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.use(helmet());
  await app.listen(3004);
}
bootstrap();
