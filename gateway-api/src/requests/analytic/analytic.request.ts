import { ApiProperty } from "@nestjs/swagger";
import { Interface } from "readline";

export interface AnalyticInterface {
    id: string;
    appId: string;
    evenType: string;
    data: object;
}

export interface UpdateAnalyticRequest {
    appId: string;
    evenType: string;
    data: object;
}

export class CreateAnalyticDto {
    @ApiProperty({ example: 'appId123'})
    appId: string;

    @ApiProperty({ example: 'click button'})
    evenType: string;

    @ApiProperty({ example: {
        "buttonName": "button1",
        "buttonId": "button1",
        "buttonType": "button",
        "buttonColor": "red",
    }})
    data: object;
}

export class GetAnalyticDto {
    @ApiProperty({ example: 'appId123'})
    appId: string;

    @ApiProperty({ example: 'click button'})
    evenType: string;

    @ApiProperty({ example: {
        "buttonName": "button1",
        "buttonId": "button1",
        "buttonType": "button",
        "buttonColor": "red",
    }})
    data: object;
}


export class GetAllAnalyticsDto {
    
    @ApiProperty({ example: {
        appId: "appId",
        evenType: "click button",
        data: {
            "buttonName": "button1",
            "buttonId": "button1",
            "buttonType": "button",
        }
    }})
    allAnalytics: any;    
}