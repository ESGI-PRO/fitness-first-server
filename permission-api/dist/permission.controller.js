"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const confirmed_strategy_service_1 = require("./services/confirmed-strategy.service");
const permissions_1 = require("./constants/permissions");
let PermissionController = class PermissionController {
    constructor(confirmedStrategy) {
        this.confirmedStrategy = confirmedStrategy;
    }
    permissionCheck(permissionParams) {
        let result;
        if (!permissionParams || !permissionParams.user) {
            result = {
                status: common_1.HttpStatus.BAD_REQUEST,
                message: 'permission_check_bad_request',
                errors: null,
            };
        }
        else {
            const allowedPermissions = this.confirmedStrategy.getAllowedPermissions(permissionParams.user, permissions_1.permissions);
            const isAllowed = allowedPermissions.includes(permissionParams.permission);
            result = {
                status: isAllowed ? common_1.HttpStatus.OK : common_1.HttpStatus.FORBIDDEN,
                message: isAllowed
                    ? 'permission_check_success'
                    : 'permission_check_forbidden',
                errors: null,
            };
        }
        return result;
    }
};
__decorate([
    (0, microservices_1.MessagePattern)('permission_check'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], PermissionController.prototype, "permissionCheck", null);
PermissionController = __decorate([
    (0, common_1.Controller)('permission'),
    __metadata("design:paramtypes", [confirmed_strategy_service_1.ConfirmedStrategyService])
], PermissionController);
exports.PermissionController = PermissionController;
//# sourceMappingURL=permission.controller.js.map