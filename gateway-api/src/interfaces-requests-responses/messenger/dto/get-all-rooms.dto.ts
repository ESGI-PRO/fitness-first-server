import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GetAllRoomsDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  id: string;
}
