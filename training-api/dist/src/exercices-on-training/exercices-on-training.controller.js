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
exports.ExercicesOnTrainingController = void 0;
const exercices_on_training_dto_1 = require("./exercices-on-training.dto");
const exercices_on_training_service_1 = require("./exercices-on-training.service");
const common_1 = require("@nestjs/common");
let ExercicesOnTrainingController = class ExercicesOnTrainingController {
    constructor(exercicesOnTrainingAPI) {
        this.exercicesOnTrainingAPI = exercicesOnTrainingAPI;
    }
    async getAll() {
        const exercices = await this.exercicesOnTrainingAPI.findAll();
        return exercices;
    }
    async getByID(id) {
        const exercices = await this.exercicesOnTrainingAPI.findOne(id);
        return exercices;
    }
    async create(data) {
        const exercices = await this.exercicesOnTrainingAPI.create(data);
        return exercices;
    }
    async update(id, data) {
        return this.exercicesOnTrainingAPI.update(id, data);
    }
    async delete(id) {
        const exercices = await this.exercicesOnTrainingAPI.remove(id);
        return exercices;
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(200),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ExercicesOnTrainingController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/:id'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ExercicesOnTrainingController.prototype, "getByID", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [exercices_on_training_dto_1.CreateExercicesDTO]),
    __metadata("design:returntype", Promise)
], ExercicesOnTrainingController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(":id"),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)("id", common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, exercices_on_training_dto_1.CreateExercicesDTO]),
    __metadata("design:returntype", Promise)
], ExercicesOnTrainingController.prototype, "update", null);
__decorate([
    (0, common_1.Get)('/:id'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)("id", common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ExercicesOnTrainingController.prototype, "delete", null);
ExercicesOnTrainingController = __decorate([
    (0, common_1.Controller)('exercices-on-training'),
    __metadata("design:paramtypes", [exercices_on_training_service_1.ExercicesOnTrainingService])
], ExercicesOnTrainingController);
exports.ExercicesOnTrainingController = ExercicesOnTrainingController;
//# sourceMappingURL=exercices-on-training.controller.js.map