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
exports.MailerController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const mailer_1 = require("@nestjs-modules/mailer");
const config_service_1 = require("./services/config/config.service");
let MailerController = class MailerController {
    constructor(mailerService, configService) {
        this.mailerService = mailerService;
        this.configService = configService;
    }
    mailSend(data) {
        if (!this.configService.get('emailsDisabled')) {
            this.mailerService.sendMail(data);
        }
        return {
            status: common_1.HttpStatus.ACCEPTED,
            message: 'mail_send_success',
        };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)('mail_send'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], MailerController.prototype, "mailSend", null);
MailerController = __decorate([
    (0, common_1.Controller)('mailer'),
    __metadata("design:paramtypes", [mailer_1.MailerService,
        config_service_1.ConfigService])
], MailerController);
exports.MailerController = MailerController;
//# sourceMappingURL=mailer.controller.js.map