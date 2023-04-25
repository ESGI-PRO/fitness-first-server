import { Controller, Get } from '@nestjs/common';
import { AppService } from './services/app.service';
import { MessagePattern, ClientProxy } from '@nestjs/microservices';

@Controller('analytic')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('analityc_is_live')
  public async isLive(): Promise<any> {
    const islive = await this.appService.isLive();
    return islive;
  }

  @MessagePattern('islive_witout_await')
  isLivewithout(): any {
     return this.appService.isLive();
  }
}
