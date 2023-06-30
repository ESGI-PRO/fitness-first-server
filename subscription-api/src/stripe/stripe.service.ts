import { Injectable, Inject, HttpStatus } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Stripe } from 'stripe';
import { SubcriptionsService } from '../subcriptions/subcriptions.service';
import {PlansService} from '../plans/plans.service';
import {InvoicesService} from '../invoices/invoices.service';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class StripeService {
    private stripe: any;

    constructor(
        @Inject('USER_SERVICE') private readonly userServiceClient: ClientProxy,
        private readonly subcriptionsService: SubcriptionsService,
        private readonly plansService: PlansService,
        private readonly invoicesService: InvoicesService
    ) {
        this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
            apiVersion: "2022-11-15"
        })
    }


    public async webhook(data: {session: any, type: string}) {
        const {session, type } = data

        const res = {
            status: HttpStatus.OK,
            message: ""
        }

        try {
            // retrieve stripe subscription
            const subscriptionStripe = await this.stripe.subscriptions.retrieve(session.subscription)


            // Handle the event
            switch (type) {
                case 'checkout.session.completed':
                    /*
                    Insert payment succeeded into the database
                    Allowed access to your service.
                    */
                    //Get user
                    const {user} = await firstValueFrom(this.userServiceClient.send('user_search_by_email', session.customer_details.email))

                    console.log("checkout.session.completed user", user)

                    if (!user) {

                        res.status = HttpStatus.NOT_FOUND
                        res.message = "Webhook Stripe user not found"
                        return res
                    }

                    //get active subscription fpr user from prisma
                    const activeSub = await this.subcriptionsService.findActiveSub(user?.id);
                    console.log("activeSub", activeSub)

                    if (activeSub && activeSub.length > 0) {
                        this.stripe.subscriptions.update(activeSub[0].stripeId, {
                            cancel_at_period_end: false,
                        })
                    }

                    //get plan from prisma
                    const plan = await this.plansService.findOneByStripeId(subscriptionStripe.plan.id)

                    console.log("[plan id]", plan)

                    if(plan && plan[0]){
                        console.log("[sub to create]", {
                            userId: user?.id,
                            planId: plan[0].id,
                            stripeId: subscriptionStripe.id,
                            currentPeriodStart: new Date(subscriptionStripe.current_period_start),
                            currentPerionEnd: new Date(subscriptionStripe.current_period_end),
                            active: true
                        })
                        //create subscription in prisma
                        await this.subcriptionsService.create({
                            userId: user?.id,
                            planId: plan[0].id,
                            stripeId: subscriptionStripe.id,
                            currentPeriodStart: new Date(subscriptionStripe.current_period_start),
                            currentPeriodEnd: new Date(subscriptionStripe.current_period_end),
                            active: true
                        })

                        console.log("user to update",  {
                            id: user?.id,
                            userParams: {stripeId: session.customer}
                        })
                        // update user stripeId
                        const usr = await firstValueFrom(this.userServiceClient.send('user_update', {
                            id: user?.id,
                            userParams: {stripeId: session.customer}
                        }))
                        console.log(`payment_succeeded: ${session.status}`);
                    }else{
                        res.status = HttpStatus.NOT_FOUND
                        res.message = "Webhook Stripe plan not found"
                        return res
                    }
                    break;

                case 'invoice.paid':
                    /*
                    Used to provision services after the trial has ended.
                    The status of the invoice will show up as paid.
                    Store the status in your database to reference
                    when a user accesses your service to avoid hitting
                    rate limits.
                    */
                   

                    // if session.subscription get the matching subscription in prisma and create new invoice
                    if(session.subscription){
                        console.log("[session.subscription]", session.subscription)
                        const subscription = await this.subcriptionsService.findByStripeId(session.subscription)
                        console.log("[subscription]", subscription)
                        if(subscription && subscription.length > 0){
                            console.log("[invoice to create]",{
                                subscriptionId: subscription[0].id,
                                userId: user?.id,
                                stripeId: session.id,
                                amountPaid: session.amount_paid,
                                number: session.number,
                                hostedInvoiceUrl: session.hosted_invoice_url,
                            })
                            await this.invoicesService.create({
                                subscriptionId: subscription[0].id,
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
                    res.status = HttpStatus.BAD_REQUEST
                    res.message = ""
                    return res
            }

            // Return a response to acknowledge receipt of the event
            res.status = HttpStatus.OK
            res.message = ""

        }
        catch (err) {
            res.status = HttpStatus.BAD_REQUEST
            res.message = `Webhook Error: ${err}`
            return res
        }

        return res

    }

}
