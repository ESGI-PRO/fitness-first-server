import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigService } from './services/config/config.service';
import { AnalyticsSchema, AnalyticsVisitorsSchema } from './schemas/analytics.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoConfigService } from './services/config/mongo-config.service';
@Module({
  imports: [
    MongooseModule.forRootAsync({
      useClass: MongoConfigService,
    }),
    MongooseModule.forFeature([
      {
        name: 'Analytics',
        schema: AnalyticsSchema,
        collection: 'analytics',
      },
      {
        name: 'AnalyticsVisitors',
        schema: AnalyticsVisitorsSchema,
        collection: 'analytics_visitors',
      },
    ]),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    ConfigService
  ],
})
export class AppModule {}
