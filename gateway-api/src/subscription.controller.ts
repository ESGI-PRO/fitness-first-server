import {
  Controller,
  Post,
  Req,
  Res,
  Body,
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
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { GetUserSubscriptionResponseDto } from './interfaces-requests-responses/subscription/dto/get-user-subscriptions-response.dto';
import { GetUserSubscriptionsDto } from './interfaces-requests-responses/subscription/dto/get-user-subcriptions.dto';
import { GetUserInvoicesResponseDto } from './interfaces-requests-responses/subscription/dto/get-user-invoices-response.dto';
import { GetUserInvoicesDto } from './interfaces-requests-responses/subscription/dto/get-user-invoices.dto';

@Controller('subscription')
@ApiTags('subscription')
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

    if (!signature) {
      throw new BadRequestException('Missing stripe-signature header');
    }

    const event = this.stripe.webhooks.constructEvent(req.rawBody, signature, process.env.WEBHOOK_SECRET)

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

  // find user  subscriptions
  @ApiOkResponse({
    type: GetUserSubscriptionResponseDto,
  })
  @Post('/find-user-subscriptions')
  public async findSubscriptionByUserId(@Body() req: GetUserSubscriptionsDto): Promise<GetUserSubscriptionResponseDto>  {
    const { userId } = req;

    const response = await firstValueFrom(
      this.subscriptionServiceClient.send('find_user_subscriptions', userId),
    );

    return {
      status: response.status,
      message: response.message,
      subscriptions: response.subscriptions,
      errors: null
    }
  }

  //find user invoices
  @ApiOkResponse({
    type: GetUserInvoicesResponseDto,
  })
  @Post('/find-user-invoices')
  public async findUserInvoices(@Body() req: GetUserInvoicesDto): Promise<GetUserInvoicesResponseDto>  {
    const { userId } = req;

    const response = await firstValueFrom(
      this.subscriptionServiceClient.send('find_invoices_by_userId', userId),
    );
    return {
      status: response.status,
      message: response.message,
      invoices: response.invoices,
      errors: null
    }
  }

}
