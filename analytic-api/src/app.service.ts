import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Analyticsinterface, AnalyticsVisitorsinterface } from './dto_interface/analytics.interface';
import { Analytics_MODEL,  AnalyticsVisitors_MODEL } from './services/config/constants';
import { CreateAnalyticsDto, CreateAnalyticsVisitorsDto, FindAnalyticsDtoBy, FindAnalyticsVisitorsDto, GetAnalyticEventDto, GetAnalyticsDto } from './dto_interface/analytics.dto';

@Injectable()
export class AppService {
  constructor(
    @Inject(Analytics_MODEL)
    private analyticsModel: Model<Analyticsinterface>,
    @Inject(AnalyticsVisitors_MODEL)
    private analyticsVisitorsModel: Model<AnalyticsVisitorsinterface>,
  ) {}

  async createAnalytics(createAnalyticsDto: CreateAnalyticsDto): Promise<Analyticsinterface> {
    const createdAnalytics = new this.analyticsModel(createAnalyticsDto);
    return createdAnalytics.save();
  }

  async findAllAnalytics(): Promise<Analyticsinterface[]> {
    return this.analyticsModel.find().exec();
  }

  async findAnalyticsById(id: string): Promise<Analyticsinterface> {
    return this.analyticsModel.findById(id);
  }

  //visitors
  async createVisitors(createAnalyticsVisitorsDto: CreateAnalyticsVisitorsDto): Promise<AnalyticsVisitorsinterface> {
    const createdAnalyticsVisitors = new this.analyticsVisitorsModel(createAnalyticsVisitorsDto);
    return createdAnalyticsVisitors.save();
  }

  async findAllAnalyticsVisitors(): Promise<AnalyticsVisitorsinterface[]> {
    return this.analyticsVisitorsModel.find().exec();
  }

  async findAnalyticsVisitorsById(appKey: string): Promise<AnalyticsVisitorsinterface> {
    return this.analyticsVisitorsModel.findOne({appKey: appKey});
  }

  async findAnalyticsVisitorsByAppName(appName: string): Promise<AnalyticsVisitorsinterface[]> {
    return this.analyticsVisitorsModel.find({appName: appName}).exec();
  }

  async updateAnalyticsVisitors(data: FindAnalyticsVisitorsDto): Promise<AnalyticsVisitorsinterface> {
    console.log("updateAnalyticsVisitors", data.apiKey);
    return this.analyticsVisitorsModel.findOneAndUpdate(
      {
        apiKey: data.apiKey
      }, 
      { $inc: {count: 1 },
        userAgent: data.userAgent
      }, 
      { new: true, upsert: true });
  }

}
