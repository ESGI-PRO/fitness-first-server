import { ApiProperty } from "@nestjs/swagger";

export class getTrainingIdDTO{
    @ApiProperty()
    id: number;
}