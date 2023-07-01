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
exports.CreateUserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateUserDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        uniqueItems: true,
        example: 'test1@denrox.com',
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        minLength: 6,
        example: 'test11',
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        minLength: 6,
        example: 'test11',
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "userName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        minLength: 10,
        example: '1234567890',
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "mobileNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: true,
    }),
    __metadata("design:type", Boolean)
], CreateUserDto.prototype, "isTrainer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '5d987c3bfb881ec86b476bcc',
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "trainerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: [],
    }),
    __metadata("design:type", Array)
], CreateUserDto.prototype, "traineeIds", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'YOGA',
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "trainerSpeciality", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: false,
    }),
    __metadata("design:type", Boolean)
], CreateUserDto.prototype, "is_confirmed", void 0);
exports.CreateUserDto = CreateUserDto;
//# sourceMappingURL=create-user.dto.js.map