"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesModule = void 0;
const common_1 = require("@nestjs/common");
const messages_service_1 = require("./messages.service");
const messages_controller_1 = require("./messages.controller");
const mongoose_1 = require("@nestjs/mongoose");
const message_schema_1 = require("../_schemas/message.schema");
const messages_repository_1 = require("./messages.repository");
const config_service_1 = require("../services/config/config.service");
const microservices_1 = require("@nestjs/microservices");
let MessagesModule = class MessagesModule {
};
MessagesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: message_schema_1.Message.name, schema: message_schema_1.MessageSchema }]),
        ],
        controllers: [messages_controller_1.MessagesController],
        providers: [messages_service_1.MessagesService, messages_repository_1.MessagesRepository, config_service_1.ConfigService,
            {
                provide: 'USER_SERVICE',
                useFactory: (configService) => {
                    const userServiceOptions = configService.get('userService');
                    return microservices_1.ClientProxyFactory.create(userServiceOptions);
                },
                inject: [config_service_1.ConfigService],
            }],
        exports: [messages_service_1.MessagesService],
    })
], MessagesModule);
exports.MessagesModule = MessagesModule;
//# sourceMappingURL=messages.module.js.map