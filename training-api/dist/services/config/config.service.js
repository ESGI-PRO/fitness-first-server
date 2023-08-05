"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigService = void 0;
const microservices_1 = require("@nestjs/microservices");
class ConfigService {
    constructor() {
        this.envConfig = null;
        this.envConfig = {
            port: process.env.TRAINING_SERVICE_PORT,
        };
        this.envConfig.baseUri = process.env.BASE_URI;
        this.envConfig.gatewayPort = process.env.API_GATEWAY_PORT;
        this.envConfig.userService = {
            options: {
                port: process.env.USER_SERVICE_PORT,
                host: process.env.USER_SERVICE_HOST,
            },
            transport: microservices_1.Transport.TCP,
        };
    }
    get(key) {
        return this.envConfig[key];
    }
}
exports.ConfigService = ConfigService;
//# sourceMappingURL=config.service.js.map