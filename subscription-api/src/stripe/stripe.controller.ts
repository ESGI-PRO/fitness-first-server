import { Controller, RawBodyRequest } from '@nestjs/common';
import { StripeService } from './stripe.service';
import { MessagePattern } from '@nestjs/microservices';
import { Request, Response } from 'express'

@Controller('stripe')
export class StripeController {
    constructor(private stripeService:StripeService
        ){}

    @MessagePattern('webhook')
    webhook(data: {req: RawBodyRequest<Request>, res: Response}){
        return this.stripeService.webhook(data.req, data.res)
    }

}
