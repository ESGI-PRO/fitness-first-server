import { Controller, RawBodyRequest } from '@nestjs/common';
import { StripeService } from './stripe.service';
import { MessagePattern } from '@nestjs/microservices';
import { Response } from 'express'

@Controller('stripe')
export class StripeController {
    constructor(private stripeService: StripeService
        ){}

    @MessagePattern('webhook_stripe')
    async handleIncomingEvents(data: {session: any, type: string}) {
        console.log("[webhook-here-bro]", data)
        return this.stripeService.webhook(data)
    }

}
