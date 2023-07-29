import { ApiProperty } from '@nestjs/swagger';
import { IExercise } from "../exercise.interface"

export class CreateExercicesDto {
  @ApiProperty({ example: [{
    "bodyPart": "back",
    "equipment": "weighted",
    "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/0G-Iu0A6XzG-o7",
    "id": "0841",
    "name": "weighted pull-up",
    "target": "lats"
}] })
  exercises: Array<IExercise>;
}
