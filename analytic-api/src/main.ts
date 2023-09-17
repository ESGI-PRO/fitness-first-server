import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from './services/config/config.service';
import { TcpOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port: new ConfigService().get('port'),
    },
    logger: ['error', 'warn', 'log']
  } as TcpOptions);
  await app.listen();
}

bootstrap();
