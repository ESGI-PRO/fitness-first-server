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
const create_exercices_dto_1 = require("./interfaces-requests-responses/training/dto/create-exercices-dto");
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const swagger_1 = require("@nestjs/swagger");
const authorization_decorator_1 = require("./decorators/authorization.decorator");
const rxjs_1 = require("rxjs");
const get_training_response_dto_1 = require("./interfaces-requests-responses/training/dto/get-training-response.dto");
const create_training_dto_1 = require("./interfaces-requests-responses/training/dto/create-training-dto");
const get_training_id_dto_1 = require("./interfaces-requests-responses/training/dto/get-training-id-dto");
const get_exercices_response_dto_1 = require("./interfaces-requests-responses/training/dto/get-exercices-response.dto");
const get_exercices_id_dto_1 = require("./interfaces-requests-responses/training/dto/get-exercices-id-dto");
const get_training_userId_dto_1 = require("./interfaces-requests-responses/training/dto/get-training-userId-dto");
let TrainingController = class TrainingController {
    constructor(trainingServiceClient) {
        this.trainingServiceClient = trainingServiceClient;
    }
    async getTrainings() {
        const trainingResponse = await (0, rxjs_1.firstValueFrom)(this.trainingServiceClient.send('get_trainings', {}));
        return {
            message: trainingResponse.message,
            data: {
                training: trainingResponse.data.training,
            },
            errors: null,
        };
    }
    async getExercices() {
        const exercicesResponse = await (0, rxjs_1.firstValueFrom)(this.trainingServiceClient.send('get_exercices', {}));
        return {
            message: exercicesResponse.message,
            data: {
                exercices: exercicesResponse.data.exercices,
            },
            errors: null,
        };
    }
    async createTraining(trainingData) {
        const trainingResponse = await (0, rxjs_1.firstValueFrom)(this.trainingServiceClient.send('create_training', trainingData));
        return {
            message: trainingResponse.message,
            data: {
                training: trainingResponse.data.training,
            },
            errors: null,
        };
    }
    async getTrainingByID(params) {
        const trainingResponse = await (0, rxjs_1.firstValueFrom)(this.trainingServiceClient.send('get_training_by_id', {
            id: params.id,
        }));
        return {
            message: trainingResponse.message,
            data: {
                training: trainingResponse.data.training,
            },
            errors: null,
        };
    }
    async getTrainingByUserID(params) {
        const trainingResponse = await (0, rxjs_1.firstValueFrom)(this.trainingServiceClient.send('get_training_by_UserId', {
            userId: params.userId,
        }));
        return {
            message: trainingResponse.message,
            data: {
                training: trainingResponse.data.training,
            },
            errors: null,
        };
    }
    async updateTrainingByID(params) {
        const trainingResponse = await (0, rxjs_1.firstValueFrom)(this.trainingServiceClient.send('update_training_by_id', {
            id: params.id,
        }));
        return {
            message: trainingResponse.message,
            data: {
                training: trainingResponse.data.training,
            },
            errors: null,
        };
    }
    async deleteTrainingByID(params) {
        const trainingResponse = await (0, rxjs_1.firstValueFrom)(this.trainingServiceClient.send('delete_training_by_id', {
            id: params.id,
        }));
        return {
            message: trainingResponse.message,
            data: {
                training: trainingResponse.data.training,
            },
            errors: null,
        };
    }
    async createExercices(exercicesData) {
        const exercicesResponse = await (0, rxjs_1.firstValueFrom)(this.trainingServiceClient.send('create_exercice', exercicesData));
        return {
            message: exercicesResponse.message,
            data: {
                exercices: exercicesResponse.data.exercices,
            },
            errors: null,
        };
    }
    async getExercicesgByID(params) {
        const exercicesResponse = await (0, rxjs_1.firstValueFrom)(this.trainingServiceClient.send('get_exercice_by_id', {
            id: params.id,
        }));
        return {
            message: exercicesResponse.message,
            data: {
                exercices: exercicesResponse.data.exercices,
            },
            errors: null,
        };
    }
    async getCategoryExercices() {
        const exercicesResponse = await (0, rxjs_1.firstValueFrom)(this.trainingServiceClient.send('get_category_exercices', {}));
        return {
            message: exercicesResponse.message,
            data: {
                exercices: exercicesResponse.data.exercices,
            },
            errors: null,
        };
    }
    async getExercicesgByCategory(params) {
        const exercicesResponse = await (0, rxjs_1.firstValueFrom)(this.trainingServiceClient.send('get_exercices_by_category', {
            id: params.id,
        }));
        return {
            message: exercicesResponse.message,
            data: {
                exercices: exercicesResponse.data.exercices,
            },
            errors: null,
        };
    }
};
__decorate([
    (0, common_1.Get)('/'),
    (0, authorization_decorator_1.Authorization)(false),
    (0, swagger_1.ApiOkResponse)({
        type: get_training_response_dto_1.GetTrainingResponseDto,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TrainingController.prototype, "getTrainings", null);
__decorate([
    (0, common_1.Get)('/exercices'),
    (0, authorization_decorator_1.Authorization)(false),
    (0, swagger_1.ApiOkResponse)({
        type: get_exercices_response_dto_1.GetExercicesResponseDto,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TrainingController.prototype, "getExercices", null);
__decorate([
    (0, common_1.Post)('/'),
    (0, authorization_decorator_1.Authorization)(false),
    (0, swagger_1.ApiOkResponse)({
        type: get_training_response_dto_1.GetTrainingResponseDto,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_training_dto_1.CreateTrainingDTO]),
    __metadata("design:returntype", Promise)
], TrainingController.prototype, "createTraining", null);
__decorate([
    (0, common_1.Get)('/:id'),
    (0, authorization_decorator_1.Authorization)(false),
    (0, swagger_1.ApiOkResponse)({
        type: get_training_response_dto_1.GetTrainingResponseDto,
    }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_training_id_dto_1.getTrainingIdDTO]),
    __metadata("design:returntype", Promise)
], TrainingController.prototype, "getTrainingByID", null);
__decorate([
    (0, common_1.Get)('/user/:userId'),
    (0, authorization_decorator_1.Authorization)(false),
    (0, swagger_1.ApiOkResponse)({
        type: get_training_response_dto_1.GetTrainingResponseDto,
    }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_training_userId_dto_1.getTrainingUserIdDTO]),
    __metadata("design:returntype", Promise)
], TrainingController.prototype, "getTrainingByUserID", null);
__decorate([
    (0, common_1.Put)('/:id'),
    (0, authorization_decorator_1.Authorization)(false),
    (0, swagger_1.ApiOkResponse)({
        type: get_training_response_dto_1.GetTrainingResponseDto,
    }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_training_id_dto_1.getTrainingIdDTO]),
    __metadata("design:returntype", Promise)
], TrainingController.prototype, "updateTrainingByID", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    (0, authorization_decorator_1.Authorization)(false),
    (0, swagger_1.ApiOkResponse)({
        type: get_training_response_dto_1.GetTrainingResponseDto,
    }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_training_id_dto_1.getTrainingIdDTO]),
    __metadata("design:returntype", Promise)
], TrainingController.prototype, "deleteTrainingByID", null);
__decorate([
    (0, common_1.Post)('/exercices'),
    (0, authorization_decorator_1.Authorization)(false),
    (0, swagger_1.ApiOkResponse)({
        type: get_exercices_response_dto_1.GetExercicesResponseDto,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_exercices_dto_1.CreateExercicesDTO]),
    __metadata("design:returntype", Promise)
], TrainingController.prototype, "createExercices", null);
__decorate([
    (0, common_1.Get)('/exercices/:id'),
    (0, authorization_decorator_1.Authorization)(false),
    (0, swagger_1.ApiOkResponse)({
        type: get_exercices_response_dto_1.GetExercicesResponseDto,
    }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_exercices_id_dto_1.getExercicesIdDTO]),
    __metadata("design:returntype", Promise)
], TrainingController.prototype, "getExercicesgByID", null);
__decorate([
    (0, common_1.Get)('/exercices/category/'),
    (0, authorization_decorator_1.Authorization)(false),
    (0, swagger_1.ApiOkResponse)({
        type: get_exercices_response_dto_1.GetExercicesResponseDto,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TrainingController.prototype, "getCategoryExercices", null);
__decorate([
    (0, common_1.Get)('/exercices/category/:id'),
    (0, authorization_decorator_1.Authorization)(false),
    (0, swagger_1.ApiOkResponse)({
        type: get_exercices_response_dto_1.GetExercicesResponseDto,
    }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_exercices_id_dto_1.getExercicesIdDTO]),
    __metadata("design:returntype", Promise)
], TrainingController.prototype, "getExercicesgByCategory", null);
TrainingController = __decorate([
    (0, common_1.Controller)('training'),
    (0, swagger_1.ApiTags)('training'),
    __param(0, (0, common_1.Inject)('TRAINING_SERVICE')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], TrainingController);
exports.TrainingController = TrainingController;
//# sourceMappingURL=training.controller.js.map