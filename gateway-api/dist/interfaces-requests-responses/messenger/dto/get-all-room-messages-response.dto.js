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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllRoomMessagesResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class GetAllRoomMessagesResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'room_create_success' }),
    __metadata("design:type", String)
], GetAllRoomMessagesResponseDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            messages: [
                {
                    room_id: '5d987c3bfb881ec86b476bcg',
                    sender_id: '4d987c3bfb881ec86b476bck',
                    message: 'here is my message 1'
                },
                {
                    room_id: '2d987c3bfb881ec86b476bcc',
                    sender_id: '7d987c3bfb881ec86b476bcc',
                    message: 'here is my message 2'
                },
            ],
        },
        nullable: true,
    }),
    __metadata("design:type", Object)
], GetAllRoomMessagesResponseDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null, nullable: true }),
    __metadata("design:type", Object)
], GetAllRoomMessagesResponseDto.prototype, "errors", void 0);
exports.GetAllRoomMessagesResponseDto = GetAllRoomMessagesResponseDto;
//# sourceMappingURL=get-all-room-messages-response.dto.js.map