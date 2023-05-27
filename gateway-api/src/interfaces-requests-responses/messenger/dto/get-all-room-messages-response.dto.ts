import { ApiProperty } from '@nestjs/swagger';
import { IMessage } from '../message.interface';

export class GetAllRoomMessagesResponseDto {
  @ApiProperty({ example: 'room_create_success' })
  message: string;
  @ApiProperty({
    example: {
      messages: [
        {
          room_id: '5d987c3bfb881ec86b476bcg',
          sender_id: '4d987c3bfb881ec86b476bck',
          message: 'here is my message 1'
        },
        {
          room_id: '2d987c3bfb881ec86b476bcc',
          sender_id: '7d987c3bfb881ec86b476bcc',
          message: 'here is my message 2'
        },
      ],
    },
    nullable: true,
  })
  data: {
    messages: IMessage[];
  };
  @ApiProperty({ example: null, nullable: true })
  errors: { [key: string]: any };
}
