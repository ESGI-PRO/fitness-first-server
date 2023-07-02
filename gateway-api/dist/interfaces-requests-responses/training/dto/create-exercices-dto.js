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
exports.CreateExercicesDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateExercicesDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Push up ' }),
    __metadata("design:type", String)
], CreateExercicesDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 56 }),
    __metadata("design:type", Number)
], CreateExercicesDTO.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'body_only' }),
    __metadata("design:type", String)
], CreateExercicesDTO.prototype, "equipment", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Intermediate' }),
    __metadata("design:type", String)
], CreateExercicesDTO.prototype, "difficulty", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Push up ' }),
    __metadata("design:type", String)
], CreateExercicesDTO.prototype, "instructions", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 3 }),
    __metadata("design:type", Number)
], CreateExercicesDTO.prototype, "TypeExercicesId", void 0);
exports.CreateExercicesDTO = CreateExercicesDTO;
//# sourceMappingURL=create-exercices-dto.js.map