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
const data = require("../mock/users.json");
let UserService = class UserService {
    constructor(userModel, userLinkModel, configService) {
        this.userModel = userModel;
        this.userLinkModel = userLinkModel;
        this.configService = configService;
    }
    onModuleInit() {
        const cleardb = () => {
            this.userModel.deleteMany({}).exec();
        };
        const seedAlgo = async () => {
            const users = await this.userModel.find({ isTrainer: false, trainerId: null }).exec();
            console.log('users', users);
            for (let i = 0; i < users.length; i++) {
                const user = users[i];
                const trainers = await this.userModel.find({ isTrainer: true }).exec();
                console.log('trainers', trainers);
                const randomTrainer = trainers[Math.floor(Math.random() * trainers.length)];
                console.log('randomTrainer', randomTrainer);
                user.trainerId = randomTrainer.id;
                await user.save();
            }
            const trainers = await this.userModel.find({ isTrainer: true }).exec();
            console.log('trainers', trainers);
            for (let i = 0; i < trainers.length; i++) {
                const trainer = trainers[i];
                const users = await this.userModel.find({ isTrainer: false }).exec();
                console.log('users', users);
                const randomUsers = users.filter((user) => user.trainerId == trainer.id);
                console.log('randomUsers', randomUsers, randomUsers.map((user) => user.id));
                trainer.traineeIds = randomUsers.map((user) => user.id);
                await trainer.save();
            }
        };
        this.userModel.countDocuments({}).then(async (count) => {
            if (count < 2) {
                await this.userModel.insertMany(data.users);
                await seedAlgo();
            }
            else {
                await seedAlgo();
            }
        }).catch((err) => {
            console.log(err);
        });
    }
    async searchUser(params) {
        return this.userModel.find(params).exec();
    }
    async searchUserById(id) {
        return this.userModel.findById(id).exec();
    }
    async updateUserById(id, userParams) {
        this.userModel.updateOne({ _id: id }, userParams).exec();
        return this.userModel.findById(id).exec();
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
        this.userLinkModel.updateOne({ _id: id }, linkParams);
        return this.userLinkModel.findById(id).exec();
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