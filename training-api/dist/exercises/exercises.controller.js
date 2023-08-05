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
exports.ExercisesController = void 0;
const common_1 = require("@nestjs/common");
const exercises_service_1 = require("./exercises.service");
const create_exercise_dto_1 = require("./dto/create-exercise.dto");
const microservices_1 = require("@nestjs/microservices");
let ExercisesController = class ExercisesController {
    constructor(exercisesService) {
        this.exercisesService = exercisesService;
    }
    async createExercises(createExerciseDto) {
        let result;
        if (createExerciseDto) {
            const exercises = await this.exercisesService.createExercises(createExerciseDto.exercises);
            if (exercises) {
                result = {
                    status: common_1.HttpStatus.CREATED,
                    message: 'exercises_create_success',
                    data: {
                        exercises: exercises,
                    },
                    errors: null,
                };
            }
        }
        else {
            result = {
                status: common_1.HttpStatus.BAD_REQUEST,
                message: 'exercises_create_bad_request',
                data: {
                    exercises: null,
                },
                errors: null,
            };
        }
        return result;
    }
    async getUserCurrentExercises(data) {
        let result;
        if (data) {
            const exercises = await this.exercisesService.findUserCurrentExercises(data);
            if (exercises) {
                result = {
                    status: common_1.HttpStatus.OK,
                    message: 'user_current_exercises_get_success',
                    data: {
                        exercises: exercises,
                    },
                    errors: null,
                };
            }
            else {
                result = {
                    status: common_1.HttpStatus.NOT_FOUND,
                    message: 'user_current_exercises_get_not_found',
                    data: {
                        exercises: null,
                    },
                    errors: null,
                };
            }
        }
        else {
            result = {
                status: common_1.HttpStatus.BAD_REQUEST,
                message: 'user_current_exercises_get_bad_request',
                data: {
                    exercises: null,
                },
                errors: null,
            };
        }
        return result;
    }
    async getAllExercises() {
        let result;
        const exercises = await this.exercisesService.findAllExercises();
        if (exercises) {
            result = {
                status: common_1.HttpStatus.OK,
                message: 'all_exercises_get_success',
                data: {
                    exercises: exercises,
                },
                errors: null,
            };
        }
        else {
            result = {
                status: common_1.HttpStatus.NOT_FOUND,
                message: 'all_exercises_get_not_found',
                data: {
                    exercises: null,
                },
                errors: null,
            };
        }
        return result;
    }
};
__decorate([
    (0, microservices_1.MessagePattern)('create_exercises'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_exercise_dto_1.CreateExerciseDto]),
    __metadata("design:returntype", Promise)
], ExercisesController.prototype, "createExercises", null);
__decorate([
    (0, microservices_1.MessagePattern)('get_user_current_exercises'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExercisesController.prototype, "getUserCurrentExercises", null);
__decorate([
    (0, microservices_1.MessagePattern)('get_all_exercises'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ExercisesController.prototype, "getAllExercises", null);
ExercisesController = __decorate([
    (0, common_1.Controller)('exercises'),
    __metadata("design:paramtypes", [exercises_service_1.ExercisesService])
], ExercisesController);
exports.ExercisesController = ExercisesController;
//# sourceMappingURL=exercises.controller.js.map