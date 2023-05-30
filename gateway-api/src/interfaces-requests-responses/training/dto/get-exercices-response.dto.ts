import { ApiProperty } from '@nestjs/swagger';

export class GetExercicesResponseDto {
  @ApiProperty({ example: 'exercices_get_exercices_success' })
  message: string;
  @ApiProperty({
    example: {
      exercices: 'exercices string test',
    },
    nullable: true,
  })
  data: {
    exercices: string;
  };
  @ApiProperty({ example: null, nullable: true })
  errors: { [key: string]: any };
}
