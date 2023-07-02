import { Body, Controller, Get, HttpCode, Post, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { IAnalyticsVisitorResponse,  IAnalyticResponse, IAnalyticsResponse, IAnalyticsVisitorsResponse } from './dto_interface/analytics.interface';
import { CreateAnalyticsDto, CreateAnalyticsVisitorsDto, FindAnalyticsDtoBy, FindAnalyticsVisitorsDto, GetAnalyticEventDto, GetAnalyticsDto } from './dto_interface/analytics.dto';
@Controller('analytics')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @MessagePattern('create_analytics')
  async createAnalytics(data: CreateAnalyticsDto): Promise<IAnalyticResponse> {
    let result: IAnalyticResponse;
    try{
      const analytics = await this.appService.createAnalytics(data);
      result = {
        status: HttpStatus.CREATED,
        message: 'create_analytics_success',
        data: analytics,
        errors: null,
      }
    }catch(err){
      result = {
        status: HttpStatus.NOT_FOUND,
        message: 'create_analytics_failed',
        data: null,
        errors: err,
      }
    }

    return result
  }

  //create visitors
  @MessagePattern('create_visitors')
  async createVisitors(@Body() data: CreateAnalyticsVisitorsDto) : Promise<IAnalyticsVisitorResponse>{
    let result: IAnalyticsVisitorResponse;
    const analyticVisitor = await this.appService.createVisitors(data);
    try{
      result = {
        status: HttpStatus.CREATED,
        message: 'create_analytics_visitors_success',
        data: analyticVisitor,
        errors: null,
      }
    }catch(err){
      result = {
        status: HttpStatus.NOT_FOUND,
        message: 'create_analytics_visitors_failed',
        data: null,
        errors: err,
      }
    }
    
    return result
  }

  @MessagePattern('find_all_analytics')
  async findAllAnalytics() : Promise<IAnalyticsResponse>  {
    let result:  IAnalyticsResponse;
    try{
      const analytics = await this.appService.findAllAnalytics();
      result = {
        status: HttpStatus.OK,
        message: 'get_all_analytics_success',
        data: analytics,
        errors: null,
      }
  
    }catch(err){
      result = {
        status: HttpStatus.NOT_FOUND,
        message: 'get_all_analytics_failed',
        data: null,
        errors: err,
      }
  }

  return result;
}

  @MessagePattern('find_all_analytics_visitors')
  async findAllAnalyticsVisitors()  : Promise<IAnalyticsVisitorsResponse> {
    let result:  IAnalyticsVisitorsResponse;
    try{
      const analyticsVisitors = await this.appService.findAllAnalyticsVisitors();
      result = {
        status: HttpStatus.OK,
        message: 'get_all_analytic_visitor_success',
        data: analyticsVisitors,
        errors: null,
      }
  
    }catch(err){
      result = {
        status: HttpStatus.NOT_FOUND,
        message: 'get_all_analytic_visitor_failed',
        data: null,
        errors: err,
      }
    }

    return result;
  }


  @MessagePattern('update_analytics_visitors')
  async updateAnalyticsVisitors(@Body() data: FindAnalyticsVisitorsDto): Promise<IAnalyticsVisitorResponse> {

    let result: IAnalyticsVisitorResponse;

    if (data) {
      try{
        const analyticsVisitor = await this.appService.updateAnalyticsVisitors(data);
        result = {
          status: HttpStatus.OK,
          message: 'update_analytic_visitor_by_params_success',
          data: analyticsVisitor,
          errors: null,
        };
      }catch(err: any){
        result = {
          status: HttpStatus.BAD_REQUEST,
          message: 'update_analytic_visitor_by_params_bad_request',
          data: null,
          errors: err,
        }
      }

      return result;
    }
  }


  //find analytics by params
  @MessagePattern('find_analytics_by_params')
  async findAnalyticsByParams(@Body() data: FindAnalyticsDtoBy) : Promise<IAnalyticsResponse>  {

    let result: IAnalyticsResponse;
    if (data) {
      try{
        const analytics =   await this.appService.findAnalyticsByParams(data);

        result = {
          status: HttpStatus.OK,
          message: 'get_analytics_by_params_success',
          data: analytics,
          errors: null,
        };
      }catch(err: any){
        result = {
          status: HttpStatus.BAD_REQUEST,
          message: 'get_analytics_by_params_bad_request',
          data: null,
          errors: err,
        }
      }


      return result;
    }
  }

  //find analytics visitors by params
  @MessagePattern('find_analytics_visitors_by_params')
  async findAnalyticsVisitorsByParams(@Body() data: FindAnalyticsVisitorsDto): Promise<IAnalyticsVisitorsResponse> {

    let result: IAnalyticsVisitorsResponse;
    if (data) {
      try{
        const analyticsVisitors = await this.appService.findAnalyticsVisitorsByParams(data);
        result = {
          status: HttpStatus.OK,
          message: 'get_analytics_visitors_by_params_success',
          data: analyticsVisitors,
          errors: null,
        };
      }catch(err: any){
        result = {
          status: HttpStatus.BAD_REQUEST,
          message: 'get_analytics__visitors_by_params_bad_request',
          data: null,
          errors: null,
        }
      }

      return result;
    }
  }
}
