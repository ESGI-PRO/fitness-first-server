import { ClientProxy } from '@nestjs/microservices';
import { CreateMessageDto } from './interfaces-requests-responses/messenger/dto/create-message.dto';
import { CreateRoomDto } from './interfaces-requests-responses/messenger/dto/create-room.dto';
import { CreateMessageResponseDto } from './interfaces-requests-responses/messenger/dto/create-message-response.dto';
import { CreateRoomResponseDto } from './interfaces-requests-responses/messenger/dto/create-room-response.dto';
import { GetAllRoomMessagesResponseDto } from './interfaces-requests-responses/messenger/dto/get-all-room-messages-response.dto';
import { GetAllRoomsResponseDto } from './interfaces-requests-responses/messenger/dto/get-all-rooms-response.dto';
export declare class TrainingController {
    private readonly messengerServiceClient;
    constructor(messengerServiceClient: ClientProxy);
    send(message: CreateMessageDto): Promise<CreateMessageResponseDto>;
    createRoom(room: CreateRoomDto): Promise<CreateRoomResponseDto>;
    getRoomMessages(roomId: string): Promise<GetAllRoomMessagesResponseDto>;
    getAllRooms(userId: string): Promise<GetAllRoomsResponseDto>;
}
