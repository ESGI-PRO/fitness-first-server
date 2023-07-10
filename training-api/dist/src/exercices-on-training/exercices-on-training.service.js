"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExercicesOnTrainingService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
let ExercicesOnTrainingService = class ExercicesOnTrainingService {
    async create(data) {
        return new Promise(async (resolve, reject) => {
            try {
                const exercicesOnTraining = await prisma.exercicesOnTraining.create({
                    data: Object.assign({}, data),
                });
                resolve({ status: true, data: exercicesOnTraining });
            }
            catch (error) {
                reject({ status: false, error });
                console.log('create exercicesOnTraining', error);
            }
        });
    }
    async findAll() {
        return new Promise(async (resolve, reject) => {
            try {
                const exercicesOnTraining = await prisma.exercicesOnTraining.findMany();
                resolve({ status: true, data: exercicesOnTraining });
            }
            catch (error) {
                reject({ status: false, error });
                console.log('findAll exercicesOnTraining', error);
            }
        });
    }
    async findOne(id) {
        return new Promise(async (resolve, reject) => {
            try {
                const exercicesOnTraining = await prisma.exercicesOnTraining.findUnique({
                    where: { id },
                });
                resolve({ status: true, data: exercicesOnTraining });
            }
            catch (error) {
                reject({ status: false, error });
                console.log('findOne Training', error);
            }
        });
    }
    async update(id, data) {
        return new Promise(async (resolve, reject) => {
            try {
                const updateTraining = await prisma.exercicesOnTraining.update({
                    where: { id },
                    data: Object.assign({}, data),
                });
                resolve({ status: true, data: updateTraining });
            }
            catch (error) {
                reject({ status: false, error });
                console.log('update Training', error);
            }
        });
    }
    async remove(id) {
        return new Promise(async (resolve, reject) => {
            try {
                const deleteTraining = await prisma.exercicesOnTraining.delete({
                    where: {
                        id,
                    },
                });
                resolve({ status: true, data: deleteTraining });
            }
            catch (error) {
                reject({ status: false, error });
                console.log('delete Training', error);
            }
        });
    }
};
ExercicesOnTrainingService = __decorate([
    (0, common_1.Injectable)()
], ExercicesOnTrainingService);
exports.ExercicesOnTrainingService = ExercicesOnTrainingService;
//# sourceMappingURL=exercices-on-training.service.js.map