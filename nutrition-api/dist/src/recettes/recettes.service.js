"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecettesService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
let RecettesService = class RecettesService {
    async getRecettes() {
        return new Promise(async (resolve, reject) => {
            const recettes = await prisma.recettes.findMany();
            resolve(recettes);
        });
    }
    async getRecetteByID(id) {
        console.log("id", id);
        return new Promise(async (resolve, reject) => {
            const recettes = await prisma.recettes.findUnique({
                where: {
                    id: Number(id),
                },
            });
            resolve(recettes);
        });
    }
    async updateRecette(data) {
        console.log("UPDATEEEE ", data);
        return new Promise(async (resolve, reject) => {
            const recettes = await prisma.recettes.update({
                where: {
                    id: Number(data.id),
                },
                data
            });
            resolve(recettes);
        });
    }
    async createRecette(data) {
        console.log("data========");
        console.log(data);
        return new Promise(async (resolve, reject) => {
            const recettes = await prisma.recettes.create({ data: Object.assign({}, data) });
            resolve(recettes);
        });
    }
    async getRecetteForUserByID(userId) {
        console.log("userId", userId);
        return new Promise(async (resolve, reject) => {
            const recettes = await prisma.recettes.findMany({
                where: {
                    UserId: String(userId),
                },
                orderBy: {
                    id: "desc"
                }
            });
            resolve(recettes);
        });
    }
    async deleteRecette(id) {
        return prisma.recettes.delete({
            where: { id: id },
        });
    }
};
RecettesService = __decorate([
    (0, common_1.Injectable)()
], RecettesService);
exports.RecettesService = RecettesService;
//# sourceMappingURL=recettes.service.js.map