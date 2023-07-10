import { IsInt, IsString, IsOptional, IsArray, IsDate, IsNumber } from "class-validator";


export class CreateExercicesDTO {
    @IsString()
    public name: string;

    @IsString()
    public type:  string;

    @IsString()
    public equipment: string;

    @IsString()
    public difficulty: string;

    @IsString()
    public instructions: string;

    @IsNumber()
    public TypeExercicesId: number;
}