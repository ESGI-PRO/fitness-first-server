import { ApiProperty } from "@nestjs/swagger";

export class GetUserCurrentExercisesDto {
    @ApiProperty()
    user_id: string;
    @ApiProperty()
    trainer_id: string;
}