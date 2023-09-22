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
// console.log("ConfigService().get('port')", new ConfigService().get('port'))
// console.log("mongoDnsDb", new ConfigService().get('mongoDnsDb'))
// console.log("process.env.ANALYTIC_SERVICE_PORT", process.env.ANALYTICS_SERVICE_PORT)

bootstrap();
