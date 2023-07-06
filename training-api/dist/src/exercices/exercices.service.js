"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExercicesService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
let ExercicesService = class ExercicesService {
    async findAll() {
        console.log('get all exercices');
        return new Promise(async (resolve, reject) => {
            try {
                const exercices = await prisma.exercices.findMany({
                    include: {
                        muscle: true,
                        _count: true
                    }
                });
                resolve({ status: true, data: exercices });
            }
            catch (err) {
                reject({ status: false, error: err });
            }
        });
    }
    async findOne(id) {
        return new Promise(async (resolve, reject) => {
            try {
                const exercices = await prisma.exercices.findUnique({
                    where: { id: Number(id) },
                    include: {
                        muscle: true,
                        _count: true
                    }
                });
                resolve({ status: true, data: exercices });
            }
            catch (err) {
                reject({ status: false, error: err });
            }
        });
    }
    async findAllByCategory(id) {
        console.log('findAllByCategory', id);
        return new Promise(async (resolve, reject) => {
            try {
                const exercices = await prisma.exercices.findMany({
                    where: { TypeExercicesId: Number(id) },
                    include: {
                        muscle: true,
                        _count: true
                    },
                });
                resolve({ status: true, data: exercices });
            }
            catch (err) {
                reject({ status: false, error: err });
            }
        });
    }
    async create(data) {
        return new Promise(async (resolve, reject) => {
            try {
                const exercices = await prisma.exercices.create({ data });
                resolve({ status: true, data: exercices });
            }
            catch (err) {
                reject({ status: false, error: err });
            }
        });
    }
    async update(id, data) {
        return new Promise(async (resolve, reject) => {
            try {
                const exercices = await prisma.exercices.update({
                    where: { id: Number(id) },
                    data,
                });
                resolve({ status: true, data: exercices });
            }
            catch (err) {
                reject({ status: false, error: err });
            }
        });
    }
    async delete(id) {
        return new Promise(async (resolve, reject) => {
            try {
                const exercices = await prisma.exercices.delete({
                    where: { id: Number(id) },
                });
                resolve({ status: true, data: exercices });
            }
            catch (err) {
                reject({ status: false, error: err });
            }
        });
    }
    async getCategoriesExercices() {
        return new Promise(async (resolve, reject) => {
            try {
                const exercices = await prisma.typeExercices.findMany();
                resolve({ status: true, data: exercices });
            }
            catch (err) {
                console.error(err);
                reject({ status: false, error: err });
            }
        });
    }
    async getCategorieExercicesByID(id) {
        return new Promise(async (resolve, reject) => {
            try {
                const exercices = await prisma.typeExercices.findMany({
                    where: { id: Number(id) },
                });
                resolve({ status: true, data: exercices });
            }
            catch (err) {
                reject({ status: false, error: err });
            }
        });
    }
};
ExercicesService = __decorate([
    (0, common_1.Injectable)()
], ExercicesService);
exports.ExercicesService = ExercicesService;
//# sourceMappingURL=exercices.service.js.map