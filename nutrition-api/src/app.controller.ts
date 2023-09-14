import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('nutrition')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    //deploy - on one main 1
    return this.appService.getHello();
  }
}
