"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngredientsService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
let IngredientsService = class IngredientsService {
    async getIngredients() {
        return new Promise(async (resolve, reject) => {
            const ingredients = await prisma.ingredients.findMany({
                include: {
                    category: true
                },
                orderBy: {
                    name: "asc"
                }
            });
            resolve(ingredients);
        });
    }
    async getIngredientByID(id) {
        return new Promise(async (resolve, reject) => {
            const ingredients = await prisma.ingredients.findUnique({
                where: {
                    id: Number(id),
                },
            });
            resolve(ingredients);
        });
    }
    async createIngredient(data) {
        return new Promise(async (resolve, reject) => {
            console.log(data);
            const ingredients = await prisma.ingredients.create({ data });
            resolve(ingredients);
        });
    }
    async getIngredientForUserByID(userId) {
        return new Promise(async (resolve, reject) => {
            const ingredients = await prisma.ingredients.findUnique({
                where: {
                    id: Number(userId),
                },
            });
            resolve(ingredients);
        });
    }
    async updateIngredient(id, data) {
        return prisma.ingredients.update({
            where: { id: id },
            data: Object.assign({}, data),
        });
    }
    async deleteIngredient(id) {
        return prisma.ingredients.delete({
            where: { id: id },
        });
    }
};
IngredientsService = __decorate([
    (0, common_1.Injectable)()
], IngredientsService);
exports.IngredientsService = IngredientsService;
//# sourceMappingURL=ingredients.service.js.map