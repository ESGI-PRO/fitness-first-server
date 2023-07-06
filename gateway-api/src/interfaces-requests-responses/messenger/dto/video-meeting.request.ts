import { IsNotEmpty, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

 class CreateMeetingDto {
  @ApiProperty({ example: '649d48c0342aeeff25bff543' })
  @IsNotEmpty()
  sender_id: string;
  @ApiProperty({ example: ['649d48c0342aeeff25bff543', '649d48c0342aeeff25jff540'] })
  @IsNotEmpty()
  @IsArray()
  members: Array<string>;
  @ApiProperty({ example: "08/07/2023" })
  @IsNotEmpty()
  date: string;
  @ApiProperty({ example: "08:12" })
  @IsNotEmpty()
  time: string;
  @ApiProperty({ example: "This is a description" })
  @IsNotEmpty()
  description: string;
}

class UpdateMeetingDto {
    @ApiProperty()
    @IsNotEmpty()
    id: string;
    @ApiProperty({ example: '649d48c0342aeeff25bff543' })
    @IsNotEmpty()
    sender_id: string;
    @ApiProperty({ example: ['649d48c0342aeeff25bff543', '649d48c0342aeeff25jff540'] })
    @IsNotEmpty()
    @IsArray()
    members: Array<string>;
    @ApiProperty({ example: "08/07/2023" })
    @IsNotEmpty()
    date: string;
    @ApiProperty({ example: "08:12" })
    @IsNotEmpty()
    time: string;
    @ApiProperty({ example: "This is a description" })
    @IsNotEmpty()
    description: string;
}

export {
  CreateMeetingDto,
  UpdateMeetingDto
}