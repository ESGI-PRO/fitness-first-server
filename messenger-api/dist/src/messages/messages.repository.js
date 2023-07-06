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
exports.MessagesRepository = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const rxjs_1 = require("rxjs");
let MessagesRepository = class MessagesRepository {
    constructor(messageModel, userServiceClient) {
        this.messageModel = messageModel;
        this.userServiceClient = userServiceClient;
    }
    async createMessage(message) {
        const createOne = await this.messageModel.create(message);
        return createOne;
    }
    async findAllMessages(id) {
        const findAll = await this.messageModel.find({ room_id: { $all: [id] } });
        const messages = await Promise.all(findAll.map(async (message) => {
            const response = await (0, rxjs_1.firstValueFrom)(this.userServiceClient
                .send('user_get_by_id', message.sender_id));
            const sender_id = response.user;
            return Object.assign(Object.assign({}, message.toObject()), { sender_id });
        }));
        return messages;
    }
};
MessagesRepository = __decorate([
    __param(0, (0, mongoose_1.InjectModel)('Message')),
    __param(1, (0, common_1.Inject)('USER_SERVICE')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        microservices_1.ClientProxy])
], MessagesRepository);
exports.MessagesRepository = MessagesRepository;
//# sourceMappingURL=messages.repository.js.map