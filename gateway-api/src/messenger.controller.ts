import {
  Controller,
  Post,
  Put,
  Get,
  Body,
  Req,
  Inject,
  HttpStatus,
  HttpException,
  Param,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';
import { CreateMessageDto } from './interfaces-requests-responses/messenger/dto/create-message.dto';
import { firstValueFrom } from 'rxjs';
import { CreateRoomDto } from './interfaces-requests-responses/messenger/dto/create-room.dto'
import { CreateMessageResponseDto } from './interfaces-requests-responses/messenger/dto/create-message-response.dto'
import { CreateRoomResponseDto } from './interfaces-requests-responses/messenger/dto/create-room-response.dto'
import { GetAllRoomMessagesResponseDto } from './interfaces-requests-responses/messenger/dto/get-all-room-messages-response.dto'
import { GetAllRoomsResponseDto } from './interfaces-requests-responses/messenger/dto/get-all-rooms-response.dto'



@Controller('messenger')
@ApiTags('messenger')
export class TrainingController {
  constructor(
    @Inject('MESSENGER_SERVICE') private readonly messengerServiceClient: ClientProxy,
  ) {
  }

  @Post('/create_message')
  async send(@Body() message: CreateMessageDto): Promise<CreateMessageResponseDto> {
    const response = await firstValueFrom(this.messengerServiceClient.send("create_message", message));
    return response;
  }

  @Post('/create_room')
  async createRoom(@Body() room: CreateRoomDto): Promise<CreateRoomResponseDto> {
    const response = await firstValueFrom(this.messengerServiceClient.send("create_room", room));
    return response;
  }

  @Get('/get-room-messages/:roomId')
  async getRoomMessages(@Param('roomId') roomId: string): Promise<GetAllRoomMessagesResponseDto> {
    const response = await firstValueFrom(this.messengerServiceClient.send("get-room-messages", { roomId }));
    return response;
  }

  @Get('/get-all-rooms/:userId')
  async getAllRooms(@Param('userId') userId: string): Promise<GetAllRoomsResponseDto> {
    const response = await firstValueFrom(this.messengerServiceClient.send("get-all-rooms", { userId }));
    return response;
  }

}
