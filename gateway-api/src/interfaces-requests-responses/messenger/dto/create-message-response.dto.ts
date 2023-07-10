import { ApiProperty } from '@nestjs/swagger';
import { IMessage } from '../message.interface';

export class CreateMessageResponseDto {
  @ApiProperty({ example: 'message_create_success' })
  message: string;
  @ApiProperty({
    example: {
      message: {
        room_id: '5d987c3bfb881ec86b476bcc',
        sender_id: '5d987c3bfb881ec86b476bcc',
        message: 'here is my message'
      },
    },
    nullable: true,
  })
  data: {
    message: IMessage;
  };
  @ApiProperty({ example: null, nullable: true })
  errors: { [key: string]: any };
}
