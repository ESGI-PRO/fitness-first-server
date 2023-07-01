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
exports.TrainingController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const swagger_1 = require("@nestjs/swagger");
const create_message_dto_1 = require("./interfaces-requests-responses/messenger/dto/create-message.dto");
const rxjs_1 = require("rxjs");
const create_room_dto_1 = require("./interfaces-requests-responses/messenger/dto/create-room.dto");
let TrainingController = class TrainingController {
    constructor(messengerServiceClient) {
        this.messengerServiceClient = messengerServiceClient;
    }
    async send(message) {
        const response = await (0, rxjs_1.firstValueFrom)(this.messengerServiceClient.send("create_message", message));
        return response;
    }
    async createRoom(room) {
        const response = await (0, rxjs_1.firstValueFrom)(this.messengerServiceClient.send("create_room", room));
        return response;
    }
    async getRoomMessages(roomId) {
        const response = await (0, rxjs_1.firstValueFrom)(this.messengerServiceClient.send("get-room-messages", { roomId }));
        return response;
    }
    async getAllRooms(userId) {
        const response = await (0, rxjs_1.firstValueFrom)(this.messengerServiceClient.send("get-all-rooms", { userId }));
        return response;
    }
};
__decorate([
    (0, common_1.Post)('/create_message'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_message_dto_1.CreateMessageDto]),
    __metadata("design:returntype", Promise)
], TrainingController.prototype, "send", null);
__decorate([
    (0, common_1.Post)('/create_room'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_room_dto_1.CreateRoomDto]),
    __metadata("design:returntype", Promise)
], TrainingController.prototype, "createRoom", null);
__decorate([
    (0, common_1.Get)('/get-room-messages/:roomId'),
    __param(0, (0, common_1.Param)('roomId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TrainingController.prototype, "getRoomMessages", null);
__decorate([
    (0, common_1.Get)('/get-all-rooms/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TrainingController.prototype, "getAllRooms", null);
TrainingController = __decorate([
    (0, common_1.Controller)('messenger'),
    (0, swagger_1.ApiTags)('messenger'),
    __param(0, (0, common_1.Inject)('MESSENGER_SERVICE')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], TrainingController);
exports.TrainingController = TrainingController;
//# sourceMappingURL=messenger.controller.js.map