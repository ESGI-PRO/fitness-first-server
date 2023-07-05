"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripeService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const stripe_1 = require("stripe");
const subcriptions_service_1 = require("../subcriptions/subcriptions.service");
const plans_service_1 = require("../plans/plans.service");
const invoices_service_1 = require("../invoices/invoices.service");
const rxjs_1 = require("rxjs");
let StripeService = class StripeService {
    constructor(userServiceClient, subcriptionsService, plansService, invoicesService) {
        this.userServiceClient = userServiceClient;
        this.subcriptionsService = subcriptionsService;
        this.plansService = plansService;
        this.invoicesService = invoicesService;
        this.stripe = new stripe_1.Stripe(process.env.STRIPE_SECRET_KEY, {
            apiVersion: "2022-11-15"
        });
    }
    async webhook(data) {
        const { session, type } = data;
        const res = {
            status: common_1.HttpStatus.OK,
            message: ""
        };
        try {
            const subscriptionStripe = await this.stripe.subscriptions.retrieve(session.subscription);
            const { user } = await (0, rxjs_1.firstValueFrom)(this.userServiceClient.send('user_search_by_email', session.customer_details.email));
            switch (type) {
                case 'checkout.session.completed':
                    if (!user) {
                        res.status = common_1.HttpStatus.NOT_FOUND;
                        res.message = "Webhook Stripe user not found";
                        return res;
                    }
                    const activeSub = await this.subcriptionsService.findActiveSub(user === null || user === void 0 ? void 0 : user.id);
                    if (activeSub && activeSub.length > 0) {
                        this.stripe.subscriptions.update(activeSub[0].stripeId, {
                            cancel_at_period_end: false,
                        });
                    }
                    const plan = await this.plansService.findOneByStripeId(subscriptionStripe.plan.id);
                    if (plan && plan[0]) {
                        await this.subcriptionsService.create({
                            userId: user === null || user === void 0 ? void 0 : user.id,
                            planId: plan[0].id,
                            stripeId: subscriptionStripe.id,
                            currentPeriodStart: new Date(subscriptionStripe.current_period_start),
                            currentPeriodEnd: new Date(subscriptionStripe.current_period_end),
                            active: true
                        });
                        const usr = await (0, rxjs_1.firstValueFrom)(this.userServiceClient.send('user_update', {
                            id: user === null || user === void 0 ? void 0 : user.id,
                            userParams: { stripeId: session.customer }
                        }));
                    }
                    else {
                        res.status = common_1.HttpStatus.NOT_FOUND;
                        res.message = "Webhook Stripe plan not found";
                        return res;
                    }
                    break;
                case 'invoice.paid':
                    if (session.subscription) {
                        let subscription = null;
                        let count = 0;
                        const getSubscription = () => {
                            setTimeout(async () => {
                                subscription = await this.subcriptionsService.findByStripeId(session.subscription);
                                if (subscription && subscription.length > 0 || count > 4) {
                                    await this.invoicesService.create({
                                        subscriptionId: subscription[0].id,
                                        userId: user === null || user === void 0 ? void 0 : user.id,
                                        stripeId: session.id,
                                        amountPaid: session.amount_paid,
                                        number: session.number,
                                        hostedInvoiceUrl: session.hosted_invoice_url,
                                    });
                                    return;
                                }
                                else {
                                    count++;
                                    getSubscription();
                                }
                            }, 3000);
                        };
                        getSubscription();
                    }
                    break;
                default:
                    res.status = common_1.HttpStatus.BAD_REQUEST;
                    res.message = "";
                    return res;
            }
            res.status = common_1.HttpStatus.OK;
            res.message = "";
        }
        catch (err) {
            res.status = common_1.HttpStatus.BAD_REQUEST;
            res.message = `Webhook Error: ${err}`;
            return res;
        }
        return res;
    }
};
StripeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('USER_SERVICE')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy,
        subcriptions_service_1.SubcriptionsService,
        plans_service_1.PlansService,
        invoices_service_1.InvoicesService])
], StripeService);
exports.StripeService = StripeService;
//# sourceMappingURL=stripe.service.js.map