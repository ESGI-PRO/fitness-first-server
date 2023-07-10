import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, TcpOptions } from '@nestjs/microservices';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from './services/config/config.service';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port: new ConfigService().get('port'),
    },
    logger: ['error', 'warn', 'log']
  } as TcpOptions);
  app.useGlobalPipes(new ValidationPipe({}));
  await app.listen();
}
bootstrap();
