import { ApiProperty } from "@nestjs/swagger";

export class getIngredientUserIdDTO{
    @ApiProperty()
    userId: number;
}