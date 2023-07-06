import { ApiProperty } from "@nestjs/swagger";

export class getIngredientNameDTO{
    @ApiProperty()
    name: string;
}