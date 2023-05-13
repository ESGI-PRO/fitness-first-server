import { IsString, IsOptional, IsJSON } from "class-validator";
import { Prisma } from "@prisma/client";

export class AnalyticRequest {
    @IsString()
    public appId: string;
    
    @IsString()
    public evenType: string;

    @IsJSON()
    public data: JSON;
}

export class UpdateAnalyticRequest {
    @IsOptional()
    @IsString()
    public appId: string;
    
    @IsOptional()
    @IsString()
    public evenType: string;

    @IsOptional()
    @IsJSON()
    public data: JSON;
}


export class CreateAnalyticDto {
    @IsString()
    public appId: string;
    
    @IsString()
    public evenType: string;

    @IsJSON()
    public data: Prisma.JsonValue;

}