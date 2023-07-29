import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IExercise } from '../../interfaces-requests-responses/interfaces/exercise.interface';

export class CreateExerciseDto {
  @ApiProperty()
  @IsNotEmpty()
  exercises: Array<IExercise>;
}
