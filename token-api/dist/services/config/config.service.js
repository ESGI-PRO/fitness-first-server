"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigService = void 0;
class ConfigService {
    constructor() {
        this.envConfig = null;
        this.envConfig = {
            port: process.env.TOKEN_SERVICE_PORT,
            jwt: {
                secret: process.env.JWT_SECRET,
                accessExpirationMinutes: process.env.JWT_ACCESS_EXPIRATION_MINUTES,
                refreshExpirationDays: process.env.JWT_REFRESH_EXPIRATION_DAYS,
                resetPasswordExpirationMinutes: process.env.JWT_RESET_PASSWORD_EXPIRATION_MINUTES,
                verifyEmailExpirationMinutes: process.env.JWT_VERIFY_EMAIL_EXPIRATION_MINUTES,
            }
        };
    }
    get(key) {
        return this.envConfig[key];
    }
}
exports.ConfigService = ConfigService;
//# sourceMappingURL=config.service.js.map