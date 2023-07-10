"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfirmedStrategyService = void 0;
const permissions_1 = require("../constants/permissions");
class ConfirmedStrategyService {
    getAllowedPermissions(user) {
        return user.isAdmin
            ? permissions_1.adminPermissions
            : permissions_1.userPermissions;
    }
}
exports.ConfirmedStrategyService = ConfirmedStrategyService;
//# sourceMappingURL=confirmed-strategy.service.js.map