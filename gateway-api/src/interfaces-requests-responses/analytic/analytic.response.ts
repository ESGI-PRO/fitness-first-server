import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsObject, IsOptional, IsNumber } from "class-validator";

export interface BrowserInterface {
    readonly appName: string;
    readonly apiKey: string;
    readonly baseUrl: string;
  }
  export class AnalytiqueEventinterface {
    readonly eventName: string;
    readonly eventAction: string;
    readonly eventCategory: string;
    readonly eventPage: string;
    readonly date: string;
    readonly events?: any;
  } 
  
  export interface AnalyticsInterface extends Document {
    readonly appName: string;
    readonly apiKey: string;
    readonly userAgent: string;
    readonly baseUrl: string;
    readonly data: AnalytiqueEventinterface;
  }
  
  export interface AnalyticsVisitorsinterface extends Document {
    readonly appName: string;
    readonly apiKey: string;
    readonly baseUrl: string;
    readonly userAgent: string;
    readonly count: number;
  }

export class IAnalyticsResponse {
    @ApiProperty({ example: 200 })
    @IsNumber()
    status: number;
    @ApiProperty({ example: 'success' })
    @IsString()
    message: string;
    @ApiProperty({ example: [{
        "appName": "appId123",
        "apiKey": "apikey123",
        "userAgent": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.110 Safari/537.36",
        "baseUrl": "www.appurl.com",
        "data": {
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
    }]})
    data: AnalyticsInterface[];
    @ApiProperty({ example: null })
    errors: any;
  }

  export class IAnalyticResponse {
    @ApiProperty({ example: 200 })
    @IsNumber()
    status: number;
    @ApiProperty({ example: 'success' })
    @IsString()
    message: string;
    @ApiProperty({ example: {
        "appName": "appId123",
        "apiKey": "apikey123",
        "userAgent": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.110 Safari/537.36",
        "baseUrl": "www.appurl.com",
        "data": {
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
    data: AnalyticsInterface;
    @ApiProperty({ example: null })
    errors: any;
  }

  export class IAnalyticCreateResponse {
    @ApiProperty({ example: 201 })
    @IsNumber()
    status: number;
    @ApiProperty({ example: 'success' })
    @IsString()
    message: string;
    @ApiProperty({ example: {
        "appName": "appId123",
        "apiKey": "apikey123",
        "userAgent": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.110 Safari/537.36",
        "baseUrl": "www.appurl.com",
        "data": {
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
    data: AnalyticsInterface;
    @ApiProperty({ example: null })
    errors: any;
  }

  export class IAnalyticsVisitorsResponse {
    @ApiProperty({ example: 200 })
    @IsNumber()
    status: number;
    @ApiProperty({ example: 'success' })
    @IsString()
    message: string;
    @ApiProperty({ example: [{
        "appName": "appId123",
        "apiKey": "apikey123",
        "userAgent": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.110 Safari/537.36",
        "baseUrl": "www.appurl.com",
        "count": 1
    }]})
    data: AnalyticsVisitorsinterface[];
    @ApiProperty({ example: null })
    errors: any;
  }
  
  export class IAnalyticsVisitorResponse {
    @ApiProperty({ example: 200 })
    @IsNumber()
    status: number;
    @ApiProperty({ example: 'success' })
    @IsString()
    message: string;
    @ApiProperty({ example: {
        "appName": "appId123",
        "apiKey": "apikey123",
        "userAgent": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.110 Safari/537.36",
        "baseUrl": "www.appurl.com",
        "count": 1
    }})
    data: AnalyticsVisitorsinterface;
    @ApiProperty({ example: null })
    errors: any;
  }

  export class IAnalyticsVisitorCreateResponse {
    @ApiProperty({ example: 201 })
    @IsNumber()
    status: number;
    @ApiProperty({ example: 'success' })
    @IsString()
    message: string;
    @ApiProperty({ example: {
        "appName": "appId123",
        "apiKey": "apikey123",
        "userAgent": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.110 Safari/537.36",
        "baseUrl": "www.appurl.com",
        "count": 1
    }})
    data: AnalyticsVisitorsinterface;
    @ApiProperty({ example: null })
    errors: any;
  }
  