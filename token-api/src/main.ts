import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';

import { TokenModule } from './token.module';
import { ConfigService } from './services/config/config.service';


async function bootstrap() {
  const app = await NestFactory.createMicroservice(TokenModule, {
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port: new ConfigService().get('port'),
    },
    logger: ['error', 'warn', 'log']
  });

  await app.listen();
}
bootstrap();
