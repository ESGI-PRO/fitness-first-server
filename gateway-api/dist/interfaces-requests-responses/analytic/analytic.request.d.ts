export declare class AnalytiqueEventinterface {
    readonly eventName: string;
    readonly eventAction: string;
    readonly eventCategory: string;
    readonly eventPage: string;
    readonly date: string;
    readonly events?: JSON;
}
export interface AnalyticInterface {
    readonly appName: string;
    readonly apiKey: string;
    readonly userAgent: string;
    readonly baseUrl: string;
    readonly data: AnalytiqueEventinterface;
}
export interface AnalyticsVisitorsinterface {
    readonly appName: string;
    readonly apiKey: string;
    readonly baseUrl: string;
    readonly userAgent: string;
    readonly count: number;
}
export declare class CreateAnalyticDto {
    appName: string;
    apiKey: string;
    userAgent: string;
    baseUrl: string;
    data: object;
}
export declare class GetAnalyticDto {
    appName: string;
    apiKey: string;
    userAgent: string;
    baseUrl: string;
    data: object;
}
export declare class GetAllAnalyticsDto {
    Analytics: Array<GetAnalyticDto>;
}
export declare class GetAnalyticVisitorsDto {
    appName: string;
    apiKey: string;
    userAgent: string;
    baseUrl: string;
    count: number;
}
export declare class CreateAnalyticVisitorsCountDto {
    appName: string;
    apiKey: string;
    userAgent: string;
    baseUrl: string;
}
