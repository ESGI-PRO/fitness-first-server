import { ApiProperty } from '@nestjs/swagger';
import { IExercise } from "../exercise.interface"

export class GetUserCurrentExercisesResponseDto {
  @ApiProperty({ example: 200})
  status: number;
  @ApiProperty({ example: 'user_current_exercises_get_success' })
  message: string;
  @ApiProperty({
    example: {
      exercises: [
        {
          "bodyPart": "back",
          "equipment": "weighted",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/0G-Iu0A6XzG-o7",
          "id": "0841",
          "name": "weighted pull-up",
          "target": "lats"
      }
      ],
    },
    nullable: true,
  })
  data: {
    exercises: Array<IExercise>;
  };
  @ApiProperty({ example: null, nullable: true })
  errors: { [key: string]: any };
}
