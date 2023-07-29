import { ApiProperty } from '@nestjs/swagger';
import { IExercise } from "../exercise.interface"

export class CreateExercicesResponseDto {
  @ApiProperty({ example: 'exercises_create_success' })
  message: string;
  @ApiProperty({
    example: {
      exercices: 
        [
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
    exercices: Array<IExercise>;
  };
  @ApiProperty({ example: null, nullable: true })
  errors: { [key: string]: any };
}
