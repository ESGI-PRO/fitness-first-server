"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoMeetingModule = void 0;
const common_1 = require("@nestjs/common");
const video_meeting_service_1 = require("./video-meeting.service");
const video_meeting_controller_1 = require("./video-meeting.controller");
const video_meeting_repository_1 = require("./video-meeting.repository");
const config_service_1 = require("../services/config/config.service");
const microservices_1 = require("@nestjs/microservices");
const mongoose_1 = require("@nestjs/mongoose");
const meeting_schema_1 = require("../_schemas/meeting.schema");
let VideoMeetingModule = class VideoMeetingModule {
};
VideoMeetingModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: meeting_schema_1.Meeting.name, schema: meeting_schema_1.MeetingSchema }]),
        ],
        controllers: [video_meeting_controller_1.VideoMeetingController],
        providers: [video_meeting_service_1.VideoMeetingService, video_meeting_repository_1.VideoMeetingRepository,
            config_service_1.ConfigService,
            {
                provide: 'USER_SERVICE',
                useFactory: (configService) => {
                    const userServiceOptions = configService.get('userService');
                    return microservices_1.ClientProxyFactory.create(userServiceOptions);
                },
                inject: [config_service_1.ConfigService]
            }
        ]
    })
], VideoMeetingModule);
exports.VideoMeetingModule = VideoMeetingModule;
//# sourceMappingURL=video-meeting.module.js.map