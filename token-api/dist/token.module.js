"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const mongoose_1 = require("@nestjs/mongoose");
const token_controller_1 = require("./token.controller");
const token_service_1 = require("./services/token.service");
const jwt_config_service_1 = require("./services/config/jwt-config.service");
const mongo_config_service_1 = require("./services/config/mongo-config.service");
const token_schema_1 = require("./schemas/token.schema");
const config_service_1 = require("./services/config/config.service");
let TokenModule = class TokenModule {
};
TokenModule = __decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.registerAsync({
                useClass: jwt_config_service_1.JwtConfigService,
            }),
            mongoose_1.MongooseModule.forRootAsync({
                useClass: mongo_config_service_1.MongoConfigService,
            }),
            mongoose_1.MongooseModule.forFeature([
                {
                    name: 'Token',
                    schema: token_schema_1.TokenSchema,
                    collection: 'tokens',
                },
            ]),
        ],
        controllers: [token_controller_1.TokenController],
        providers: [token_service_1.TokenService, config_service_1.ConfigService],
    })
], TokenModule);
exports.TokenModule = TokenModule;
//# sourceMappingURL=token.module.js.map