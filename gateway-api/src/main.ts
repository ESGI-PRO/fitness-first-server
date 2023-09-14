import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigService } from './services/config/config.service';
import helmet from 'helmet';
import rawBodyMiddleware from './middlewares/raw-body.middleware'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: true,
    credentials : true,
    exposedHeaders: 'X-Total-Count', // Expose X-Total-Count header
  });
  const options = new DocumentBuilder()
    .setTitle('API docs')
    .addTag('users')
    .addTag('analytics')
    .addTag('training')
    .addTag('nutrition')
    .addTag('subscription')
    .addTag('messenger')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'header',
      },
      'access-token',
    )
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  // i test the deploy
  app.use(helmet());
  app.use(rawBodyMiddleware());
  await app.listen(new ConfigService().get('port'), '0.0.0.0');
}
bootstrap();
