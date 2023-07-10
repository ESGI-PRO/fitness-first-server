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
var TokenController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const token_service_1 = require("./services/token.service");
const token_types_1 = require("./services/config/token.types");
let TokenController = TokenController_1 = class TokenController {
    constructor(tokenService) {
        this.tokenService = tokenService;
        this.logger = new common_1.Logger(TokenController_1.name);
    }
    async createToken(data) {
        let result;
        this.logger.log('createToken', data);
        if (data && data.userId) {
            try {
                const createResult = await this.tokenService.createToken(data.userId);
                this.logger.log('createResult', data.userId, createResult);
                result = {
                    status: common_1.HttpStatus.CREATED,
                    message: 'token_create_success',
                    token: createResult,
                };
            }
            catch (e) {
                this.logger.error(e.message, e);
                result = {
                    status: common_1.HttpStatus.BAD_REQUEST,
                    message: 'token_create_bad_request',
                    token: null,
                };
            }
        }
        else {
            this.logger.log('BAD_REQUEST', data);
            result = {
                status: common_1.HttpStatus.BAD_REQUEST,
                message: 'token_create_bad_request',
                token: null,
            };
        }
        return result;
    }
    async destroyToken(data) {
        return {
            status: data && data.userId ? common_1.HttpStatus.OK : common_1.HttpStatus.BAD_REQUEST,
            message: data && data.userId
                ? (await this.tokenService.deleteTokenForUserId(data.userId)) &&
                    'token_destroy_success'
                : 'token_destroy_bad_request',
            errors: null,
        };
    }
    async decodeToken(data) {
        const tokenData = await this.tokenService.decodeToken(data.token);
        return {
            status: tokenData ? common_1.HttpStatus.OK : common_1.HttpStatus.UNAUTHORIZED,
            message: tokenData ? 'token_decode_success' : 'token_decode_unauthorized',
            data: tokenData,
        };
    }
    async verifyToken(data) {
        const { token, type = token_types_1.tokenTypes.REFRESH } = data;
        const tokenData = await this.tokenService.verifyToken(token, type);
        return {
            status: tokenData ? common_1.HttpStatus.OK : common_1.HttpStatus.UNAUTHORIZED,
            message: tokenData ? 'token_verify_success' : 'token_verify_unauthorized',
            data: tokenData,
        };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)('token_create'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TokenController.prototype, "createToken", null);
__decorate([
    (0, microservices_1.MessagePattern)('token_destroy'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TokenController.prototype, "destroyToken", null);
__decorate([
    (0, microservices_1.MessagePattern)('token_decode'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TokenController.prototype, "decodeToken", null);
__decorate([
    (0, microservices_1.MessagePattern)('token_verify'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TokenController.prototype, "verifyToken", null);
TokenController = TokenController_1 = __decorate([
    (0, common_1.Controller)('token'),
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [token_service_1.TokenService])
], TokenController);
exports.TokenController = TokenController;
//# sourceMappingURL=token.controller.js.map