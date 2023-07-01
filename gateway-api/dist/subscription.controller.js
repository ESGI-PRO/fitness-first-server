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
exports.SubscriptionController = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const microservices_1 = require("@nestjs/microservices");
const stripe_1 = require("stripe");
let SubscriptionController = class SubscriptionController {
    constructor(subscriptionServiceClient) {
        this.subscriptionServiceClient = subscriptionServiceClient;
        this.stripe = new stripe_1.Stripe(process.env.STRIPE_SECRET_KEY, {
            apiVersion: "2022-11-15"
        });
    }
    async webhook(signature, req, res) {
        console.log("[/webhook/stripe]-req");
        if (!signature) {
            throw new common_1.BadRequestException('Missing stripe-signature header');
        }
        const event = this.stripe.webhooks.constructEvent(req.rawBody, signature, process.env.WEBHOOK_SECRET);
        console.log("[/webhook/stripe]-res", res);
        console.log("[/webhook/stripe]-event.data.object", event.data.object);
        const session = event.data.object;
        const response = await (0, rxjs_1.firstValueFrom)(this.subscriptionServiceClient.send('webhook_stripe', {
            session: {
                id: session.id,
                amount_paid: session.amount_paid,
                number: session.number,
                customer_details: {
                    email: session.customer_email || session.customer_details.email,
                },
                hosted_invoice_url: session.hosted_invoice_url,
                subscription: session.subscription,
                payment_status: session.payment_status,
                created: session.created,
                current_period_end: session.period_end,
                status: session.status,
                customer: session.customer
            },
            type: event.type,
        }));
        if (response.status === common_1.HttpStatus.OK) {
            res.status(common_1.HttpStatus.OK);
            res.json({ received: true });
        }
        else {
            if (response.message) {
                res.status(response.status).send(response.message);
            }
            else {
                res.status(response.status);
            }
        }
        return res;
    }
};
__decorate([
    (0, common_1.Post)('/webhook/stripe'),
    __param(0, (0, common_1.Headers)('stripe-signature')),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], SubscriptionController.prototype, "webhook", null);
SubscriptionController = __decorate([
    (0, common_1.Controller)('subscription'),
    __param(0, (0, common_1.Inject)('SUBSCRIPTION_SERVICE')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], SubscriptionController);
exports.SubscriptionController = SubscriptionController;
//# sourceMappingURL=subscription.controller.js.map