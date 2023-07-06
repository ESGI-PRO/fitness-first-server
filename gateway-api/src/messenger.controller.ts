import {
  Controller,
  Post,
  Put,
  Get,
  Body,
  Inject,
  Param,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { CreateMessageDto } from './interfaces-requests-responses/messenger/dto/create-message.dto';
import { firstValueFrom } from 'rxjs';
import { CreateRoomDto } from './interfaces-requests-responses/messenger/dto/create-room.dto'
import { CreateMessageResponseDto } from './interfaces-requests-responses/messenger/dto/create-message-response.dto'
import { CreateRoomResponseDto } from './interfaces-requests-responses/messenger/dto/create-room-response.dto'
import { GetAllRoomMessagesResponseDto } from './interfaces-requests-responses/messenger/dto/get-all-room-messages-response.dto'
import { GetAllRoomsResponseDto } from './interfaces-requests-responses/messenger/dto/get-all-rooms-response.dto';
import { CreateMeetingDto, UpdateMeetingDto } from './interfaces-requests-responses/messenger/dto/video-meeting.request';
import { CreateMeetingResponseDto, UpdateMeetingResponseDto, GetTwilioTokenResponseDto, GetAllMeetingResponseDto  } from './interfaces-requests-responses/messenger/dto/video-meeting.response';


@Controller('messenger')
@ApiTags('messenger')
export class MessengerController {
  constructor(
    @Inject('MESSENGER_SERVICE') private readonly messengerServiceClient: ClientProxy,
  ) {
  }

  @Post('/create_message')
  @ApiCreatedResponse({
    type: CreateMessageResponseDto,
  })
  async send(@Body() message: CreateMessageDto): Promise<CreateMessageResponseDto> {
    const response = await firstValueFrom(this.messengerServiceClient.send("create_message", message));
    return response;
  }

  @Post('/create_room')
  @ApiCreatedResponse({
    type: CreateRoomResponseDto,
  })
  async createRoom(@Body() room: CreateRoomDto): Promise<CreateRoomResponseDto> {
    const response = await firstValueFrom(this.messengerServiceClient.send("create_room", room));
    return response;
  }

  @Get('/get-room-messages/:roomId')
  @ApiOkResponse({
    type: GetAllRoomMessagesResponseDto,
  })
  async getRoomMessages(@Param('roomId') roomId: string): Promise<GetAllRoomMessagesResponseDto> {
    const response = await firstValueFrom(this.messengerServiceClient.send("get-room-messages", { roomId }));
    return response;
  }

  @Get('/get-all-rooms/:userId')
  @ApiOkResponse({
    type: GetAllRoomsResponseDto,
  })
  async getAllRooms(@Param('userId') userId: string): Promise<GetAllRoomsResponseDto> {
    const response = await firstValueFrom(this.messengerServiceClient.send("get-all-rooms", { userId }));
    return response;
  }

  // create a meeting
  @Post('/create_meeting')
  @ApiCreatedResponse({
    type: CreateMeetingResponseDto,
  })
  async createMeeting(@Body() meeting: CreateMeetingDto): Promise<CreateMeetingResponseDto> {
    const response = await firstValueFrom(this.messengerServiceClient.send("create_video_meeting", meeting));
    return response;
  }
  // update a meeting
  @Put('/update_meeting')
  @ApiCreatedResponse({
    type: UpdateMeetingResponseDto,
  })
  async updateMeeting(@Body() meeting: UpdateMeetingDto): Promise<UpdateMeetingResponseDto> {
    const response = await firstValueFrom(this.messengerServiceClient.send("update_video_meeting", meeting));
    return response;
  }
  // get all meeting of a user
  @Get('/get-all-meetings/:userId')
  @ApiOkResponse({
    type: GetAllRoomsResponseDto,
  })
  async getAllMeetings(@Param('userId') userId: string): Promise< GetAllMeetingResponseDto> {
    const response = await firstValueFrom(this.messengerServiceClient.send("find_all_video_meeting", userId));
    return response;
  }

  // get twilio token for user
  @Get('/get-twilio-token/:userId')
  @ApiOkResponse({
    type: GetTwilioTokenResponseDto,
  })
  async getTwilioToken(@Param('userId') userId: string): Promise<GetTwilioTokenResponseDto> {
    const response = await firstValueFrom(this.messengerServiceClient.send("get_twilio_token", userId));
    return response;
  }

}
