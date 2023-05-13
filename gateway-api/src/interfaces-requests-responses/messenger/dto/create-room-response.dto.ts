import { ApiProperty } from '@nestjs/swagger';
import { IRoom } from '../room.interface';

export class CreateRoomResponseDto {
  @ApiProperty({ example: 'room_create_success' })
  message: string;
  @ApiProperty({
    example: {
      room: {
        id: '5d987c3bfb881ec86b476bcc',
        members: ['5d987c3bfb881ec86b476bcc', '5d987c3bfb881ec86b476bcc']
      },
    },
    nullable: true,
  })
  data: {
    user: IRoom;
  };
  @ApiProperty({ example: null, nullable: true })
  errors: { [key: string]: any };
}
