"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const mongoose_1 = require("@nestjs/mongoose");
const user_controller_1 = require("./user.controller");
const user_service_1 = require("./services/user.service");
const mongo_config_service_1 = require("./services/config/mongo-config.service");
const config_service_1 = require("./services/config/config.service");
const user_schema_1 = require("./schemas/user.schema");
const user_link_schema_1 = require("./schemas/user-link.schema");
let UserModule = class UserModule {
};
UserModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRootAsync({
                useClass: mongo_config_service_1.MongoConfigService,
            }),
            mongoose_1.MongooseModule.forFeature([
                {
                    name: 'User',
                    schema: user_schema_1.UserSchema,
                    collection: 'users',
                },
                {
                    name: 'UserLink',
                    schema: user_link_schema_1.UserLinkSchema,
                    collection: 'user_links',
                },
            ]),
        ],
        controllers: [user_controller_1.UserController],
        providers: [
            user_service_1.UserService,
            config_service_1.ConfigService,
            {
                provide: 'SUBSCRIPTION_SERVICE',
                useFactory: (configService) => {
                    const subscriptionServiceOptions = configService.get('subscriptionService');
                    return microservices_1.ClientProxyFactory.create(subscriptionServiceOptions);
                },
                inject: [config_service_1.ConfigService],
            },
            {
                provide: 'MAILER_SERVICE',
                useFactory: (configService) => {
                    const mailerServiceOptions = configService.get('mailerService');
                    return microservices_1.ClientProxyFactory.create(mailerServiceOptions);
                },
                inject: [config_service_1.ConfigService],
            }
        ],
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map