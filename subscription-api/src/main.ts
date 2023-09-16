import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, TcpOptions } from '@nestjs/microservices';
import { ConfigService } from './services/config/config.service';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    cors: true,
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port: new ConfigService().get('port'),
    },
    logger: ['error', 'warn', 'log']
  } as TcpOptions);

  console.log('new ConfigService()', new ConfigService().get('port'))
  console.log("mailerService", new ConfigService().get('mailerService'))
  console.log("userService", new ConfigService().get('userService'))
  await app.listen();
}
bootstrap();
