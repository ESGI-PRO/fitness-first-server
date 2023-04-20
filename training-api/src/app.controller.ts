import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('training')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  isLive(): string {
    return this.appService.isLive();
  }
}
