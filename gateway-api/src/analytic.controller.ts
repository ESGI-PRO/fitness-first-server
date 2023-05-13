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
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags, ApiOkResponse, ApiCreatedResponse, ApiBody } from '@nestjs/swagger';
import { AnalyticInterface, CreateAnalyticDto, GetAllAnalyticsDto, GetAnalyticDto } from './requests/analytic/analytic.request';
import { randomUUID } from 'crypto';
@Controller('analytic')
@ApiTags('analytic')
export class AnalyticController {
  constructor(
    @Inject('ANALYTIC_SERVICE') private readonly analyticServiceClient: ClientProxy,
  ) {}


  @Get("/islive")
  @ApiOkResponse({
    type: String,
  })
  public async isLive(): Promise<any> {
    const islive = this.analyticServiceClient.send('analityc_is_live', {});
    return islive;
  }

  @Post()
  @ApiBody({ type: CreateAnalyticDto,})
  public async addAnalytic(@Body() data: CreateAnalyticDto): Promise<any> {
    const addAnalytic = this.analyticServiceClient.send('add_analytic', data);
    return addAnalytic;
  }

  @Get("/all")
  @ApiOkResponse({ type: [GetAllAnalyticsDto],})
  public async getAllAnalytics(): Promise<any> {
    const getAllAnalytics = this.analyticServiceClient.send('get_all_analytics', {});
    return getAllAnalytics;
  }

  @Get("/:id")
  @ApiCreatedResponse({type: CreateAnalyticDto,})
  public async getAnalyticById(@Param("id", new ParseUUIDPipe) id: string): Promise<any> {
    console.log("analytic getaway send id :", id);
    const analytic = this.analyticServiceClient.send('get_analytic_by_id', id);
    return analytic;
  }

}
