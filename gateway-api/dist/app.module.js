"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const microservices_1 = require("@nestjs/microservices");
const users_controller_1 = require("./users.controller");
const training_controller_1 = require("./training.controller");
const nutrition_controller_1 = require("./nutrition.controller");
const analytic_controller_1 = require("./analytic.controller");
const messenger_gateway_1 = require("./messenger.gateway");
const authorization_guard_1 = require("./services/guards/authorization.guard");
const permission_guard_1 = require("./services/guards/permission.guard");
const config_service_1 = require("./services/config/config.service");
const subscription_controller_1 = require("./subscription.controller");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [users_controller_1.UsersController,
            training_controller_1.TrainingController,
            nutrition_controller_1.NutritionController,
            analytic_controller_1.AnalyticController,
            subscription_controller_1.SubscriptionController
        ],
        providers: [
            config_service_1.ConfigService,
            messenger_gateway_1.MessengerGateWay,
            {
                provide: 'TOKEN_SERVICE',
                useFactory: (configService) => {
                    const tokenServiceOptions = configService.get('tokenService');
                    return microservices_1.ClientProxyFactory.create(tokenServiceOptions);
                },
                inject: [config_service_1.ConfigService],
            },
            {
                provide: 'USER_SERVICE',
                useFactory: (configService) => {
                    const userServiceOptions = configService.get('userService');
                    return microservices_1.ClientProxyFactory.create(userServiceOptions);
                },
                inject: [config_service_1.ConfigService],
            },
            {
                provide: 'PERMISSION_SERVICE',
                useFactory: (configService) => {
                    return microservices_1.ClientProxyFactory.create(configService.get('permissionService'));
                },
                inject: [config_service_1.ConfigService],
            },
            {
                provide: 'TRAINING_SERVICE',
                useFactory: (configService) => {
                    return microservices_1.ClientProxyFactory.create(configService.get('trainingService'));
                },
                inject: [config_service_1.ConfigService],
            },
            {
                provide: 'NUTRITION_SERVICE',
                useFactory: (configService) => {
                    return microservices_1.ClientProxyFactory.create(configService.get('nutritionService'));
                },
                inject: [config_service_1.ConfigService],
            },
            {
                provide: 'ANALYTIC_SERVICE',
                useFactory: (configService) => {
                    return microservices_1.ClientProxyFactory.create(configService.get('analyticService'));
                },
                inject: [config_service_1.ConfigService],
            },
            {
                provide: 'SUBSCRIPTION_SERVICE',
                useFactory: (configService) => {
                    return microservices_1.ClientProxyFactory.create(configService.get('subscriptionService'));
                },
                inject: [config_service_1.ConfigService],
            },
            {
                provide: 'MESSENGER_SERVICE',
                useFactory: (configService) => {
                    return microservices_1.ClientProxyFactory.create(configService.get('messengerService'));
                },
                inject: [config_service_1.ConfigService],
            },
            {
                provide: core_1.APP_GUARD,
                useClass: authorization_guard_1.AuthGuard,
            },
            {
                provide: core_1.APP_GUARD,
                useClass: permission_guard_1.PermissionGuard,
            },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map