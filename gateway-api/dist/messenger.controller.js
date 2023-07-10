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
exports.MessengerController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const swagger_1 = require("@nestjs/swagger");
const create_message_dto_1 = require("./interfaces-requests-responses/messenger/dto/create-message.dto");
const rxjs_1 = require("rxjs");
const create_room_dto_1 = require("./interfaces-requests-responses/messenger/dto/create-room.dto");
const create_message_response_dto_1 = require("./interfaces-requests-responses/messenger/dto/create-message-response.dto");
const create_room_response_dto_1 = require("./interfaces-requests-responses/messenger/dto/create-room-response.dto");
const get_all_room_messages_response_dto_1 = require("./interfaces-requests-responses/messenger/dto/get-all-room-messages-response.dto");
const get_all_rooms_response_dto_1 = require("./interfaces-requests-responses/messenger/dto/get-all-rooms-response.dto");
const video_meeting_request_1 = require("./interfaces-requests-responses/messenger/dto/video-meeting.request");
const video_meeting_response_1 = require("./interfaces-requests-responses/messenger/dto/video-meeting.response");
const authorization_decorator_1 = require("./decorators/authorization.decorator");
const permission_decorator_1 = require("./decorators/permission.decorator");
let MessengerController = class MessengerController {
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
    async createMeeting(meeting) {
        const response = await (0, rxjs_1.firstValueFrom)(this.messengerServiceClient.send("create_video_meeting", meeting));
        return response;
    }
    async updateMeeting(meeting) {
        const response = await (0, rxjs_1.firstValueFrom)(this.messengerServiceClient.send("update_video_meeting", meeting));
        return response;
    }
    async getAllMeetings(userId) {
        const response = await (0, rxjs_1.firstValueFrom)(this.messengerServiceClient.send("find_all_video_meeting", userId));
        return response;
    }
    async getTwilioToken(userId) {
        const response = await (0, rxjs_1.firstValueFrom)(this.messengerServiceClient.send("get_twilio_token", userId));
        return response;
    }
    async getRoomsByIds(data) {
        const response = await (0, rxjs_1.firstValueFrom)(this.messengerServiceClient.send("get_rooms_by_member_ids", data));
        return response;
    }
};
__decorate([
    (0, common_1.Post)('/create_message'),
    (0, authorization_decorator_1.Authorization)(true),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, permission_decorator_1.Permission)('create_message'),
    (0, swagger_1.ApiCreatedResponse)({
        type: create_message_response_dto_1.CreateMessageResponseDto,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_message_dto_1.CreateMessageDto]),
    __metadata("design:returntype", Promise)
], MessengerController.prototype, "send", null);
__decorate([
    (0, common_1.Post)('/create_room'),
    (0, authorization_decorator_1.Authorization)(true),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, permission_decorator_1.Permission)('create_room'),
    (0, swagger_1.ApiCreatedResponse)({
        type: create_room_response_dto_1.CreateRoomResponseDto,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_room_dto_1.CreateRoomDto]),
    __metadata("design:returntype", Promise)
], MessengerController.prototype, "createRoom", null);
__decorate([
    (0, common_1.Get)('/get-room-messages/:roomId'),
    (0, authorization_decorator_1.Authorization)(true),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, permission_decorator_1.Permission)('get_room_messages'),
    (0, swagger_1.ApiOkResponse)({
        type: get_all_room_messages_response_dto_1.GetAllRoomMessagesResponseDto,
    }),
    __param(0, (0, common_1.Param)('roomId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MessengerController.prototype, "getRoomMessages", null);
__decorate([
    (0, common_1.Get)('/get-all-rooms/:userId'),
    (0, authorization_decorator_1.Authorization)(true),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, permission_decorator_1.Permission)('get_all_rooms'),
    (0, swagger_1.ApiOkResponse)({
        type: get_all_rooms_response_dto_1.GetAllRoomsResponseDto,
    }),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MessengerController.prototype, "getAllRooms", null);
__decorate([
    (0, common_1.Post)('/create_meeting'),
    (0, authorization_decorator_1.Authorization)(true),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, permission_decorator_1.Permission)('create_video_meeting'),
    (0, swagger_1.ApiCreatedResponse)({
        type: video_meeting_response_1.CreateMeetingResponseDto,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [video_meeting_request_1.CreateMeetingDto]),
    __metadata("design:returntype", Promise)
], MessengerController.prototype, "createMeeting", null);
__decorate([
    (0, common_1.Put)('/update_meeting'),
    (0, authorization_decorator_1.Authorization)(true),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, permission_decorator_1.Permission)('update_video_meeting'),
    (0, swagger_1.ApiCreatedResponse)({
        type: video_meeting_response_1.UpdateMeetingResponseDto,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [video_meeting_request_1.UpdateMeetingDto]),
    __metadata("design:returntype", Promise)
], MessengerController.prototype, "updateMeeting", null);
__decorate([
    (0, common_1.Get)('/get-all-meetings/:userId'),
    (0, authorization_decorator_1.Authorization)(true),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, permission_decorator_1.Permission)('find_all_video_meeting'),
    (0, swagger_1.ApiOkResponse)({
        type: get_all_rooms_response_dto_1.GetAllRoomsResponseDto,
    }),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MessengerController.prototype, "getAllMeetings", null);
__decorate([
    (0, common_1.Get)('/get-twilio-token/:userId'),
    (0, authorization_decorator_1.Authorization)(true),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, permission_decorator_1.Permission)('get_twilio_token'),
    (0, swagger_1.ApiOkResponse)({
        type: video_meeting_response_1.GetTwilioTokenResponseDto,
    }),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MessengerController.prototype, "getTwilioToken", null);
__decorate([
    (0, common_1.Post)('/get_rooms_by_member_ids'),
    (0, authorization_decorator_1.Authorization)(true),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, permission_decorator_1.Permission)('get_rooms_by_member_ids'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MessengerController.prototype, "getRoomsByIds", null);
MessengerController = __decorate([
    (0, common_1.Controller)('messenger'),
    (0, authorization_decorator_1.Authorization)(true),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, swagger_1.ApiTags)('messenger'),
    __param(0, (0, common_1.Inject)('MESSENGER_SERVICE')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], MessengerController);
exports.MessengerController = MessengerController;
//# sourceMappingURL=messenger.controller.js.map