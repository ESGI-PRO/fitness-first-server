import { IsInt, IsString, IsOptional, IsArray, IsDate } from "class-validator";

export class TrainingRequest {
    @IsString()
    public name: string;
    
    @IsString()
    public description: string;

    @IsInt()
    public category: number;

    @IsArray()
    public listExercices: Array<String>;

    @IsDate()
    public durationStart: Date;

    @IsDate()
    public durationEnd: Date;

    @IsString()
    public image: string;

    @IsString()
    public userId: string;

    @IsOptional()
    public trainingOnExercices: Array<String>
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
