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
exports.TrainingController = void 0;
const common_1 = require("@nestjs/common");
const training_service_1 = require("./training.service");
const training_request_1 = require("./request/training.request");
const training_interceptor_1 = require("./training.interceptor");
const microservices_1 = require("@nestjs/microservices");
let TrainingController = class TrainingController {
    constructor(trainingService) {
        this.trainingService = trainingService;
    }
    async getAllTrainings() {
        const trainings = await this.trainingService.findAllTrainings();
        return {
            message: 'success message from Training Response',
            data: {
                training: trainings,
            },
            errors: null,
        };
    }
    async getTraining(params) {
        const training = await this.trainingService.findOne(params.id);
        return {
            message: 'success message from Training Response',
            data: {
                training: training,
            },
            errors: null,
        };
    }
    async getTrainingByUserId(params) {
        const training = await this.trainingService.findAllByID(params.userId);
        return {
            message: 'success message from Training Response',
            data: {
                training: training,
            },
            errors: null,
        };
    }
    async createTraining(data) {
        const createTraining = await this.trainingService.createTraining(data);
        return {
            message: 'success message from Training Response',
            data: {
                training: createTraining,
            },
            errors: null,
        };
    }
    async updateTraining(params, data) {
        return {
            message: 'success message from Training Response',
            data: {
                training: await this.trainingService.update(params.id, data),
            },
            errors: null,
        };
    }
    async deleteTraining(params) {
        return {
            message: 'success message from Training Response',
            data: {
                training: await this.trainingService.remove(params.id),
            },
            errors: null,
        };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)('get_trainings'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TrainingController.prototype, "getAllTrainings", null);
__decorate([
    (0, microservices_1.MessagePattern)('get_training_by_id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TrainingController.prototype, "getTraining", null);
__decorate([
    (0, microservices_1.MessagePattern)('get_training_by_UserId'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TrainingController.prototype, "getTrainingByUserId", null);
__decorate([
    (0, microservices_1.MessagePattern)('create_training'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TrainingController.prototype, "createTraining", null);
__decorate([
    (0, microservices_1.MessagePattern)('update_training_by_id'),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, training_request_1.UpdateTrainingRequest]),
    __metadata("design:returntype", Promise)
], TrainingController.prototype, "updateTraining", null);
__decorate([
    (0, microservices_1.MessagePattern)('delete_training_by_id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TrainingController.prototype, "deleteTraining", null);
TrainingController = __decorate([
    (0, common_1.Controller)('training'),
    (0, common_1.UseInterceptors)(training_interceptor_1.TrainingInterceptor),
    __metadata("design:paramtypes", [training_service_1.TrainingService])
], TrainingController);
exports.TrainingController = TrainingController;
//# sourceMappingURL=training.controller.js.map