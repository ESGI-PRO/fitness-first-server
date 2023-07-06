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
exports.GetAllMeetingResponseDto = exports.GetTwilioTokenResponseDto = exports.UpdateMeetingResponseDto = exports.CreateMeetingResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateMeetingResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 201 }),
    __metadata("design:type", Number)
], CreateMeetingResponseDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'meeting_create_success' }),
    __metadata("design:type", String)
], CreateMeetingResponseDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            meeting: {
                id: '5d987c3bfb881ec86b476b89',
                sender_id: '5d987c3bfb881ec86b476bcc',
                members: ['5d987c3bfb881ec86b476bcc', '5d987c3bfb881ec86b476b09'],
                date: '2023-07-05T12:26:58.225Z',
                time: '2023-07-05T12:24:58.225Z',
                description: 'This is a description',
            },
        },
        nullable: true,
    }),
    __metadata("design:type", Object)
], CreateMeetingResponseDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null, nullable: true }),
    __metadata("design:type", Object)
], CreateMeetingResponseDto.prototype, "errors", void 0);
exports.CreateMeetingResponseDto = CreateMeetingResponseDto;
class UpdateMeetingResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 200 }),
    __metadata("design:type", Number)
], UpdateMeetingResponseDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'meeting_update_success' }),
    __metadata("design:type", String)
], UpdateMeetingResponseDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            meeting: {
                id: '5d987c3bfb881ec86b476b89',
                sender_id: '5d987c3bfb881ec86b476bcc',
                members: ['5d987c3bfb881ec86b476bcc', '5d987c3bfb881ec86b476b09'],
                date: '23/07/2023',
                time: '08:12',
                description: 'This is a description',
            },
        },
        nullable: true,
    }),
    __metadata("design:type", Object)
], UpdateMeetingResponseDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null, nullable: true }),
    __metadata("design:type", Object)
], UpdateMeetingResponseDto.prototype, "errors", void 0);
exports.UpdateMeetingResponseDto = UpdateMeetingResponseDto;
class GetTwilioTokenResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 200 }),
    __metadata("design:type", Number)
], GetTwilioTokenResponseDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'get_twilio_token_success' }),
    __metadata("design:type", String)
], GetTwilioTokenResponseDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            token: '5d987c3bTYfb88TY1ec86b476b8HJBHdsq9O09sqssdfqPwqd',
        }
    }),
    __metadata("design:type", Object)
], GetTwilioTokenResponseDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null, nullable: true }),
    __metadata("design:type", Object)
], GetTwilioTokenResponseDto.prototype, "errors", void 0);
exports.GetTwilioTokenResponseDto = GetTwilioTokenResponseDto;
class GetAllMeetingResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 201 }),
    __metadata("design:type", Number)
], GetAllMeetingResponseDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'meeting_create_success' }),
    __metadata("design:type", String)
], GetAllMeetingResponseDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            meetings: [{
                    id: '5d987c3bfb881ec86b476b89',
                    sender_id: '5d987c3bfb881ec86b476bcc',
                    members: ['5d987c3bfb881ec86b476bcc', '5d987c3bfb881ec86b476b09'],
                    date: '23/07/2023',
                    time: '08:12',
                    description: 'This is a description',
                }]
        },
        nullable: true,
    }),
    __metadata("design:type", Object)
], GetAllMeetingResponseDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null, nullable: true }),
    __metadata("design:type", Object)
], GetAllMeetingResponseDto.prototype, "errors", void 0);
exports.GetAllMeetingResponseDto = GetAllMeetingResponseDto;
//# sourceMappingURL=video-meeting.response.js.map