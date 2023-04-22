import {
  IsInt,
  IsString,
  IsOptional,
  IsArray,
  IsDate,
  IsNumber,
  isDate,
} from 'class-validator';

export class CreateExercicesOnTrainingDTO {
  @IsNumber()
	exerciceId: number;
  
  @IsNumber()
	trainingId: number;
  
  @IsNumber()
  series: number;
	
  @IsNumber()
  repetition: number;

}
