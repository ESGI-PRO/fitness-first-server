import { ClientProxy } from '@nestjs/microservices';
import { Response } from 'express';
import RequestWithRawBody from './interfaces-requests-responses/subscription/requestWithRawBody.interface';
import { GetUserSubscriptionResponseDto } from './interfaces-requests-responses/subscription/dto/get-user-subscriptions-response.dto';
import { GetUserSubscriptionsDto } from './interfaces-requests-responses/subscription/dto/get-user-subcriptions.dto';
import { GetUserInvoicesResponseDto } from './interfaces-requests-responses/subscription/dto/get-user-invoices-response.dto';
import { GetUserInvoicesDto } from './interfaces-requests-responses/subscription/dto/get-user-invoices.dto';
export declare class SubscriptionController {
    private readonly subscriptionServiceClient;
    private stripe;
    constructor(subscriptionServiceClient: ClientProxy);
    webhook(signature: string, req: RequestWithRawBody, res: Response): Promise<Response<any, Record<string, any>>>;
    findSubscriptionByUserId(req: GetUserSubscriptionsDto): Promise<GetUserSubscriptionResponseDto>;
    findUserInvoices(req: GetUserInvoicesDto): Promise<GetUserInvoicesResponseDto>;
    findAllSubscriptions(): Promise<import("rxjs").Observable<any>>;
    findAllInvoices(): Promise<import("rxjs").Observable<any>>;
    findAllPlans(): Promise<import("rxjs").Observable<any>>;
    createPlan(req: any): Promise<import("rxjs").Observable<any>>;
}
