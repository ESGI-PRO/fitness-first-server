import {
  Controller,
  Post,
  Put,
  Get,
  Body,
  Req,
  Inject,
  HttpStatus,
  HttpException,
  Param,
  ParseUUIDPipe,
  HttpCode,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags, ApiOkResponse, ApiCreatedResponse, ApiBody } from '@nestjs/swagger';
import { AnalyticInterface, CreateAnalyticDto, GetAllAnalyticsDto, GetAnalyticDto } from './requests/analytic/analytic.request';
import { randomUUID } from 'crypto';
@Controller('analytics')
@ApiTags('analytics')
export class AnalyticController {
  constructor(
    @Inject('ANALYTIC_SERVICE') private readonly analyticServiceClient: ClientProxy,
  ) {}

  @Post("/createAnalytics")
  @HttpCode(200)
  createAnalytics(@Body() data: any) {
    console.log("data", data)
    return this.analyticServiceClient.send('create_analytics',data);
  }

  @Get("/Analytics")
  @HttpCode(200)
  findAllAnalytics() {
    const analytics = this.analyticServiceClient.send('find_all_analytics', {});
    console.log("all analytics", analytics)
    return analytics;
  }

  @Get("/Analytics/:id")
  @HttpCode(200)
  findAnalyticsById(@Param("id", new ParseUUIDPipe) data: any) {
    const analytics = this.analyticServiceClient.send('find_analytics_by_id', data);
    console.log("analytics", analytics)
    return analytics;
  }

  //create visitors
  @Post("/createVisitors")
  @HttpCode(200)
  createVisitors(@Body() data: any) {
    //console.log("data", data)
    return this.analyticServiceClient.send('create_visitors', data);
  }

  @Get("/AnalyticsVisitors")
  @HttpCode(200)
  findAllAnalyticsVisitors() {
    const analyticsVisitors = this.analyticServiceClient.send('find_all_analytics_visitors', {});
    console.log("all analyticsVisitors", analyticsVisitors)
    return analyticsVisitors;
  }

  @Get("/AnalyticsVisitors/:appKey")
  @HttpCode(200)
  findAnalyticsVisitorsById(@Param("appKey") appKey: any) {
    console.log("analyticsVisitors", appKey)
    const analyticsVisitors = this.analyticServiceClient.send('find_analytics_visitors_by_id', appKey);
    return analyticsVisitors;
  }

  @Get("/AnalyticsVisitors/:appName")
  @HttpCode(200)
  findAnalyticsVisitorsByAppName(@Param("appName") appName: any) {
    const analyticsVisitors = this.analyticServiceClient.send('find_analytics_visitors_by_app_name', appName);
    console.log("analyticsVisitors", analyticsVisitors)
    return analyticsVisitors;
  }

  @Post("/AnalyticsVisitors")
  @HttpCode(200)
  updateAnalyticsVisitors(@Body() data: any) {
    console.log("analyticsVisitors----", data)
    const analyticsVisitors = this.analyticServiceClient.send('update_analytics_visitors', data);
    return analyticsVisitors;
  }

  // @Get("/islive")
  // @ApiOkResponse({
  //   type: String,
  // })
  // public async isLive(): Promise<any> {
  //   const islive = this.analyticServiceClient.send('analityc_is_live', {});
  //   return islive;
  // }
}
