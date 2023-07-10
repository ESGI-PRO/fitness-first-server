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
exports.AuthGuard = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const core_1 = require("@nestjs/core");
const microservices_1 = require("@nestjs/microservices");
let AuthGuard = class AuthGuard {
    constructor(reflector, tokenServiceClient, userServiceClient) {
        this.reflector = reflector;
        this.tokenServiceClient = tokenServiceClient;
        this.userServiceClient = userServiceClient;
    }
    async canActivate(context) {
        const secured = this.reflector.get('secured', context.getHandler());
        if (!secured) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        if (!request.headers.authorization) {
            return false;
        }
        console.log("request.headers.authorization", request.headers.authorization);
        const userTokenInfo = await (0, rxjs_1.firstValueFrom)(this.tokenServiceClient.send('token_decode', {
            token: request.headers.authorization.replace('Bearer ', '')
        }));
        console.log("userTokenInfo", userTokenInfo);
        if (!userTokenInfo || !userTokenInfo.data) {
            throw new common_1.HttpException({
                message: userTokenInfo.message,
                data: null,
                errors: null,
            }, userTokenInfo.status);
        }
        const userInfo = await (0, rxjs_1.firstValueFrom)(this.userServiceClient.send('user_get_by_id', userTokenInfo.data.userId));
        request.user = userInfo.user;
        return true;
    }
};
AuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)('TOKEN_SERVICE')),
    __param(2, (0, common_1.Inject)('USER_SERVICE')),
    __metadata("design:paramtypes", [core_1.Reflector,
        microservices_1.ClientProxy,
        microservices_1.ClientProxy])
], AuthGuard);
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=authorization.guard.js.map