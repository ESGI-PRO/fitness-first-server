import { ClientProxy } from '@nestjs/microservices';
export declare class AnalyticController {
    private readonly analyticServiceClient;
    constructor(analyticServiceClient: ClientProxy);
    createAnalytics(data: any): import("rxjs").Observable<any>;
    countAnalyticsVisitors(data: any): import("rxjs").Observable<any>;
    createVisitors(data: any): import("rxjs").Observable<any>;
    findAllAnalytics(): import("rxjs").Observable<any>;
    findAnalyticsById(data: any): import("rxjs").Observable<any>;
    findAllAnalyticsVisitors(): import("rxjs").Observable<any>;
    findAnalyticsVisitorsById(appKey: any): import("rxjs").Observable<any>;
    findAnalyticsVisitorsByAppName(appName: any): import("rxjs").Observable<any>;
}
