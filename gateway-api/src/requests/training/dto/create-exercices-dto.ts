import { ApiProperty } from '@nestjs/swagger';

export class CreateExercicesDTO {
  @ApiProperty({ example: 'Push up ' })
  name: string;
  @ApiProperty({ example: 56 })
  type: number;
  @ApiProperty({ example: 'body_only' })
  equipment: string;
  @ApiProperty({ example: 'Intermediate' })
  difficulty: string;
  @ApiProperty({ example: 'Push up ' })
  instructions: string;
  @ApiProperty({ example: 3 })
  TypeExercicesId: number;
}
