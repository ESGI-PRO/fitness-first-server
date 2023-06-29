import * as mongoose from 'mongoose';
import { AnalytiqueEventinterface } from '../../dto_interface/analytics.interface';

export const AnalyticsSchema = new mongoose.Schema({
  appName: String,
  apiKey: String,
  baseUrl: String,
  userAgent: String,
  data: {},
});

export const AnalyticsVisitorsSchema = new mongoose.Schema({
  appName: String,
  apiKey: String,
  baseUrl: String,
  userAgent: String,
  count: Number, 
});