import { ApiProperty } from '@nestjs/swagger';
import { IRoom } from '../room.interface';

export class GetAllRoomsResponseDto {
  @ApiProperty({ example: 'room_create_success' })
  message: string;
  @ApiProperty({
    example: {
      rooms: [
        {
          id: '5d987c3bfb881ec86b476b89',
          sender_id: '5d987c3bfb881ec86b476bcc',
          members: ['5d987c3bfb881ec86b476bcc', '5d987c3bfb881ec86b476b09']
        }
      ]
    },
    nullable: true,
  })
  data: {
    user: IRoom[];
  };
  @ApiProperty({ example: null, nullable: true })
  errors: { [key: string]: any };
}
