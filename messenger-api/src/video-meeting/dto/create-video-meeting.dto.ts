import { IsNotEmpty, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class CreateVideoMeetingDto {
    @ApiProperty()
    @IsNotEmpty()
    sender_id: string;
    @ApiProperty()
    @IsNotEmpty()
    @IsArray()
    members: Array<string>;
    @ApiProperty()
    @IsNotEmpty()
    date: string;
    @ApiProperty()
    @IsNotEmpty()
    time: string;
}

