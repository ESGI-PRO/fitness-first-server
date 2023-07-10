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
exports.TokenService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const config_service_1 = require("./config/config.service");
const moment = require("moment");
const token_types_1 = require("./config/token.types");
let TokenService = class TokenService {
    constructor(jwtService, tokenModel, configService) {
        this.jwtService = jwtService;
        this.tokenModel = tokenModel;
        this.configService = configService;
    }
    generateToken(userId, expires, type) {
        const payload = {
            sub: userId,
            iat: moment().unix(),
            exp: expires,
            type,
        };
        return this.jwtService.sign(payload);
    }
    ;
    async createToken(userId) {
        const jwtServiceOptions = this.configService.get('jwt');
        const accessTokenExpires = moment().add(jwtServiceOptions.accessExpirationMinutes, 'minutes').unix();
        const refreshTokenExpires = moment().add(jwtServiceOptions.refreshExpirationDays, 'days').unix();
        const accessToken = this.generateToken(userId, accessTokenExpires, token_types_1.tokenTypes.ACCESS);
        const refreshToken = this.generateToken(userId, refreshTokenExpires, token_types_1.tokenTypes.REFRESH);
        const access = await new this.tokenModel({
            user_id: userId,
            token: accessToken,
            type: token_types_1.tokenTypes.ACCESS
        }).save();
        const refresh = await new this.tokenModel({
            user_id: userId,
            token: refreshToken,
            type: token_types_1.tokenTypes.REFRESH
        }).save();
        console.log('access-refresh', access, refresh);
        return {
            access: {
                token: accessToken,
                exp: accessTokenExpires
            },
            refresh: {
                token: refreshToken,
                exp: refreshTokenExpires
            }
        };
    }
    deleteTokenForUserId(userId) {
        return this.tokenModel.findOneAndDelete({
            user_id: userId,
        });
    }
    async decodeToken(token) {
        const tokenModel = await this.tokenModel.find({
            token,
        });
        console.log("tokenModel", tokenModel, 'token', token);
        let result = null;
        if (tokenModel && tokenModel[0]) {
            try {
                const tokenData = this.jwtService.decode(tokenModel[0].token);
                if (!tokenData || tokenData.exp <= Math.floor(+new Date() / 1000)) {
                    result = null;
                }
                else {
                    result = {
                        userId: tokenData.sub,
                        type: tokenData.type
                    };
                }
                console.log("tokenData", tokenData);
            }
            catch (e) {
                result = null;
            }
        }
        return result;
    }
    async verifyToken(token, type) {
        const payload = this.jwtService.verify(token);
        const tokenDoc = await this.tokenModel.findOne({ token, type, user_id: payload.sub });
        if (!tokenDoc) {
            throw new Error('Token not found');
        }
        return {
            userId: payload.sub
        };
    }
    ;
};
TokenService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, mongoose_1.InjectModel)('Token')),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        mongoose_2.Model,
        config_service_1.ConfigService])
], TokenService);
exports.TokenService = TokenService;
//# sourceMappingURL=token.service.js.map