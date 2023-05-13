import { ApiProperty } from "@nestjs/swagger";

export class getIngredientIdDTO{
    @ApiProperty()
    id: number;
}