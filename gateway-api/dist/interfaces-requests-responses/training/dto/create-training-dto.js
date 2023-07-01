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
exports.CreateTrainingDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateTrainingDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Citron' }),
    __metadata("design:type", String)
], CreateTrainingDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Citron' }),
    __metadata("design:type", String)
], CreateTrainingDTO.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Citron' }),
    __metadata("design:type", Number)
], CreateTrainingDTO.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'ERJHGFGH-FGHJK' }),
    __metadata("design:type", String)
], CreateTrainingDTO.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Citron' }),
    __metadata("design:type", String)
], CreateTrainingDTO.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: [] }),
    __metadata("design:type", Array)
], CreateTrainingDTO.prototype, "listExercices", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '23/06/2023' }),
    __metadata("design:type", Date)
], CreateTrainingDTO.prototype, "durationStart", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '23/09/2023' }),
    __metadata("design:type", Date)
], CreateTrainingDTO.prototype, "durationEnd", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '23/06/2023' }),
    __metadata("design:type", Date)
], CreateTrainingDTO.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '23/06/2023' }),
    __metadata("design:type", Date)
], CreateTrainingDTO.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            create: [
                {
                    exerciceId: 67,
                    series: 5,
                    repetition: 10,
                },
            ],
        },
    }),
    __metadata("design:type", Object)
], CreateTrainingDTO.prototype, "trainingOnExercices", void 0);
exports.CreateTrainingDTO = CreateTrainingDTO;
//# sourceMappingURL=create-training-dto.js.map