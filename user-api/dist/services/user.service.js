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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const config_service_1 = require("./config/config.service");
let UserService = class UserService {
    constructor(userModel, userLinkModel, configService) {
        this.userModel = userModel;
        this.userLinkModel = userLinkModel;
        this.configService = configService;
    }
    async searchUser(params) {
        return this.userModel.find(params).exec();
    }
    async searchUserById(id) {
        return this.userModel.findById(id).exec();
    }
    async updateUserById(id, userParams) {
        return this.userModel.updateOne({ _id: id }, userParams).exec();
    }
    async createUser(user) {
        const userModel = new this.userModel(user);
        return await userModel.save();
    }
    async createUserLink(id) {
        const userLinkModel = new this.userLinkModel({
            user_id: id,
        });
        return await userLinkModel.save();
    }
    async getUserLink(link) {
        return this.userLinkModel.find({ link, is_used: false }).exec();
    }
    async updateUserLinkById(id, linkParams) {
        return this.userLinkModel.updateOne({ _id: id }, linkParams);
    }
    getConfirmationLink(link) {
        return `${this.configService.get('baseUri')}:${this.configService.get('gatewayPort')}/users/confirm/${link}`;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('User')),
    __param(1, (0, mongoose_1.InjectModel)('UserLink')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        config_service_1.ConfigService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map