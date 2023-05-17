import {
  IsInt,
  IsString,
  IsOptional,
  IsArray,
  IsDate,
  IsNumber,
  isDate,
} from 'class-validator';

export class CreateExercicesDTO {
  @IsString()
  public name: string;

  @IsString()
  public description: string;

  @IsString()
  public category: number;

  @IsString()
  public userId: string;

  @IsString()
  public listExercices: string;

  @IsString()
  public image: string;

  @IsDate()
  public durationStart: string;

  @IsDate()
  public durationEnd: string;

  @IsDate()
  public createdAt: string;
  
  @IsDate()
  public updatedAt: string;

  @IsString()
  public type: string;
}
