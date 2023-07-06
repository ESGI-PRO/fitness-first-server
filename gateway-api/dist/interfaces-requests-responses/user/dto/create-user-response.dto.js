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
exports.CreateUserResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateUserResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'user_create_success' }),
    __metadata("design:type", String)
], CreateUserResponseDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            user: {
                email: 'test@denrox.com',
                is_confirmed: false,
                id: '5d987c3bfb881ec86b476bcc',
                userName: 'John Doe',
                mobileNumber: '1234567890',
                isTrainer: true,
                isAdmin: false,
                trainerId: '5d987c3bfb881ec86b476bcc',
                traineeIds: [],
                trainerSpeciality: 'YOGA',
            },
            token: {
                access: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDZmZTdlOGFjMWZjZDQwZGQ1YWQzOTUiLCJpYXQiOjE2ODUwNTU0NjQsImV4cCI6MTY4NTA1OTA2NCwidHlwZSI6ImFjY2VzcyJ9.9puJokzb5fFOZdPUHdgqzChbcfb34CbvcssaYZ7Uvu4",
                refresh: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDZmZTdlOGFjMWZjZDQwZGQ1YWQzOTUiLCJpYXQiOjE2ODUwNTU0NjQsImV4cCI6MTY5MDIzOTQ2NCwidHlwZSI6InJlZnJlc2gifQ.pI9XzbE6KeDJNCavHU9bGWTcI9HzpNAVfQNOjpnz6zA"
            }
        },
        nullable: true,
    }),
    __metadata("design:type", Object)
], CreateUserResponseDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null, nullable: true }),
    __metadata("design:type", Object)
], CreateUserResponseDto.prototype, "errors", void 0);
exports.CreateUserResponseDto = CreateUserResponseDto;
//# sourceMappingURL=create-user-response.dto.js.map