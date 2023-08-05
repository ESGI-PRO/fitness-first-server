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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExercisesRepository = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ExercisesRepository = class ExercisesRepository {
    constructor(exerciseModel) {
        this.exerciseModel = exerciseModel;
    }
    async createExercises(exercises) {
        const createOne = await this.exerciseModel.insertMany(exercises);
        return createOne;
    }
    async findUserCurrentExercises({ user_id, trainer_id, }) {
        const exercises = await this.exerciseModel.find({ user_id, trainer_id });
        return exercises;
    }
};
ExercisesRepository = __decorate([
    __param(0, (0, mongoose_1.InjectModel)('Exercise')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], ExercisesRepository);
exports.ExercisesRepository = ExercisesRepository;
//# sourceMappingURL=exercises.repository.js.map