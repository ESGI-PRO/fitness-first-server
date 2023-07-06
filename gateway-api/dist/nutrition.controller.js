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
exports.NutritionController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const swagger_1 = require("@nestjs/swagger");
const authorization_decorator_1 = require("./decorators/authorization.decorator");
const get_nutrition_response_dto_1 = require("./interfaces-requests-responses/nutrition/dto/get-nutrition-response.dto");
const rxjs_1 = require("rxjs");
const CreateIngredientDTO_1 = require("./interfaces-requests-responses/nutrition/dto/CreateIngredientDTO");
const getIngredientId_1 = require("./interfaces-requests-responses//nutrition/dto/getIngredientId");
const getIngredientUserID_1 = require("./interfaces-requests-responses/nutrition/dto/getIngredientUserID");
const get_categorie_id_dto_1 = require("./interfaces-requests-responses/nutrition/dto/get-categorie-id-dto");
const create_recette_dto_1 = require("./interfaces-requests-responses/nutrition/dto/create-recette.dto");
const permission_decorator_1 = require("./decorators/permission.decorator");
let NutritionController = class NutritionController {
    constructor(nutritionServiceClient) {
        this.nutritionServiceClient = nutritionServiceClient;
    }
    async getRecettes() {
        const nutritionResponse = await (0, rxjs_1.firstValueFrom)(this.nutritionServiceClient.send('get_recettes', {}));
        return {
            message: nutritionResponse.message,
            data: {
                nutrition: nutritionResponse.data.nutrition,
            },
            errors: null,
        };
    }
    async createRecettes(recettesData) {
        const nutritionResponse = await (0, rxjs_1.firstValueFrom)(this.nutritionServiceClient.send('create_recette', recettesData));
        return {
            message: nutritionResponse.message,
            data: {
                nutrition: nutritionResponse.data.nutrition,
            },
            errors: null,
        };
    }
    async getIngredients() {
        const nutritionResponse = await (0, rxjs_1.firstValueFrom)(this.nutritionServiceClient.send('get_ingredients', {}));
        return {
            message: nutritionResponse.message,
            data: {
                nutrition: nutritionResponse.data.nutrition,
            },
            errors: null,
        };
    }
    async createIngredient(ingredientData) {
        const nutritionResponse = await (0, rxjs_1.firstValueFrom)(this.nutritionServiceClient.send('create_ingredient', ingredientData));
        return {
            message: nutritionResponse.message,
            data: {
                nutrition: nutritionResponse.data.nutrition,
            },
            errors: null,
        };
    }
    async updateIngredient(params, ingredientData) {
        const nutritionResponse = await (0, rxjs_1.firstValueFrom)(this.nutritionServiceClient.send('edit_ingredient', { id: Number(params.id), ingredientData }));
        return {
            message: nutritionResponse.message,
            data: {
                nutrition: nutritionResponse.data.nutrition,
            },
            errors: null,
        };
    }
    async getCategories() {
        const nutritionResponse = await (0, rxjs_1.firstValueFrom)(this.nutritionServiceClient.send('get_categories', {}));
        return {
            message: nutritionResponse.message,
            data: {
                nutrition: nutritionResponse.data.nutrition,
            },
            errors: null,
        };
    }
    async getRecetteByID(params) {
        const nutritionResponse = await (0, rxjs_1.firstValueFrom)(this.nutritionServiceClient.send('get_recettes_by_id', { id: params.id }));
        return {
            message: nutritionResponse.message,
            data: {
                nutrition: nutritionResponse.data.nutrition,
            },
            errors: null,
        };
    }
    async getIngredientByID(params) {
        const nutritionResponse = await (0, rxjs_1.firstValueFrom)(this.nutritionServiceClient.send('get_ingredients_by_id', {
            id: params.id,
        }));
        console.log(`Ingredient` + params.id);
        return {
            message: nutritionResponse.message,
            data: {
                nutrition: nutritionResponse.data.nutrition,
            },
            errors: null,
        };
    }
    async deleteIngredient(id) {
        const nutritionResponse = await (0, rxjs_1.firstValueFrom)(this.nutritionServiceClient.send('delete_ingredient', { id: Number(id) }));
        return {
            message: nutritionResponse.message,
            data: {
                nutrition: nutritionResponse.data.nutrition,
            },
            errors: null,
        };
    }
    async deleteRecette(id) {
        const nutritionResponse = await (0, rxjs_1.firstValueFrom)(this.nutritionServiceClient.send('delete_recette', { id: Number(id) }));
        return {
            message: nutritionResponse.message,
            data: {
                nutrition: nutritionResponse.data.nutrition,
            },
            errors: null,
        };
    }
    async getCategorieById(params) {
        const nutritionResponse = await (0, rxjs_1.firstValueFrom)(this.nutritionServiceClient.send('get_categorie_by_id', {
            id: params.id,
        }));
        return {
            message: nutritionResponse.message,
            data: {
                nutrition: nutritionResponse.data.nutrition,
            },
            errors: null,
        };
    }
    async getRecettesByUserId(params) {
        const nutritionResponse = await (0, rxjs_1.firstValueFrom)(this.nutritionServiceClient.send('get_recettes_by_userId', {
            userId: params.userId,
        }));
        return {
            message: nutritionResponse.message,
            data: {
                nutrition: nutritionResponse.data.nutrition,
            },
            errors: null,
        };
    }
};
__decorate([
    (0, common_1.Get)('/'),
    (0, authorization_decorator_1.Authorization)(true),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, permission_decorator_1.Permission)('get_recettes'),
    (0, swagger_1.ApiOkResponse)({
        type: get_nutrition_response_dto_1.GetNutritionResponseDto,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NutritionController.prototype, "getRecettes", null);
__decorate([
    (0, common_1.Post)('/'),
    (0, authorization_decorator_1.Authorization)(true),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, permission_decorator_1.Permission)('create_recette'),
    (0, swagger_1.ApiOkResponse)({
        type: get_nutrition_response_dto_1.GetNutritionResponseDto,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_recette_dto_1.createRecetteDTO]),
    __metadata("design:returntype", Promise)
], NutritionController.prototype, "createRecettes", null);
__decorate([
    (0, common_1.Get)('/ingredients'),
    (0, authorization_decorator_1.Authorization)(false),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, permission_decorator_1.Permission)('get_ingredients'),
    (0, swagger_1.ApiOkResponse)({
        type: get_nutrition_response_dto_1.GetNutritionResponseDto,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NutritionController.prototype, "getIngredients", null);
__decorate([
    (0, common_1.Post)('/ingredients'),
    (0, authorization_decorator_1.Authorization)(true),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, permission_decorator_1.Permission)('create_ingredient'),
    (0, swagger_1.ApiOkResponse)({
        type: get_nutrition_response_dto_1.GetNutritionResponseDto,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateIngredientDTO_1.CreateIngredientDTO]),
    __metadata("design:returntype", Promise)
], NutritionController.prototype, "createIngredient", null);
__decorate([
    (0, common_1.Put)('/ingredients/:id'),
    (0, authorization_decorator_1.Authorization)(false),
    (0, swagger_1.ApiOkResponse)({
        type: get_nutrition_response_dto_1.GetNutritionResponseDto,
    }),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [getIngredientId_1.getIngredientIdDTO, Object]),
    __metadata("design:returntype", Promise)
], NutritionController.prototype, "updateIngredient", null);
__decorate([
    (0, common_1.Get)('/categories/'),
    (0, authorization_decorator_1.Authorization)(true),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, permission_decorator_1.Permission)('get_categories'),
    (0, swagger_1.ApiOkResponse)({
        type: get_nutrition_response_dto_1.GetNutritionResponseDto,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NutritionController.prototype, "getCategories", null);
__decorate([
    (0, common_1.Get)('/:id'),
    (0, authorization_decorator_1.Authorization)(true),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, permission_decorator_1.Permission)('get_recettes_by_id'),
    (0, swagger_1.ApiOkResponse)({
        type: get_nutrition_response_dto_1.GetNutritionResponseDto,
    }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [getIngredientId_1.getIngredientIdDTO]),
    __metadata("design:returntype", Promise)
], NutritionController.prototype, "getRecetteByID", null);
__decorate([
    (0, common_1.Get)('/ingredients/:id'),
    (0, authorization_decorator_1.Authorization)(true),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, permission_decorator_1.Permission)('get_ingredients_by_id'),
    (0, swagger_1.ApiOkResponse)({
        type: get_nutrition_response_dto_1.GetNutritionResponseDto,
    }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [getIngredientId_1.getIngredientIdDTO]),
    __metadata("design:returntype", Promise)
], NutritionController.prototype, "getIngredientByID", null);
__decorate([
    (0, common_1.Delete)('/ingredients/:id'),
    (0, authorization_decorator_1.Authorization)(false),
    (0, swagger_1.ApiOkResponse)({
        type: get_nutrition_response_dto_1.GetNutritionResponseDto,
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NutritionController.prototype, "deleteIngredient", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    (0, authorization_decorator_1.Authorization)(false),
    (0, swagger_1.ApiOkResponse)({
        type: get_nutrition_response_dto_1.GetNutritionResponseDto,
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NutritionController.prototype, "deleteRecette", null);
__decorate([
    (0, common_1.Get)('/categories/:id'),
    (0, authorization_decorator_1.Authorization)(true),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, permission_decorator_1.Permission)('get_categorie_by_id'),
    (0, swagger_1.ApiOkResponse)({
        type: get_nutrition_response_dto_1.GetNutritionResponseDto,
    }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_categorie_id_dto_1.getCategorieIdDTO]),
    __metadata("design:returntype", Promise)
], NutritionController.prototype, "getCategorieById", null);
__decorate([
    (0, common_1.Get)('/:userId/user'),
    (0, authorization_decorator_1.Authorization)(true),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, permission_decorator_1.Permission)('get_recettes_by_userId'),
    (0, swagger_1.ApiOkResponse)({
        type: get_nutrition_response_dto_1.GetNutritionResponseDto,
    }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [getIngredientUserID_1.getIngredientUserIdDTO]),
    __metadata("design:returntype", Promise)
], NutritionController.prototype, "getRecettesByUserId", null);
NutritionController = __decorate([
    (0, common_1.Controller)('nutrition'),
    (0, swagger_1.ApiTags)('nutrition'),
    __param(0, (0, common_1.Inject)('NUTRITION_SERVICE')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], NutritionController);
exports.NutritionController = NutritionController;
//# sourceMappingURL=nutrition.controller.js.map