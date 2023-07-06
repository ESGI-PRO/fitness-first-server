"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrainingService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
let TrainingService = class TrainingService {
    async createTraining(data) {
        try {
            const training = await prisma.training.create({ data: Object.assign({}, data) });
            return training;
        }
        catch (error) {
            console.log('create Trainings', error);
        }
    }
    async findAllTrainings() {
        try {
            const trainings = await prisma.training.findMany({
                include: {
                    muscle: true,
                    trainingOnExercices: true,
                    _count: true,
                },
            });
            return trainings;
        }
        catch (error) {
            console.log('findAll Trainings', error);
        }
    }
    async findAllByID(userId) {
        try {
            const training = await prisma.training.findMany({
                where: {
                    userId: String(userId)
                },
                include: {
                    trainingOnExercices: true,
                    muscle: true
                }
            });
            return training;
        }
        catch (error) {
            console.log('findAllByID Training', error);
        }
    }
    async findOne(id) {
        try {
            const training = await prisma.training.findUnique({ where: { id } });
            return training;
        }
        catch (error) {
            console.log('findOne Training', error);
        }
    }
    async update(id, data) {
        try {
            const updateTraining = await prisma.training.update({
                where: { id },
                data: Object.assign({}, data),
            });
            return updateTraining;
        }
        catch (error) {
            console.log('update Training', error);
        }
    }
    async remove(id) {
        try {
            const deleteTraining = await prisma.training.delete({
                where: {
                    id,
                },
            });
            return deleteTraining;
        }
        catch (error) {
            console.log('delete Training', error);
        }
    }
};
TrainingService = __decorate([
    (0, common_1.Injectable)()
], TrainingService);
exports.TrainingService = TrainingService;
//# sourceMappingURL=training.service.js.map