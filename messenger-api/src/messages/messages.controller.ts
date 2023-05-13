import { Controller } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { MessagePattern } from '@nestjs/microservices';


@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}


  @MessagePattern('create-message')
  async createMessage(createMessageDto: CreateMessageDto) {
    return await this.messagesService.createMessage(createMessageDto);
  }


  @MessagePattern('get-room-messages')
  async getAllMessagesByRoomId(id: string) {
    return await this.messagesService.findAllMessages(id);
  }
}
