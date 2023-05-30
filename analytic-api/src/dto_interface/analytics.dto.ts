import { IsString, IsOptional, IsJSON, IsObject, IsNumber } from "class-validator";

export class AnalytiqueEventDto {
  @IsString()
  readonly eventName: string;
  @IsString()
  readonly eventAction: string;
  @IsString()
  readonly eventCategory: string;
  @IsString()
  readonly eventPage: string;
  @IsString()
  readonly date: string;
  @IsOptional()
  @IsJSON()
  readonly events?: JSON;
} 

export class CreateAnalyticsDto {
  @IsString()
  readonly appName: string;
  @IsString()
  readonly apiKey: string;
  @IsString()
  readonly userAgent: string;
  @IsString()
  readonly baseUrl: string;
  @IsObject()
  readonly data: AnalytiqueEventDto;
}

export class CreateAnalyticsVisitorsDto {
  @IsString()
  readonly appName: string;
  @IsString()
  readonly apiKey: string;
  @IsString()
  readonly baseUrl: string;
  @IsString()
  readonly userAgent: string;
  @IsNumber()
  readonly count: number;
}



//Get analytics
export class GetAnalyticEventDto {
  @IsString()
  readonly eventName: string;
  @IsString()
  readonly eventAction: string;
  @IsString()
  readonly eventCategory: string;
  @IsString()
  readonly eventPage: string;
  @IsString()
  readonly date: string;
  @IsOptional()
  @IsJSON()
  readonly events?: JSON;
} 


export class GetAnalyticsDto {
  @IsString()
  readonly appName: string;
  @IsString()
  readonly apiKey: string;
  @IsString()
  readonly userAgent: string;
  @IsString()
  readonly baseUrl: string;
  @IsObject()
  readonly data: GetAnalyticEventDto;
}

export class FindAnalyticsDtoBy {
  @IsOptional()
  @IsString()
  readonly id: string;

  @IsOptional()
  @IsString()
  readonly appName: string;

  @IsOptional()
  @IsString()
  readonly apiKey: string;

  @IsOptional()
  @IsString()
  readonly userAgent: string;

  @IsOptional()
  @IsString()
  readonly baseUrl: string;

  @IsOptional()
  @IsObject()
  readonly data: GetAnalyticEventDto;
}


export class FindAnalyticsVisitorsDto {
  @IsOptional()
  @IsString()
  readonly id: string;

  @IsOptional()
  @IsString()
  readonly appName: string;

  @IsOptional()
  @IsString()
  readonly apiKey: string;

  @IsOptional()
  @IsString()
  readonly baseUrl: string;

  @IsOptional()
  @IsString()
  readonly userAgent: string;

  @IsOptional()
  @IsNumber()
  readonly count: number;
}