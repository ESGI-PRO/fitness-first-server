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
exports.RecettesController = void 0;
const recettes_service_1 = require("./recettes.service");
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
let RecettesController = class RecettesController {
    constructor(recettesApi) {
        this.recettesApi = recettesApi;
    }
    async get() {
        return {
            message: 'success get ingredients',
            data: {
                nutrition: await this.recettesApi.getRecettes(),
            },
            errors: null,
        };
    }
    async getbyID(params) {
        return {
            message: 'success get ingredients',
            data: {
                nutrition: await this.recettesApi.getRecetteByID(params.id),
            },
            errors: null,
        };
    }
    async create(data) {
        return {
            message: 'success get ingredients',
            data: {
                nutrition: await this.recettesApi.createRecette(data),
            },
            errors: null,
        };
    }
    async getRecetteForUserByID(params) {
        return {
            message: 'success get ingredients',
            data: {
                nutrition: await this.recettesApi.getRecetteForUserByID(params.userId),
            },
            errors: null,
        };
    }
    async deleteIngredient(data) {
        const { id } = data;
        const deletedIngredient = await this.recettesApi.deleteRecette(id);
        return {
            message: 'success delete recette',
            data: {
                nutrition: deletedIngredient,
            },
            errors: null,
        };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)('get_recettes'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RecettesController.prototype, "get", null);
__decorate([
    (0, microservices_1.MessagePattern)('get_recettes_by_id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RecettesController.prototype, "getbyID", null);
__decorate([
    (0, microservices_1.MessagePattern)('create_recette'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RecettesController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)('get_recettes_by_userId'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RecettesController.prototype, "getRecetteForUserByID", null);
__decorate([
    (0, microservices_1.MessagePattern)('delete_recette'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RecettesController.prototype, "deleteIngredient", null);
RecettesController = __decorate([
    (0, common_1.Controller)('recettes'),
    __metadata("design:paramtypes", [recettes_service_1.RecettesService])
], RecettesController);
exports.RecettesController = RecettesController;
//# sourceMappingURL=recettes.controller.js.map