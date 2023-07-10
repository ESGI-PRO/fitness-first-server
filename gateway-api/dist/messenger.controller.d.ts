import { ClientProxy } from '@nestjs/microservices';
import { CreateMessageDto } from './interfaces-requests-responses/messenger/dto/create-message.dto';
import { CreateRoomDto } from './interfaces-requests-responses/messenger/dto/create-room.dto';
import { CreateMessageResponseDto } from './interfaces-requests-responses/messenger/dto/create-message-response.dto';
import { CreateRoomResponseDto } from './interfaces-requests-responses/messenger/dto/create-room-response.dto';
import { GetAllRoomMessagesResponseDto } from './interfaces-requests-responses/messenger/dto/get-all-room-messages-response.dto';
import { GetAllRoomsResponseDto } from './interfaces-requests-responses/messenger/dto/get-all-rooms-response.dto';
import { CreateMeetingDto, UpdateMeetingDto } from './interfaces-requests-responses/messenger/dto/video-meeting.request';
import { CreateMeetingResponseDto, UpdateMeetingResponseDto, GetTwilioTokenResponseDto, GetAllMeetingResponseDto } from './interfaces-requests-responses/messenger/dto/video-meeting.response';
export declare class MessengerController {
    private readonly messengerServiceClient;
    constructor(messengerServiceClient: ClientProxy);
    send(message: CreateMessageDto): Promise<CreateMessageResponseDto>;
    createRoom(room: CreateRoomDto): Promise<CreateRoomResponseDto>;
    getRoomMessages(roomId: string): Promise<GetAllRoomMessagesResponseDto>;
    getAllRooms(userId: string): Promise<GetAllRoomsResponseDto>;
    createMeeting(meeting: CreateMeetingDto): Promise<CreateMeetingResponseDto>;
    updateMeeting(meeting: UpdateMeetingDto): Promise<UpdateMeetingResponseDto>;
    getAllMeetings(userId: string): Promise<GetAllMeetingResponseDto>;
    getTwilioToken(userId: string): Promise<GetTwilioTokenResponseDto>;
    getRoomsByIds(data: {
        ids: string[];
    }): Promise<any>;
}
