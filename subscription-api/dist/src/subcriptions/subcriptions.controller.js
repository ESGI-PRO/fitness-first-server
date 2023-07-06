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
exports.SubcriptionsController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const subcriptions_service_1 = require("./subcriptions.service");
const create_subcription_dto_1 = require("./dto/create-subcription.dto");
const update_subcription_dto_1 = require("./dto/update-subcription.dto");
let SubcriptionsController = class SubcriptionsController {
    constructor(subcriptionsService) {
        this.subcriptionsService = subcriptionsService;
    }
    create(createSubcriptionDto) {
        return this.subcriptionsService.create(createSubcriptionDto);
    }
    findAll() {
        return this.subcriptionsService.findAll();
    }
    async findByUserId(id) {
        const subcriptions = await this.subcriptionsService.findByUserId(id);
        if (subcriptions) {
            return {
                status: common_1.HttpStatus.OK,
                message: "get_user_subscription_success",
                subscriptions: subcriptions
            };
        }
        else {
            return {
                status: common_1.HttpStatus.NOT_FOUND,
                message: 'get_user_id_not_found',
                subscriptions: null
            };
        }
    }
    findOne(id) {
        return this.subcriptionsService.findOne(id);
    }
    update(updateSubcriptionDto) {
        return this.subcriptionsService.update(updateSubcriptionDto.id, updateSubcriptionDto);
    }
    remove(id) {
        return this.subcriptionsService.remove(id);
    }
};
__decorate([
    (0, microservices_1.MessagePattern)('create_subscription'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_subcription_dto_1.CreateSubcriptionDto]),
    __metadata("design:returntype", void 0)
], SubcriptionsController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)('find_all_subscriptions'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SubcriptionsController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.MessagePattern)('find_user_subscriptions'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SubcriptionsController.prototype, "findByUserId", null);
__decorate([
    (0, microservices_1.MessagePattern)('find_one_subscription'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SubcriptionsController.prototype, "findOne", null);
__decorate([
    (0, microservices_1.MessagePattern)('update_subscription'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_subcription_dto_1.UpdateSubcriptionDto]),
    __metadata("design:returntype", void 0)
], SubcriptionsController.prototype, "update", null);
__decorate([
    (0, microservices_1.MessagePattern)('remove_subscription'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SubcriptionsController.prototype, "remove", null);
SubcriptionsController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [subcriptions_service_1.SubcriptionsService])
], SubcriptionsController);
exports.SubcriptionsController = SubcriptionsController;
//# sourceMappingURL=subcriptions.controller.js.map