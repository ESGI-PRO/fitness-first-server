import { ApiProperty } from '@nestjs/swagger';

export class CreateTrainingDTO {
  @ApiProperty({ example: 'Citron' })
  name: string;
  @ApiProperty({ example: 'Citron' })
  description: string;
  @ApiProperty({ example: 'Citron' })
  category: number;
  @ApiProperty({ example: 'ERJHGFGH-FGHJK' })
  userId: string;
  @ApiProperty({ example: 'Citron' })
  image: string;
  @ApiProperty({ example: [] })
  listExercices: [];
  @ApiProperty({ example: '23/06/2023' })
  durationStart: Date;
  @ApiProperty({ example: '23/09/2023' })
  durationEnd: Date;
  @ApiProperty({ example: '23/06/2023' })
  createdAt: Date;
  @ApiProperty({ example: '23/06/2023' })
  updatedAt: Date;
  @ApiProperty({
    example: {
      create: [
        {
          exerciceId: 67,
          series: 5,
          repetition: 10,
        },
      ],
    },
  })
  trainingOnExercices: object;
}
