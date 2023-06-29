import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigService } from './services/config/config.service';
import { AnalyticsSchema } from './services/config/analytics.schema';
import { DatabaseModule } from './services/config/database.module';
import { AnalyticsProviders } from './analytics.providers';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [DatabaseModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, ...AnalyticsProviders],
})
export class AppModule {}
