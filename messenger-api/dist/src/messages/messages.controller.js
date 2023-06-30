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
exports.MessagesController = void 0;
const common_1 = require("@nestjs/common");
const messages_service_1 = require("./messages.service");
const create_message_dto_1 = require("./dto/create-message.dto");
const microservices_1 = require("@nestjs/microservices");
let MessagesController = class MessagesController {
    constructor(messagesService) {
        this.messagesService = messagesService;
    }
    async createMessage(createMessageDto) {
        let result;
        if (createMessageDto) {
            const message = await this.messagesService.createMessage(createMessageDto);
            if (message) {
                result = {
                    status: common_1.HttpStatus.CREATED,
                    message: 'message_create_success',
                    data: {
                        message: message,
                    },
                    errors: null,
                };
            }
        }
        else {
            result = {
                status: common_1.HttpStatus.BAD_REQUEST,
                message: 'message_create_bad_request',
                data: {
                    message: null,
                },
                errors: null,
            };
        }
        return result;
    }
    async getAllMessagesByRoomId(data) {
        const { roomId } = data;
        let result;
        if (roomId) {
            const messages = await this.messagesService.findAllMessages(roomId);
            if (messages) {
                result = {
                    status: common_1.HttpStatus.OK,
                    message: 'get_messages_success',
                    data: {
                        messages: messages,
                    },
                    errors: null,
                };
            }
            else {
                result = {
                    status: common_1.HttpStatus.NOT_FOUND,
                    message: 'messages_get_by_id_not_found',
                    data: {
                        messages: null,
                    },
                    errors: null,
                };
            }
        }
        else {
            result = {
                status: common_1.HttpStatus.BAD_REQUEST,
                message: 'messges_get_bad_request',
                data: {
                    messages: null,
                },
                errors: null,
            };
        }
        return result;
    }
};
__decorate([
    (0, microservices_1.MessagePattern)('create-message'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_message_dto_1.CreateMessageDto]),
    __metadata("design:returntype", Promise)
], MessagesController.prototype, "createMessage", null);
__decorate([
    (0, microservices_1.MessagePattern)('get-room-messages'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MessagesController.prototype, "getAllMessagesByRoomId", null);
MessagesController = __decorate([
    (0, common_1.Controller)('messages'),
    __metadata("design:paramtypes", [messages_service_1.MessagesService])
], MessagesController);
exports.MessagesController = MessagesController;
//# sourceMappingURL=messages.controller.js.map