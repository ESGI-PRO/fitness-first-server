import { ClientProxy } from '@nestjs/microservices';
import { CreateAnalyticDto, CreateAnalyticVisitorsCountDto } from './interfaces-requests-responses/analytic/analytic.request';
import { IAnalyticCreateResponse, IAnalyticsResponse, IAnalyticsVisitorResponse, IAnalyticsVisitorCreateResponse } from './interfaces-requests-responses/analytic/analytic.response';
export declare class AnalyticController {
    private readonly analyticServiceClient;
    constructor(analyticServiceClient: ClientProxy);
    createAnalytics(data: CreateAnalyticDto): Promise<IAnalyticCreateResponse>;
    createVisitors(data: CreateAnalyticVisitorsCountDto): Promise<IAnalyticsVisitorCreateResponse>;
    updateAnalyticsVisitors(data: CreateAnalyticVisitorsCountDto): Promise<IAnalyticsVisitorResponse>;
    findAllAnalytics(): Promise<IAnalyticsResponse>;
    findAllAnalyticsVisitors(): Promise<IAnalyticsVisitorResponse>;
    findAnalyticsBy(data: CreateAnalyticDto): Promise<IAnalyticsResponse>;
    findAnalyticsVisitorsBy(data: CreateAnalyticVisitorsCountDto): Promise<IAnalyticsVisitorResponse>;
}
