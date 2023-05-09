import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigService } from './services/config/config.service';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const options = new DocumentBuilder()
    .setTitle('API docs')
    .addTag('auth')
    .addTag('users')
    .addTag('analytics')
    .addTag('training')
    .addTag('nutrition')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  app.use(helmet());
  await app.listen(new ConfigService().get('port'));
}
bootstrap();
