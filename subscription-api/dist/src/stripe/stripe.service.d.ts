import { ClientProxy } from '@nestjs/microservices';
import { SubcriptionsService } from '../subcriptions/subcriptions.service';
import { PlansService } from '../plans/plans.service';
import { InvoicesService } from '../invoices/invoices.service';
export declare class StripeService {
    private readonly userServiceClient;
    private readonly subcriptionsService;
    private readonly plansService;
    private readonly invoicesService;
    private stripe;
    constructor(userServiceClient: ClientProxy, subcriptionsService: SubcriptionsService, plansService: PlansService, invoicesService: InvoicesService);
    webhook(data: {
        session: any;
        type: string;
    }): Promise<{
        status: any;
        message: string;
    }>;
}
