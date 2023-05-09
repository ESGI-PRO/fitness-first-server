import {
  Controller,
  Post,
  Req,
  Res,
  Inject,
  RawBodyRequest
} from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { ClientProxy } from '@nestjs/microservices';
import { Request, Response } from 'express'

@Controller('subscription')
export class UsersController {
  constructor(
    @Inject('SUBSCRIPTION_SERVICE') private readonly subscriptionServiceClient: ClientProxy,
  ) {}


  @Post('/webhook/stripe')
  public async webhook(@Req() req: RawBodyRequest<Request>, @Res() res: Response){
    await firstValueFrom(
      this.subscriptionServiceClient.send('webhook', {
        req, res
      }),
    );
  }

}
