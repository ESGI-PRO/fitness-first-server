"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const exercices_controller_1 = require("./exercices/exercices.controller");
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const training_module_1 = require("./training/training.module");
const exercices_service_1 = require("./exercices/exercices.service");
const exercices_module_1 = require("./exercices/exercices.module");
const exercices_on_training_service_1 = require("./exercices-on-training/exercices-on-training.service");
const exercices_on_training_module_1 = require("./exercices-on-training/exercices-on-training.module");
const exercices_on_training_controller_1 = require("./exercices-on-training/exercices-on-training.controller");
const training_controller_1 = require("./training/training.controller");
const config_service_1 = require("./services/config/config.service");
const training_service_1 = require("./training/training.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [training_module_1.TrainingModule, exercices_module_1.ExercicesModule, exercices_on_training_module_1.ExercicesOnTrainingModule],
        controllers: [app_controller_1.AppController, exercices_on_training_controller_1.ExercicesOnTrainingController, exercices_controller_1.ExercicesController, training_controller_1.TrainingController],
        providers: [config_service_1.ConfigService, app_service_1.AppService, exercices_service_1.ExercicesService, exercices_on_training_service_1.ExercicesOnTrainingService, training_service_1.TrainingService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map