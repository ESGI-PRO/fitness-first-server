"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExercisesModule = void 0;
const common_1 = require("@nestjs/common");
const exercises_service_1 = require("./exercises.service");
const exercises_controller_1 = require("./exercises.controller");
const mongoose_1 = require("@nestjs/mongoose");
<<<<<<< HEAD
const exercise_schema_1 = require("src/_schemas/exercise.schema");
=======
const exercise_schema_1 = require("../_schemas/exercise.schema");
>>>>>>> b776f9860 (modification get ingredients for web)
const exercises_repository_1 = require("./exercises.repository");
const config_service_1 = require("../services/config/config.service");
const microservices_1 = require("@nestjs/microservices");
let ExercisesModule = class ExercisesModule {
};
ExercisesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: exercise_schema_1.Exercise.name, schema: exercise_schema_1.ExerciseSchema }]),
        ],
        controllers: [exercises_controller_1.ExercisesController],
        providers: [exercises_service_1.ExercisesService, exercises_repository_1.ExercisesRepository, config_service_1.ConfigService,
            {
                provide: 'USER_SERVICE',
                useFactory: (configService) => {
                    const userServiceOptions = configService.get('userService');
                    return microservices_1.ClientProxyFactory.create(userServiceOptions);
                },
                inject: [config_service_1.ConfigService],
            }],
        exports: [exercises_service_1.ExercisesService],
    })
], ExercisesModule);
exports.ExercisesModule = ExercisesModule;
//# sourceMappingURL=exercises.module.js.map