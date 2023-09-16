import { NestFactory } from '@nestjs/core';
import { UserModule } from './user.module';
import { Transport, TcpOptions } from '@nestjs/microservices';

import { ConfigService } from './services/config/config.service';
async function bootstrap() {
  const app = await NestFactory.createMicroservice(UserModule, {
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port: new ConfigService().get('port'),
    },
  } as TcpOptions);

  console.log('new ConfigService()', new ConfigService().get('port'))
  console.log("subscriptionService", new ConfigService().get('subscriptionService'))
  console.log("mailerService", new ConfigService().get('mailerService'))
  await app.listen();
}
bootstrap();



