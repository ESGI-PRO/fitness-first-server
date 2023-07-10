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
exports.CreateMessageResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateMessageResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'message_create_success' }),
    __metadata("design:type", String)
], CreateMessageResponseDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            message: {
                room_id: '5d987c3bfb881ec86b476bcc',
                sender_id: '5d987c3bfb881ec86b476bcc',
                message: 'here is my message'
            },
        },
        nullable: true,
    }),
    __metadata("design:type", Object)
], CreateMessageResponseDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null, nullable: true }),
    __metadata("design:type", Object)
], CreateMessageResponseDto.prototype, "errors", void 0);
exports.CreateMessageResponseDto = CreateMessageResponseDto;
//# sourceMappingURL=create-message-response.dto.js.map