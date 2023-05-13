import { Body, Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { AppService } from './services/app.service';
import { MessagePattern, ClientProxy } from '@nestjs/microservices';
import { AnalyticRequest, UpdateAnalyticRequest } from './request/analytic.request';
import { Analytic } from '@prisma/client';
@Controller('analytic')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('analityc_is_live')
  public async isLive(): Promise<any> {
    const islive = await this.appService.isLive();
    return islive;
  }

  @MessagePattern('add_analytic')
  public async addAnalytic(@Body() data: Analytic): Promise<any> {
    const addAnalytic = await this.appService.addAnalytic(data);
    return addAnalytic;
  }

  @MessagePattern('get_all_analytics')
  public async getAllAnalytics(): Promise<Analytic[]> {
    const getAllAnalytics = await this.appService.getAllAnalytics();
    return getAllAnalytics;
  }

  @MessagePattern('get_analytic_by_id')
  public async getAnalyticById(@Param("id", new ParseUUIDPipe) id: string): Promise<Analytic> {
    const analytic = await this.appService.getAnalyticById(id);
    return analytic;
  }
}
