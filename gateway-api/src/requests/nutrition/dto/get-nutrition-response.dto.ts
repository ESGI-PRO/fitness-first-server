import { ApiProperty } from '@nestjs/swagger';

export class GetNutritionResponseDto {
  @ApiProperty({ example: 'nutrition_get_nutrition_success' })
  message: string;
  @ApiProperty({
    example: {
      nutrition: 'nutrition string test',
    },
    nullable: true,
  })
  data: {
    nutrition: string;
  };
  @ApiProperty({ example: null, nullable: true })
  errors: { [key: string]: any };
}
