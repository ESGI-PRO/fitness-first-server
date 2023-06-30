import {
  Controller,
  Post,
  Req,
  Res,
  Inject,
  Headers,
  BadRequestException,
  HttpStatus
} from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { ClientProxy } from '@nestjs/microservices';
import { Response } from 'express'
import RequestWithRawBody from './interfaces-requests-responses/subscription/requestWithRawBody.interface';
import { Stripe } from 'stripe';

@Controller('subscription')
export class SubscriptionController {
  private stripe: any;

  constructor(
    @Inject('SUBSCRIPTION_SERVICE') private readonly subscriptionServiceClient: ClientProxy,
  ) {
      this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
        apiVersion: "2022-11-15"
      })
  }


  @Post('/webhook/stripe')
  public async webhook( @Headers('stripe-signature') signature: string,
  @Req() req: RequestWithRawBody, @Res() res: Response){
    console.log("[/webhook/stripe]-req")
    if (!signature) {
      throw new BadRequestException('Missing stripe-signature header');
    }

    const event = this.stripe.webhooks.constructEvent(req.rawBody, signature, process.env.WEBHOOK_SECRET)
    console.log("[/webhook/stripe]-res", res)
    console.log("[/webhook/stripe]-event.data.object", event.data.object)
    const session = event.data.object


    const response = await firstValueFrom(
      this.subscriptionServiceClient.send('webhook_stripe', {
        session: {
          id: session.id,
          amount_paid: session.amount_paid,
          number: session.number,
          customer_details: {
            email:  session.customer_email || session.customer_details.email,
          },
          hosted_invoice_url:session.hosted_invoice_url,
          subscription: session.subscription,
          payment_status: session.payment_status,
          created: session.created,
          current_period_end: session.period_end,
          status: session.status,
          customer: session.customer
        },
        type: event.type,
      }),
    );

    if(response.status === HttpStatus.OK){
      res.status(HttpStatus.OK);
      res.json({ received: true });
    }else{
      if(response.message){
        res.status(response.status).send(response.message);
      }else{
        res.status(response.status)
      }

    }

    return res
  }

}
