import { IsInt, IsString, IsOptional } from "class-validator";

export class TrainingRequest {
    @IsString()
    public name: string;
    
    @IsString()
    public description: string;

    @IsInt()
    public repetition: number;

    @IsString()
    public category: string;

    @IsString()
    public outils: string;

    @IsString()
    public image: string;

    @IsInt()
    public temps: number;

    @IsInt()
    public userId: number;
}

export class UpdateTrainingRequest {
    
    @IsOptional()
    @IsString()
    public name: string;
    
    @IsOptional()
    @IsString()
    public description: string;

    @IsOptional()
    @IsInt()
    public repetition: number;

    @IsOptional()
    @IsString()
    public category: string;

    @IsOptional()
    @IsString()
    public outils: string;

    @IsOptional()
    @IsString()
    public image: string;

    @IsOptional()
    @IsInt()
    public temps: number;

    @IsOptional()
    @IsInt()
    public userId: number;
}
