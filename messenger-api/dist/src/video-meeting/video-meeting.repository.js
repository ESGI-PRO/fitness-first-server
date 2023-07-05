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
exports.VideoMeetingRepository = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const rxjs_1 = require("rxjs");
let VideoMeetingRepository = class VideoMeetingRepository {
    constructor(meetingModel, userServiceClient) {
        this.meetingModel = meetingModel;
        this.userServiceClient = userServiceClient;
    }
    async createMeeting(meeting) {
        const data = await this.meetingModel.create(meeting);
        return data;
    }
    async updateMeeting(id, meeting) {
        this.meetingModel.updateOne({ _id: id }, meeting).exec();
        return this.meetingModel.findById(id).exec();
    }
    async findAllMeetings(id) {
        const findAll = await this.meetingModel.find({ members: { $all: [id] } });
        const meetings = await Promise.all(findAll.map(async (Meeting) => {
            const members = await Promise.all(Meeting.members.map(async (member_id) => {
                const response = await (0, rxjs_1.firstValueFrom)(this.userServiceClient
                    .send('user_get_by_id', member_id.toString()));
                const user = response.user;
                return user;
            }));
            return Object.assign(Object.assign({}, Meeting.toObject()), { members });
        }));
        return meetings;
    }
};
VideoMeetingRepository = __decorate([
    __param(0, (0, mongoose_1.InjectModel)('Meeting')),
    __param(1, (0, common_1.Inject)('USER_SERVICE')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        microservices_1.ClientProxy])
], VideoMeetingRepository);
exports.VideoMeetingRepository = VideoMeetingRepository;
//# sourceMappingURL=video-meeting.repository.js.map