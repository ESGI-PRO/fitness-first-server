import { Injectable, RawBodyRequest, Inject, HttpStatus } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ClientProxy } from '@nestjs/microservices';
import { Stripe } from 'stripe';
import { Request, Response } from 'express'
import { SubcriptionsService } from '../subcriptions/subcriptions.service';
import {PlansService} from '../plans/plans.service';
import {InvoicesService} from '../invoices/invoices.service';

@Injectable()
export class StripeService {
    private stripe;

    constructor(private readonly prisma: PrismaService,
        @Inject('USER_SERVICE') private readonly userServiceClient: ClientProxy,
        @Inject(SubcriptionsService) private readonly subcriptionsService: SubcriptionsService,
        @Inject(PlansService) private readonly plansService: PlansService,
        @Inject(InvoicesService) private readonly invoicesService: InvoicesService
    ) {
        this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
            apiVersion: "2022-11-15"
        })
    }


    public async webhook(req: RawBodyRequest<Request>, res: Response) {
        const sig = req.headers['stripe-signature'];
        let event;

        try {
            event = this.stripe.webhooks.constructEvent(req.rawBody, sig, process.env.WEBHOOK_SECRET);
            // Extract the object from the event.
            const session = event.data.object;
            const subscription_id = session['subscription']
            const subscription = await this.stripe.subscriptions.retrieve(subscription_id)
            const planId = subscription.plan.id


            // Handle the event
            switch (event.type) {
                case 'checkout.session.completed':
                    /*
                    Insert payment succeeded into the database
                    Allowed access to your service.
                    */
                    //Get user
                    const customerEmail = session.customer_details.email;
                    const user: any = this.userServiceClient.send('user_get_by_email', customerEmail)

                    if (!user) {
                        res.status(HttpStatus.NOT_FOUND).send("Webhook Stripe user not found");
                        return
                    }

                    //get active subscription fpr user from prisma
                    const activeSub = await this.subcriptionsService.findActiveSub(user?.id);

                    if (activeSub) {
                        this.stripe.subscriptions.update(activeSub[0].stripeId, {
                            cancel_at_period_end: false,
                        })
                    }

                    //get plan from prisma
                    const plan = await this.plansService.findOne(planId)
                    if(!plan){
                        res.status(HttpStatus.NOT_FOUND).send("Webhook Stripe plan not found");
                    }

                    //create subscription in prisma
                    await this.subcriptionsService.create({
                        userId: user?.id,
                        planId: plan.id,
                        stripeId: session.subscription,
                        status: session.payment_status,
                        currentPeriodStart: new Date(session.created * 1000),
                        currentPerionEnd: new Date(session.current_period_end * 1000),
                        active: true
                    })
                    // update user stripeId
                    /*await this.userServiceClient.send('user_update', {
                        id: user?.id,
                        stripeId: session.customer
                    })*/
                    console.log(`payment_succeeded: ${session.status}`);
                    break;
                case 'invoice.paid':
                    /*
                    Used to provision services after the trial has ended.
                    The status of the invoice will show up as paid.
                    Store the status in your database to reference
                    when a user accesses your service to avoid hitting
                    rate limits.
                    */
                    const subscriptionId = session.subscription;

                    // if subscriptionId get the matching subscription in prisma and create new invoice
                    if(subscriptionId){
                        const subscription = await this.subcriptionsService.findOne(subscriptionId)
                        if(subscription){
                            await this.invoicesService.create({
                                subscriptionId: subscription.id,
                                userId: user?.id,
                                stripeId: session.id,
                                amountPaid: session.amount_paid,
                                number: session.number,
                                hostedInvoiceUrl: session.hosted_invoice_url,
                            })
                        }
                    }

                    console.log(`Invoice.paid: ${session.status}`);
                    break;

                default:
                // Unexpected event type
                res.status(HttpStatus.BAD_REQUEST);
            }

            // Return a response to acknowledge receipt of the event
            res.status(HttpStatus.OK);
            res.json({ received: true });

        }
        catch (err) {
            res.status(HttpStatus.BAD_REQUEST).send(`Webhook Error: ${err}`);
        }

    }

    // await this.prisma.order.update({ where: { sessionId: session.id }, data: { status: session.payment_status } })
}
