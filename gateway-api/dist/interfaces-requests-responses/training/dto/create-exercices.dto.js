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
exports.CreateExercicesDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateExercicesDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: [{
                "bodyPart": "back",
                "equipment": "weighted",
                "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/0G-Iu0A6XzG-o7",
                "id": "0841",
                "name": "weighted pull-up",
                "target": "lats"
            }] }),
    __metadata("design:type", Array)
], CreateExercicesDto.prototype, "exercises", void 0);
exports.CreateExercicesDto = CreateExercicesDto;
//# sourceMappingURL=create-exercices.dto.js.map