import { Document } from 'mongoose';

export class AnalytiqueEventinterface {
  readonly eventName: string;
  readonly eventAction: string;
  readonly eventCategory: string;
  readonly eventPage: string;
  readonly date: string;
  readonly events?: JSON;
} 

export interface Analyticsinterface extends Document {
  readonly appName: string;
  readonly apiKey: string;
  readonly userAgent: string;
  readonly baseUrl: string;
  readonly data: AnalytiqueEventinterface;
}

export interface AnalyticsVisitorsinterface extends Document {
  readonly appName: string;
  readonly apiKey: string;
  readonly baseUrl: string;
  readonly userAgent: string;
  readonly count: number;
}


