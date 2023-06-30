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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomsController = void 0;
const common_1 = require("@nestjs/common");
const rooms_service_1 = require("./rooms.service");
const create_room_dto_1 = require("./dto/create-room.dto");
const microservices_1 = require("@nestjs/microservices");
let RoomsController = class RoomsController {
    constructor(roomsService) {
        this.roomsService = roomsService;
    }
    async createRoom(createRoomDto) {
        let result;
        if (createRoomDto) {
            try {
                const room = await this.roomsService.createRoom(createRoomDto);
                result = {
                    status: common_1.HttpStatus.CREATED,
                    message: 'room_create_success',
                    data: {
                        room: room,
                    },
                    errors: null,
                };
            }
            catch (e) {
                result = {
                    status: common_1.HttpStatus.PRECONDITION_FAILED,
                    message: 'room_create_precondition_failed',
                    data: {
                        room: null,
                    },
                    errors: e.errors,
                };
            }
        }
        else {
            result = {
                status: common_1.HttpStatus.BAD_REQUEST,
                message: 'room_create_bad_request',
                data: {
                    room: null,
                },
                errors: null,
            };
        }
        return result;
    }
    async getAllRoomsByUserId(data) {
        const { userId } = data;
        let result;
        if (userId) {
            const rooms = await this.roomsService.findAllRooms(userId);
            if (rooms) {
                result = {
                    status: common_1.HttpStatus.OK,
                    message: 'get_rooms_success',
                    data: {
                        rooms: rooms,
                    },
                    errors: null,
                };
            }
            else {
                result = {
                    status: common_1.HttpStatus.NOT_FOUND,
                    message: 'rooms_get_by_id_not_found',
                    data: {
                        rooms: null,
                    },
                    errors: null,
                };
            }
        }
        else {
            result = {
                status: common_1.HttpStatus.BAD_REQUEST,
                message: 'room_create_bad_request',
                data: {
                    rooms: null,
                },
                errors: null,
            };
        }
        return result;
    }
};
__decorate([
    (0, microservices_1.MessagePattern)('create-room'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_room_dto_1.CreateRoomDto]),
    __metadata("design:returntype", Promise)
], RoomsController.prototype, "createRoom", null);
__decorate([
    (0, microservices_1.MessagePattern)('get-all-rooms'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RoomsController.prototype, "getAllRoomsByUserId", null);
RoomsController = __decorate([
    (0, common_1.Controller)('rooms'),
    __metadata("design:paramtypes", [rooms_service_1.RoomsService])
], RoomsController);
exports.RoomsController = RoomsController;
//# sourceMappingURL=rooms.controller.js.map