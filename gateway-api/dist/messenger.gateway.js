"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessengerGateWay = void 0;
const websockets_1 = require("@nestjs/websockets");
const create_message_dto_1 = require("./interfaces-requests-responses/messenger/dto/create-message.dto");
const socket_io_1 = require("socket.io");
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const swagger_1 = require("@nestjs/swagger");
const rxjs_1 = require("rxjs");
const create_room_dto_1 = require("./interfaces-requests-responses/messenger/dto/create-room.dto");
const get_all_room_messages_dto_1 = require("./interfaces-requests-responses/messenger/dto/get-all-room-messages.dto");
const get_all_rooms_dto_1 = require("./interfaces-requests-responses/messenger/dto/get-all-rooms.dto");
let MessengerGateWay = class MessengerGateWay {
    constructor(messengerServiceClient) {
        this.messengerServiceClient = messengerServiceClient;
        this.logger = new common_1.Logger('MessengerGateWay');
    }
    async handleSendMessage(client, payload) {
        await (0, rxjs_1.firstValueFrom)(this.messengerServiceClient.send("create_message", payload));
        this.server.emit('response_message', payload);
    }
    async handleGetRoomMessages(client, payload) {
        const response = await (0, rxjs_1.firstValueFrom)(this.messengerServiceClient.send("get-room-messages", payload));
        this.server.emit('response-get-room-messages', response);
    }
    async handleCreateRoom(client, payload) {
        await (0, rxjs_1.firstValueFrom)(this.messengerServiceClient.send("create_room", payload));
        this.server.emit('response_room', payload);
    }
    async handleGetAllRooms(client, payload) {
        const response = await (0, rxjs_1.firstValueFrom)(this.messengerServiceClient.send("get-all-rooms", payload));
        this.server.emit('response-get-all-rooms', response);
    }
    afterInit(server) {
        this.logger.log(server);
    }
    handleDisconnect(client) {
        this.logger.log(`Client disconnected: ${client.id}`);
    }
    async handleConnection(client, ...args) {
        this.logger.log(`Client connected: ${client.id}`);
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], MessengerGateWay.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('create_message'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket,
        create_message_dto_1.CreateMessageDto]),
    __metadata("design:returntype", Promise)
], MessengerGateWay.prototype, "handleSendMessage", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('get-room-messages'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket,
        get_all_room_messages_dto_1.GetAllRoomMessagesDto]),
    __metadata("design:returntype", Promise)
], MessengerGateWay.prototype, "handleGetRoomMessages", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('create_room'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket,
        create_room_dto_1.CreateRoomDto]),
    __metadata("design:returntype", Promise)
], MessengerGateWay.prototype, "handleCreateRoom", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('get-all-rooms'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket,
        get_all_rooms_dto_1.GetAllRoomsDto]),
    __metadata("design:returntype", Promise)
], MessengerGateWay.prototype, "handleGetAllRooms", null);
MessengerGateWay = __decorate([
    (0, websockets_1.WebSocketGateway)({
        cors: {
            origin: '*',
        },
    }),
    (0, swagger_1.ApiTags)('messenger'),
    __param(0, (0, common_1.Inject)('MESSENGER_SERVICE')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], MessengerGateWay);
exports.MessengerGateWay = MessengerGateWay;
//# sourceMappingURL=messenger.gateway.js.map