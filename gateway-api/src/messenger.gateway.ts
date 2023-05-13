import {
    SubscribeMessage,
    OnGatewayConnection,
    MessageBody,
    WebSocketGateway,
    WebSocketServer,
    OnGatewayInit,
    OnGatewayDisconnect,
    ConnectedSocket,
  } from '@nestjs/websockets';
  import { CreateMessageDto } from './interfaces-requests-responses/messenger/dto/create-message.dto';
  import { Server, Socket } from 'socket.io';
  import { Logger, Inject } from '@nestjs/common';
  import { ClientProxy } from '@nestjs/microservices';
  import { ApiTags } from '@nestjs/swagger';
  import { firstValueFrom } from 'rxjs';
  import { CreateRoomDto } from './interfaces-requests-responses/messenger/dto/create-room.dto'
  import { GetAllRoomMessagesDto } from './interfaces-requests-responses/messenger/dto/get-all-room-messages.dto'
  import { GetAllRoomsDto } from './interfaces-requests-responses/messenger/dto/get-all-rooms.dto'

  @WebSocketGateway({
    cors: {
      origin: '*',
    },
  })
  @ApiTags('messenger')
  export class MessengerGateWay
    implements OnGatewayConnection, OnGatewayInit, OnGatewayDisconnect
  {
    constructor(@Inject('MESSENGER_SERVICE') private readonly messengerServiceClient: ClientProxy) {}

    @WebSocketServer()
    server: Server;

    private logger: Logger = new Logger('MessengerGateWay');

    @SubscribeMessage('create_message')
    async handleSendMessage(
      @ConnectedSocket() client: Socket,
      @MessageBody() payload: CreateMessageDto,
    ): Promise<void> {
      await firstValueFrom(this.messengerServiceClient.send("create_message", payload));
      this.server.emit('response_message', payload);
    }

    @SubscribeMessage('get-room-messages')
    async handleGetRoomMessages(
      @ConnectedSocket() client: Socket,
      @MessageBody() payload: GetAllRoomMessagesDto,
    ): Promise<void> {
      const response = await firstValueFrom(this.messengerServiceClient.send("get-room-messages", payload));
      this.server.emit('response-get-room-messages', response);
    }


    @SubscribeMessage('create_room')
    async handleCreateRoom(
      @ConnectedSocket() client: Socket,
      @MessageBody() payload: CreateRoomDto,
    ): Promise<void> {
      await firstValueFrom(this.messengerServiceClient.send("create_room", payload));
      this.server.emit('response_room', payload);
    }

    @SubscribeMessage('get-all-rooms')
    async handleGetAllRooms(
      @ConnectedSocket() client: Socket,
      @MessageBody() payload: GetAllRoomsDto,
    ): Promise<void> {
      const response = await firstValueFrom(this.messengerServiceClient.send("get-all-rooms", payload.id));
      this.server.emit('response-get-all-rooms', response);
    }

    afterInit(server: Server) {
      this.logger.log(server);
      //Do stuffs
    }

    handleDisconnect(client: Socket) {
      this.logger.log(`Client disconnected: ${client.id}`);
      //Do stuffs
    }

    async handleConnection(client: Socket, ...args: any[]) {
      this.logger.log(`Client connected: ${client.id}`);
      //Do stuffs
    }
  }
