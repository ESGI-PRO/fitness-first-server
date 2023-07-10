"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigService = void 0;
class ConfigService {
    constructor() {
        this.envConfig = null;
        this.envConfig = {
            port: process.env.PERMISSION_SERVICE_PORT,
        };
    }
    get(key) {
        return this.envConfig[key];
    }
}
exports.ConfigService = ConfigService;
//# sourceMappingURL=config.service.js.map