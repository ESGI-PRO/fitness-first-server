import { IsNotEmpty, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateRoomDto {
  @ApiProperty()
  @IsNotEmpty()
  sender_id: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsArray()
  members: Array<string>;
}
