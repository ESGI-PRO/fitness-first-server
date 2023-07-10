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
exports.ExercicesController = void 0;
const microservices_1 = require("@nestjs/microservices");
const exercices_dto_1 = require("./exercices.dto");
const exercices_service_1 = require("./exercices.service");
const common_1 = require("@nestjs/common");
let ExercicesController = class ExercicesController {
    constructor(exercicesAPI) {
        this.exercicesAPI = exercicesAPI;
    }
    async getAll() {
        const exercices = await this.exercicesAPI.findAll();
        return {
            message: 'success message from exercicesResponse',
            data: {
                exercices: exercices,
            },
            errors: null,
        };
    }
    async getByID(params) {
        const exercices = await this.exercicesAPI.findOne(params.id);
        return {
            message: 'success message from exercicesResponse',
            data: {
                exercices: exercices,
            },
            errors: null,
        };
    }
    async create(data) {
        const exercices = await this.exercicesAPI.create(data);
        return {
            message: 'success message from exercicesResponse',
            data: {
                exercices: exercices,
            },
            errors: null,
        };
    }
    async update(params, data) {
        return this.exercicesAPI.update(params.id, data);
    }
    async delete(params) {
        const exercices = await this.exercicesAPI.delete(params.id);
        return {
            message: 'success message from exercicesResponse',
            data: {
                exercices: exercices,
            },
            errors: null,
        };
    }
    async getCategoriesExercicesByID(params) {
        const exercices = await this.exercicesAPI.getCategorieExercicesByID(params.id);
        return {
            message: 'success message from exercicesResponse',
            data: {
                exercices: exercices,
            },
            errors: null,
        };
    }
    async getExercicesByCategory(params) {
        const exercices = await this.exercicesAPI.findAllByCategory(params.id);
        return {
            message: 'success message from exercicesResponse',
            data: {
                exercices: exercices,
            },
            errors: null,
        };
    }
    async getCategoryExercices() {
        const exercices = await this.exercicesAPI.getCategoriesExercices();
        return {
            message: 'success message from exercicesResponse',
            data: {
                exercices: exercices,
            },
            errors: null,
        };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)('get_exercices'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ExercicesController.prototype, "getAll", null);
__decorate([
    (0, microservices_1.MessagePattern)('get_exercice_by_id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExercicesController.prototype, "getByID", null);
__decorate([
    (0, microservices_1.MessagePattern)('create_exercice'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [exercices_dto_1.CreateExercicesDTO]),
    __metadata("design:returntype", Promise)
], ExercicesController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)('update_exercice_by_id'),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, exercices_dto_1.CreateExercicesDTO]),
    __metadata("design:returntype", Promise)
], ExercicesController.prototype, "update", null);
__decorate([
    (0, microservices_1.MessagePattern)('delete_exercice_by_id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExercicesController.prototype, "delete", null);
__decorate([
    (0, microservices_1.MessagePattern)('get_category_exercices_by_id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExercicesController.prototype, "getCategoriesExercicesByID", null);
__decorate([
    (0, microservices_1.MessagePattern)('get_exercices_by_category'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExercicesController.prototype, "getExercicesByCategory", null);
__decorate([
    (0, microservices_1.MessagePattern)('get_category_exercices'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ExercicesController.prototype, "getCategoryExercices", null);
ExercicesController = __decorate([
    (0, common_1.Controller)('exercices'),
    __metadata("design:paramtypes", [exercices_service_1.ExercicesService])
], ExercicesController);
exports.ExercicesController = ExercicesController;
//# sourceMappingURL=exercices.controller.js.map