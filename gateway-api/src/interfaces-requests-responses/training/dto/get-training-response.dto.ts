import { ApiProperty } from '@nestjs/swagger';

export class GetTrainingResponseDto {
  @ApiProperty({ example: 'training_get_training_success' })
  message: string;
  @ApiProperty({
    example: {
      training: 'training string test',
    },
    nullable: true,
  })
  data: {
    training: string;
  };
  @ApiProperty({ example: null, nullable: true })
  errors: { [key: string]: any };
}
