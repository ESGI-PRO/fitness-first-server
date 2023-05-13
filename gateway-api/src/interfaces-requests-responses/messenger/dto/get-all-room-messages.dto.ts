import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GetAllRoomMessagesDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  id: string;
}
