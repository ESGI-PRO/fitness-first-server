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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionGuard = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const core_1 = require("@nestjs/core");
const microservices_1 = require("@nestjs/microservices");
let PermissionGuard = class PermissionGuard {
    constructor(reflector, permissionServiceClient) {
        this.reflector = reflector;
        this.permissionServiceClient = permissionServiceClient;
    }
    async canActivate(context) {
        const permission = this.reflector.get('permission', context.getHandler());
        if (!permission) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const permissionInfo = await (0, rxjs_1.firstValueFrom)(this.permissionServiceClient.send('permission_check', {
            permission,
            user: request.user,
        }));
        if (!permissionInfo || permissionInfo.status !== common_1.HttpStatus.OK) {
            throw new common_1.HttpException({
                message: permissionInfo.message,
                data: null,
                errors: null,
            }, permissionInfo.status);
        }
        return true;
    }
};
PermissionGuard = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)('PERMISSION_SERVICE')),
    __metadata("design:paramtypes", [core_1.Reflector,
        microservices_1.ClientProxy])
], PermissionGuard);
exports.PermissionGuard = PermissionGuard;
//# sourceMappingURL=permission.guard.js.map