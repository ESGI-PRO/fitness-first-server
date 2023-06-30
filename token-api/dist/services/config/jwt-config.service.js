"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtConfigService = void 0;
class JwtConfigService {
    createJwtOptions() {
        return {
            secret: process.env.JWT_SECRET,
        };
    }
}
exports.JwtConfigService = JwtConfigService;
//# sourceMappingURL=jwt-config.service.js.map