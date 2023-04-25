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
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';

@Controller('analytic')
@ApiTags('analytic')
export class AnalyticController {
  constructor(
    @Inject('ANALYTIC_SERVICE') private readonly analyticServiceClient: ClientProxy,
  ) {}


  @Get()
  public async isLive(): Promise<any> {
    const islive = await this.analyticServiceClient.send('analityc_is_live', {});
    return islive;
  }

  @Get()
  isLiveWithoutAwait(): any {
    return this.analyticServiceClient.send('islive_witout_await', {});
  }

}
