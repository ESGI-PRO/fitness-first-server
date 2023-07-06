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
exports.UpdateMeetingDto = exports.CreateMeetingDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateMeetingDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '649d48c0342aeeff25bff543' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateMeetingDto.prototype, "sender_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['649d48c0342aeeff25bff543', '649d48c0342aeeff25jff540'] }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateMeetingDto.prototype, "members", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "08/07/2023" }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateMeetingDto.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "08:12" }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateMeetingDto.prototype, "time", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "This is a description" }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateMeetingDto.prototype, "description", void 0);
exports.CreateMeetingDto = CreateMeetingDto;
class UpdateMeetingDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateMeetingDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '649d48c0342aeeff25bff543' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateMeetingDto.prototype, "sender_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['649d48c0342aeeff25bff543', '649d48c0342aeeff25jff540'] }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], UpdateMeetingDto.prototype, "members", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "08/07/2023" }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateMeetingDto.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "08:12" }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateMeetingDto.prototype, "time", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "This is a description" }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateMeetingDto.prototype, "description", void 0);
exports.UpdateMeetingDto = UpdateMeetingDto;
//# sourceMappingURL=video-meeting.request.js.map