import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsObject, IsOptional, IsNumber } from "class-validator";

export class AnalytiqueEventinterface {
  readonly eventName: string;
  readonly eventAction: string;
  readonly eventCategory: string;
  readonly eventPage: string;
  readonly date: string;
  readonly events?: any;
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


export class CreateAnalyticDto {
    @ApiProperty({ example: 'appId123'})
    appName: string;

    @ApiProperty({ example: 'apikey123'})
    apiKey: string;

    @ApiProperty({ example: 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.110 Safari/537.36'})
    userAgent: string;

    @ApiProperty({ example: 'www.appurl.com'})
    baseUrl: string;

    @ApiProperty({ example: {
        "eventName": "name of event",
        "eventAction": "action",
        "eventCategory": "category",
        "eventPage": "login",
        "date": "2020-01-01",
        "events": {
            "buttonName": "optionnal",
            "buttonId": "button1",
        }
    }})
    data: AnalytiqueEventinterface;
}

export class GetAnalyticDto {
    @ApiProperty({ example: 'appId123'})
    appName: string;

    @ApiProperty({ example: 'apikey123'})
    apiKey: string;

    @ApiProperty({ example: 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.110 Safari/537.36'})
    userAgent: string;

    @ApiProperty({ example: 'www.appurl.com'})
    baseUrl: string;

    @ApiProperty({ example: {
        "eventName": "name of event",
        "eventAction": "action",
        "eventCategory": "category",
        "eventPage": "login",
        "date": "2020-01-01",
        "events": {
            "buttonName": "optionnal",
            "buttonId": "button1",
        }
    }})
    data: AnalytiqueEventinterface;
}


export class GetAllAnalyticsDto {

    @ApiProperty({ example: {
        appName:"name of app",
        apiKey:"apikey",
        userAgent: "user agent",
        baseUrl: "www.appurl.fr",
        data: {
        "eventName": "name of event",
        "eventAction": "action",
        "eventCategory": "category",
        "eventPage": "login",
        "date": "2020-01-01",
        "events": {
            "buttonName": "optionnal",
            "buttonId": "button1",
        }
    }
    }})
    Analytics: Array<GetAnalyticDto>;    
}


export class GetAnalyticVisitorsDto {
    @ApiProperty({ example: 'appId123'})
    appName: string;

    @ApiProperty({ example: 'apikey123'})
    apiKey: string;

    @ApiProperty({ example: 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.110 Safari/537.36'})
    userAgent: string;

    @ApiProperty({ example: 'www.appurl.com'})
    baseUrl: string;

    @ApiProperty({ example: 1 })
    count: number;  

}

export class CreateAnalyticVisitorsCountDto {
    @ApiProperty({ example: 'appId123'})
    appName: string;

    @ApiProperty({ example: 'apikey123'})
    apiKey: string;

    @ApiProperty({ example: 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.110 Safari/537.36'})
    userAgent: string;

    @ApiProperty({ example: 'www.appurl.com'})
    baseUrl: string;
}



