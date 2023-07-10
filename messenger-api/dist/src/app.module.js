"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const rooms_module_1 = require("./rooms/rooms.module");
const messages_module_1 = require("./messages/messages.module");
const config_service_1 = require("./services/config/config.service");
const mongo_config_service_1 = require("./services/config/mongo-config.service");
const room_schema_1 = require("./_schemas/room.schema");
const message_schema_1 = require("./_schemas/message.schema");
const meeting_schema_1 = require("./_schemas/meeting.schema");
const app_service_1 = require("./app.service");
const microservices_1 = require("@nestjs/microservices");
const video_meeting_module_1 = require("./video-meeting/video-meeting.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        controllers: [],
        imports: [
            config_1.ConfigModule.forRoot(),
            mongoose_1.MongooseModule.forRootAsync({
                useClass: mongo_config_service_1.MongoConfigService,
            }),
            mongoose_1.MongooseModule.forFeature([
                {
                    name: 'Room',
                    schema: room_schema_1.RoomSchema,
                    collection: 'rooms',
                },
                {
                    name: 'Message',
                    schema: message_schema_1.MessageSchema,
                    collection: 'messages',
                },
                {
                    name: 'Meeting',
                    schema: meeting_schema_1.MeetingSchema,
                    collection: 'meetings',
                }
            ]),
            rooms_module_1.RoomsModule,
            messages_module_1.MessagesModule,
            video_meeting_module_1.VideoMeetingModule
        ],
        providers: [
            config_service_1.ConfigService,
            app_service_1.AppService,
            {
                provide: 'USER_SERVICE',
                useFactory: (configService) => {
                    const userServiceOptions = configService.get('userService');
                    return microservices_1.ClientProxyFactory.create(userServiceOptions);
                },
                inject: [config_service_1.ConfigService],
            }
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map