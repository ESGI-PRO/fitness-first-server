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
exports.IngredientsController = void 0;
const common_1 = require("@nestjs/common");
const ingredients_service_1 = require("./ingredients.service");
const microservices_1 = require("@nestjs/microservices");
let IngredientsController = class IngredientsController {
    constructor(ingredientsApi) {
        this.ingredientsApi = ingredientsApi;
    }
    async get() {
        console.log('this.ingredientsApi');
        return {
            message: 'success get ingredients',
            data: {
                nutrition: await this.ingredientsApi.getIngredients(),
            },
            errors: null,
        };
    }
    async getbyID(params) {
        console.log("id : " + params.id);
        return {
            message: 'success message from nutritionResponse',
            data: {
                nutrition: await this.ingredientsApi.getIngredientByID(params.id),
            },
            errors: null,
        };
    }
    async create(data) {
        return {
            message: 'success message from nutritionResponse',
            data: {
                nutrition: await this.ingredientsApi.createIngredient(data)
            },
            errors: null,
        };
    }
    async getIngredientForUserByID(params) {
        console.log("userId : " + params.userId);
        return {
            message: 'success message from nutritionResponse',
            data: {
                nutrition: await this.ingredientsApi.getIngredientForUserByID(params.userId)
            },
            errors: null,
        };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)('get_ingredients'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], IngredientsController.prototype, "get", null);
__decorate([
    (0, microservices_1.MessagePattern)('get_ingredients_by_id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IngredientsController.prototype, "getbyID", null);
__decorate([
    (0, microservices_1.MessagePattern)('create_ingredient'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IngredientsController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)('get_ingredients_for_userId'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IngredientsController.prototype, "getIngredientForUserByID", null);
IngredientsController = __decorate([
    (0, common_1.Controller)('ingredients'),
    __metadata("design:paramtypes", [ingredients_service_1.IngredientsService])
], IngredientsController);
exports.IngredientsController = IngredientsController;
//# sourceMappingURL=ingredients.controller.js.map