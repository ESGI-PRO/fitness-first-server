import { Controller, HttpStatus } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { MessagePattern } from '@nestjs/microservices';
import { IMessagesGetResponse } from '../interfaces-requests-responses/responses/get-all-messages-response'
import { IMessageCreateResponse } from '../interfaces-requests-responses/responses/message-create-response'

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}


  @MessagePattern('create_message')
  async createMessage(createMessageDto: CreateMessageDto) {
    let result: IMessageCreateResponse;

    if (createMessageDto) {
      const message =  await this.messagesService.createMessage(createMessageDto);

      if (message) {
        result = {
          status: HttpStatus.CREATED,
          message: 'message_create_success',
          data: {
            message: message,
          },
          errors: null,
        };
      }
    } else {
      result = {
        status: HttpStatus.BAD_REQUEST,
        message: 'message_create_bad_request',
        data: {
          message: null,
        },
        errors: null,
      };
    }

    return result;
  }


  @MessagePattern('get_room_messages')
  async getAllMessagesByRoomId(data: {roomId: string}) {
    const { roomId } = data
    let result: IMessagesGetResponse;

    if (roomId) {
      const messages =  await this.messagesService.findAllMessages(roomId);
      if (messages) {
        result = {
          status: HttpStatus.OK,
          message: 'get_messages_success',
          data: {
            messages: messages,
          },
          errors: null,
        };
      } else {
        result = {
          status: HttpStatus.NOT_FOUND,
          message: 'messages_get_by_id_not_found',
          data: {
            messages: null,
          },
          errors: null,
        };
      }
    } else {
      result = {
        status: HttpStatus.BAD_REQUEST,
        message: 'messges_get_bad_request',
        data: {
          messages: null,
        },
        errors: null,
      };
    }

    return result
  }
}
