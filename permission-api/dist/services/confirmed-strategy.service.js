"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfirmedStrategyService = void 0;
class ConfirmedStrategyService {
    getAllowedPermissions(user, permissions) {
        const forbiddenPermissions = [];
        return user.is_confirmed
            ? permissions
            : permissions.filter((permission) => {
                return !forbiddenPermissions.includes(permission);
            });
    }
}
exports.ConfirmedStrategyService = ConfirmedStrategyService;
//# sourceMappingURL=confirmed-strategy.service.js.map