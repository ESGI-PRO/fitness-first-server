"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigService = void 0;
const microservices_1 = require("@nestjs/microservices");
class ConfigService {
    constructor() {
        this.envConfig = null;
        this.envConfig = {};
        this.envConfig.port = process.env.API_GATEWAY_PORT;
        this.envConfig.tokenService = {
            options: {
                port: process.env.TOKEN_SERVICE_PORT,
                host: process.env.TOKEN_SERVICE_HOST,
            },
            transport: microservices_1.Transport.TCP,
        };
        this.envConfig.userService = {
            options: {
                port: process.env.USER_SERVICE_PORT,
                host: process.env.USER_SERVICE_HOST,
            },
            transport: microservices_1.Transport.TCP,
        };
        this.envConfig.permissionService = {
            options: {
                port: process.env.PERMISSION_SERVICE_PORT,
                host: process.env.PERMISSION_SERVICE_HOST,
            },
            transport: microservices_1.Transport.TCP,
        };
        this.envConfig.analyticService = {
            options: {
                port: process.env.ANALYTIC_SERVICE_PORT,
                host: process.env.ANALYTIC_SERVICE_HOST,
            },
            transport: microservices_1.Transport.TCP,
        };
        this.envConfig.nutritionService = {
            options: {
                port: process.env.NUTRITION_SERVICE_PORT,
                host: process.env.NUTRITION_SERVICE_HOST,
            },
            transport: microservices_1.Transport.TCP,
        };
        this.envConfig.trainingService = {
            options: {
                port: process.env.TRAINING_SERVICE_PORT,
                host: process.env.TRAINING_SERVICE_HOST,
            },
            transport: microservices_1.Transport.TCP,
        };
        this.envConfig.subscriptionService = {
            options: {
                port: process.env.SUBSCRIPTION_SERVICE_PORT,
                host: process.env.SUBSCRIPTION_SERVICE_HOST,
            },
            transport: microservices_1.Transport.TCP,
        };
        this.envConfig.mailerService = {
            options: {
                port: process.env.MAILER_SERVICE_PORT,
                host: process.env.MAILER_SERVICE_HOST,
            },
            transport: microservices_1.Transport.TCP,
        };
        this.envConfig.messengerService = {
            options: {
                port: process.env.MESSENGER_SERVICE_PORT,
                host: process.env.MESSENGER_SERVICE_HOST,
            },
        };
    }
    get(key) {
        return this.envConfig[key];
    }
}
exports.ConfigService = ConfigService;
//# sourceMappingURL=config.service.js.map