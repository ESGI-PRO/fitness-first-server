import * as mongoose from 'mongoose';
import { AnalyticsInterface, AnalyticsVisitorsinterface } from '../dto_interface/analytics.interface';

export const AnalyticsSchema = new mongoose.Schema<AnalyticsInterface>({
  appName: {
    type: String,
    required: [true, 'App name can not be empty'],
  },
  apiKey: {
    type: String,
    required: [true, 'Api key can not be empty'],
  },
  baseUrl: {
    type: String,
    required: [true, 'Base url can not be empty'],
  },
  userAgent: {
    type: String,
    required: [true, 'User agent can not be empty'],
  },
  data: {
    eventName: {
      type: String,
      required: [true, 'Event name can not be empty'],
    },
    eventAction: {
      type: String,
      required: [true, 'Event action can not be empty'],
    },
    eventCategory: {
      type: String,
      required: [true, 'Event category can not be empty'],
    },
    eventPage: {
      type: String,
      required: [true, 'Event page can not be empty'],
    },
    date: {
      type: String,
      required: [true, 'Date can not be empty'],
    },
    events: {
      type: Object,
      required: [false, ''],
    },
  },
});

export const AnalyticsVisitorsSchema = new mongoose.Schema<AnalyticsVisitorsinterface>({
  appName: {
    type: String,
    required: [true, 'App name can not be empty'],
  },
  apiKey: {
    type: String,
    required: [true, 'Api key can not be empty'],
  },
  baseUrl: {
    type: String,
    required: [true, 'Base url can not be empty'],
  },
  userAgent: {
    type: String,
    required: [true, 'User agent can not be empty'],
  },
  count: {
    type: Number,
    default: 1,
    required: [true, 'Count can not be empty'],
  }
});