import { Connection } from 'mongoose';
import { AnalyticsSchema, AnalyticsVisitorsSchema } from './services/config/analytics.schema';
import { Analytics_MODEL, DATABASE_CONNECTION, AnalyticsVisitors_MODEL } from './services/config/constants'

export const AnalyticsProviders = [
  {
    provide: Analytics_MODEL,
    useFactory: (connection: Connection) => connection.model('Analytics', AnalyticsSchema),
    inject: [DATABASE_CONNECTION],
  },
  {
    provide: AnalyticsVisitors_MODEL,
    useFactory: (connection: Connection) => connection.model('AnalyticsVisitors', AnalyticsVisitorsSchema),
    inject: [DATABASE_CONNECTION],
  }
];