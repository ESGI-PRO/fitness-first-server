import { OnGatewayConnection, OnGatewayInit, OnGatewayDisconnect } from '@nestjs/websockets';
import { CreateMessageDto } from './interfaces-requests-responses/messenger/dto/create-message.dto';
import { Server, Socket } from 'socket.io';
import { ClientProxy } from '@nestjs/microservices';
import { CreateRoomDto } from './interfaces-requests-responses/messenger/dto/create-room.dto';
import { GetAllRoomMessagesDto } from './interfaces-requests-responses/messenger/dto/get-all-room-messages.dto';
import { GetAllRoomsDto } from './interfaces-requests-responses/messenger/dto/get-all-rooms.dto';
export declare class MessengerGateWay implements OnGatewayConnection, OnGatewayInit, OnGatewayDisconnect {
    private readonly messengerServiceClient;
    constructor(messengerServiceClient: ClientProxy);
    server: Server;
    private logger;
    handleSendMessage(client: Socket, payload: CreateMessageDto): Promise<void>;
    handleGetRoomMessages(client: Socket, payload: GetAllRoomMessagesDto): Promise<void>;
    handleCreateRoom(client: Socket, payload: CreateRoomDto): Promise<void>;
    handleGetAllRooms(client: Socket, payload: GetAllRoomsDto): Promise<void>;
    afterInit(server: Server): void;
    handleDisconnect(client: Socket): void;
    handleConnection(client: Socket, ...args: any[]): Promise<void>;
}
