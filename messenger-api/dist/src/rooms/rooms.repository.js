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
exports.RoomsRepository = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const rxjs_1 = require("rxjs");
let RoomsRepository = class RoomsRepository {
    constructor(roomModel, userServiceClient) {
        this.roomModel = roomModel;
        this.userServiceClient = userServiceClient;
    }
    async createRoom(room) {
        const res = await (0, rxjs_1.firstValueFrom)(this.userServiceClient
            .send('user_connect_to_trainer', {
            userId: room.sender_id,
            trainerId: room.members.filter((m) => m !== room.sender_id)[0]
        }));
        const createOne = await this.roomModel.create(room);
        return createOne;
    }
    async findAllRooms(id) {
        const findAll = await this.roomModel.find({ members: { $all: [id] } });
        const rooms = await Promise.all(findAll.map(async (room) => {
            const members = await Promise.all(room.members.map(async (member_id) => {
                const response = await (0, rxjs_1.firstValueFrom)(this.userServiceClient
                    .send('user_get_by_id', member_id));
                const user = response.user;
                return user;
            }));
            return Object.assign(Object.assign({}, room.toObject()), { members });
        }));
        return rooms;
    }
    async getRoomsByIds(ids) {
        const rooms = await this.roomModel.find({ members: { $all: ids } });
        return rooms;
    }
};
RoomsRepository = __decorate([
    __param(0, (0, mongoose_1.InjectModel)('Room')),
    __param(1, (0, common_1.Inject)('USER_SERVICE')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        microservices_1.ClientProxy])
], RoomsRepository);
exports.RoomsRepository = RoomsRepository;
//# sourceMappingURL=rooms.repository.js.map