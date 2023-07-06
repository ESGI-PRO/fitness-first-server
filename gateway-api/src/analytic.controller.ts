import {
  Controller,
  Post,
  Get,
  Body,
  Inject,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags, ApiOkResponse, ApiCreatedResponse, ApiBearerAuth } from '@nestjs/swagger';
import { CreateAnalyticDto, CreateAnalyticVisitorsCountDto } from './interfaces-requests-responses/analytic/analytic.request';
import {IAnalyticCreateResponse , IAnalyticsResponse, IAnalyticsVisitorResponse, IAnalyticsVisitorCreateResponse } from './interfaces-requests-responses/analytic/analytic.response';
import { firstValueFrom } from 'rxjs';
import { Authorization } from './decorators/authorization.decorator';
import { Permission } from './decorators/permission.decorator';
@Controller('analytics')
@ApiTags('analytics')
export class AnalyticController {
  constructor(
    @Inject('ANALYTIC_SERVICE') private readonly analyticServiceClient: ClientProxy,
  ) {}

  //create analytics - count visitors
  @Post("/create_analytics")
  @Authorization(true)
  @ApiBearerAuth('access-token')
  @Permission('create_analytics')
  @ApiCreatedResponse({
    type: IAnalyticCreateResponse
  })
  async createAnalytics(@Body() data: CreateAnalyticDto) : Promise<IAnalyticCreateResponse> {
    return await firstValueFrom(this.analyticServiceClient.send('create_analytics',data));
  }

  //create visitors
  @Post("/create_visitors")
  @Authorization(true)
  @ApiBearerAuth('access-token')
  @Permission('create_visitors')
  @ApiCreatedResponse({
    type: IAnalyticsVisitorCreateResponse
  })
  async createVisitors(@Body() data: CreateAnalyticVisitorsCountDto) : Promise<IAnalyticsVisitorCreateResponse> {
    const visitor = await firstValueFrom(this.analyticServiceClient.send('create_visitors', data));
    return visitor
  }

  @Post("/update_analytics_visitors")
  @Authorization(true)
  @ApiBearerAuth('access-token')
  @Permission('update_analytics_visitors')
  @ApiCreatedResponse({
    type: IAnalyticsVisitorResponse
  })
  async updateAnalyticsVisitors(@Body() data: CreateAnalyticVisitorsCountDto) : Promise<IAnalyticsVisitorResponse> {
    const visitors = await firstValueFrom(this.analyticServiceClient.send('update_analytics_visitors', data));
    return visitors
  }



  //get analytics - visitors count
  @Get("/find_all_analytics")
  @Authorization(true)
  @ApiBearerAuth('access-token')
  @Permission('find_all_analytics')
  @ApiOkResponse({
      type: IAnalyticsResponse
  })
  async findAllAnalytics() : Promise<IAnalyticsResponse> {
    const data = await firstValueFrom(this.analyticServiceClient.send('find_all_analytics', {}));
    return data
  }

  // get analytics visitors count
  @Get("/analytics_visitors")
  @Authorization(true)
  @ApiBearerAuth('access-token')
  @Permission('find_all_analytics_visitors')
  @ApiOkResponse({
    type: IAnalyticsVisitorResponse
  })
  async findAllAnalyticsVisitors() : Promise<IAnalyticsVisitorResponse> {
    const data = await  firstValueFrom(this.analyticServiceClient.send('find_all_analytics_visitors', {}));
    return data
  }

  // get analytics by body params
  @Post("/find_analytics_by_params")
  @Authorization(true)
  @ApiBearerAuth('access-token')
  @Permission('find_analytics_by_params')
  @ApiOkResponse({
    type: IAnalyticsResponse
  })
  async findAnalyticsBy(@Body() data: CreateAnalyticDto) : Promise<IAnalyticsResponse> {
    const analytics = await firstValueFrom(this.analyticServiceClient.send('find_analytics_by_params', data));
    return analytics
  }

  // get analytics visitors by body params
  @Post("/find_analytics_visitors_by_params")
  @Authorization(true)
  @ApiBearerAuth('access-token')
  @Permission('find_analytics_visitors_by_params')
  @ApiOkResponse({
    type: IAnalyticsVisitorResponse
  })
  async findAnalyticsVisitorsBy(@Body() data: CreateAnalyticVisitorsCountDto): Promise<IAnalyticsVisitorResponse>  {
    const analyticsVisitors = await firstValueFrom(this.analyticServiceClient.send('find_analytics_visitors_by_params', data));
    return  analyticsVisitors;
  }

}
