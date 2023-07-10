import { ApiProperty } from '@nestjs/swagger';

export class CreateIngredientDTO {
  @ApiProperty({ example: "Citron" })
  name: string;
  @ApiProperty({ example: 10 })
  calories: number;
  @ApiProperty({ example: 10 })
  CategorieId: number;
  @ApiProperty({ example: 10 })
  grammes: number;
  @ApiProperty({ example: 10 })
  fat_total_g: number;
  @ApiProperty({ example: 10 })
  fat_saturated_g: number;
  @ApiProperty({ example: 10 })
  protein_g: number;
  @ApiProperty({ example: 10 })
  sodium_mg: number;
  @ApiProperty({ example: 10 })
  potassium_mg: number;
  @ApiProperty({ example: 10 })
  cholesterol_mg: number;
  @ApiProperty({ example: 10 })
  carbohydrates_total_g: number;
  @ApiProperty({ example: 10 })
  fiber_g: number;
  @ApiProperty({ example: 10 })
  sugar_g: number;
}
