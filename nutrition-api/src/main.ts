import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';

import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Transport, TcpOptions } from '@nestjs/microservices';
import { ConfigService } from './services/config/config.service';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port:  new ConfigService().get('port')
    },
  } as TcpOptions);
  
  await app.listen();

  // const app = await NestFactory.create(AppModule);
  // app.connectMicroservice(
  //   {
  //     transport: Transport.TCP,
  //     options: {
  //       host: '0.0.0.0',
  //       port: new ConfigService().get('port'),
  //     },
  //   },
  // );
  // await app.startAllMicroservices();
  // await app.listen(new ConfigService().get('port'));
}
bootstrap();