import { ClientProxy } from '@nestjs/microservices';
import { Response } from 'express';
import RequestWithRawBody from './interfaces-requests-responses/subscription/requestWithRawBody.interface';
export declare class SubscriptionController {
    private readonly subscriptionServiceClient;
    private stripe;
    constructor(subscriptionServiceClient: ClientProxy);
    webhook(signature: string, req: RequestWithRawBody, res: Response): Promise<Response<any, Record<string, any>>>;
}
