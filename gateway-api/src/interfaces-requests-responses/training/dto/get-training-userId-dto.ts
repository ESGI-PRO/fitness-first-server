import { ApiProperty } from "@nestjs/swagger";

export class getTrainingUserIdDTO{
    @ApiProperty()
    userId: string;
}