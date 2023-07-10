import { StripeService } from './stripe.service';
export declare class StripeController {
    private stripeService;
    constructor(stripeService: StripeService);
    handleIncomingEvents(data: {
        session: any;
        type: string;
    }): Promise<{
        status: any;
        message: string;
    }>;
}
