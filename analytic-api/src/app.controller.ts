import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { CreateAnalyticsDto, CreateAnalyticsVisitorsDto, GetAnalyticsDto, GetAnalyticEventDto, FindAnalyticsDtoBy, FindAnalyticsVisitorsDto } from './dto_interface/analytics.dto';
import { Analyticsinterface } from './dto_interface/analytics.interface';

@Controller('analytics')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Post("/createAnalytics")
  // @HttpCode(200)
  @MessagePattern('create_analytics')
  createAnalytics(data: CreateAnalyticsDto) {
    console.log("data", data)
    return this.appService.createAnalytics(data);
  }

  // @Get("/Analytics")
  // @HttpCode(200)
  @MessagePattern('find_all_analytics')
  findAllAnalytics() {
    const analytics = this.appService.findAllAnalytics();
    console.log("all analytics", analytics)
    return analytics;
  }

  // @Get("/Analytics/:id")
  // @HttpCode(200)
  @MessagePattern('find_analytics_by_id')
  findAnalyticsById(@Body() data: FindAnalyticsDtoBy ) {
    const analytics = this.appService.findAnalyticsById(data.id);
    console.log("analytics", analytics)
    return analytics;
  }

  //create visitors
  // @Post("/createVisitors")
  // @HttpCode(200)
  @MessagePattern('create_visitors')
  createVisitors(@Body() data: CreateAnalyticsVisitorsDto) {
    //console.log("data", data)
    return this.appService.createVisitors(data);
  }

  // @Get("/AnalyticsVisitors")
  // @HttpCode(200)
  @MessagePattern('find_all_analytics_visitors')
  findAllAnalyticsVisitors() {
    const analyticsVisitors = this.appService.findAllAnalyticsVisitors();
    console.log("all analyticsVisitors", analyticsVisitors)
    return analyticsVisitors;
  }

  // @Get("/AnalyticsVisitors/:appKey")
  // @HttpCode(200)
  @MessagePattern('find_analytics_visitors_by_id')
  findAnalyticsVisitorsById(@Body() data: FindAnalyticsVisitorsDto) {
    console.log("analyticsVisitors", data)
    const analyticsVisitors = this.appService.findAnalyticsVisitorsById(data.apiKey);
    return analyticsVisitors;
  }

  // @Get("/AnalyticsVisitors/:appName")
  // @HttpCode(200)
  @MessagePattern('find_analytics_visitors_by_app_name')
  findAnalyticsVisitorsByAppName(@Body() data: FindAnalyticsVisitorsDto) {
    const analyticsVisitors = this.appService.findAnalyticsVisitorsByAppName(data.appName);
    console.log("analyticsVisitors", analyticsVisitors)
    return analyticsVisitors;
  }

  // @Post("/AnalyticsVisitors")
  // @HttpCode(200)
  @MessagePattern('update_analytics_visitors')
  updateAnalyticsVisitors(@Body() data: FindAnalyticsVisitorsDto) {
    console.log("analyticsVisitors----", data)
    const analyticsVisitors = this.appService.updateAnalyticsVisitors(data);
    return analyticsVisitors;
  }
}
