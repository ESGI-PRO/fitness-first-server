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
const user_schema_1 = require("../schemas/user.schema");
const microservices_1 = require("@nestjs/microservices");
const faker_1 = require("@faker-js/faker");
const rxjs_1 = require("rxjs");
let UserService = class UserService {
    constructor(userModel, userLinkModel, subscriptionServiceClient, configService) {
        this.userModel = userModel;
        this.userLinkModel = userLinkModel;
        this.subscriptionServiceClient = subscriptionServiceClient;
        this.configService = configService;
    }
    onModuleInit() {
        const cleardb = () => {
            this.userModel.deleteMany({}).exec();
        };
        const subscriptionGenerate = async () => {
            const subscriptions = await (0, rxjs_1.firstValueFrom)(this.subscriptionServiceClient.send('find_all_subscriptions', {}));
            console.log('subscriptions-all', subscriptions);
            if ((subscriptions === null || subscriptions === void 0 ? void 0 : subscriptions.length) < 1) {
                const users = await this.userModel.find({}).exec();
                for (let i = 0; i < users.length; i++) {
                    const user = users[i];
                    const plans = await (0, rxjs_1.firstValueFrom)(this.subscriptionServiceClient.send('find_all_plans', {}));
                    console.log('plans', plans);
                    const activeList = [true, false];
                    const stripeId = faker_1.faker.string.uuid();
                    const subscription = await (0, rxjs_1.firstValueFrom)(this.subscriptionServiceClient.send('create_subscription', {
                        userId: user.id,
                        stripeId: stripeId,
                        planId: plans[Math.floor(Math.random() * plans.length)].id,
                        active: activeList[Math.floor(Math.random() * activeList.length)],
                        currentPeriodStart: faker_1.faker.date.past(),
                        currentPeriodEnd: faker_1.faker.date.future(),
                    }));
                    console.log("subscription", subscription);
                    const planAmountList = plans.reduce((acc, plan) => {
                        return [...acc, plan.price];
                    }, []);
                    const invoice = await (0, rxjs_1.firstValueFrom)(this.subscriptionServiceClient.send('create_invoice', {
                        userId: user.id,
                        stripeId: stripeId,
                        amountPaid: planAmountList[Math.floor(Math.random() * planAmountList.length)],
                        number: `${faker_1.faker.number.int({ max: 300 })}`,
                        hostedInvoiceUrl: faker_1.faker.internet.url(),
                        subscriptionId: subscription.id
                    }));
                    console.log("invoice", invoice);
                }
            }
        };
        const seedAlgo = async () => {
            const users = await this.userModel.find({ isTrainer: false, isAdmin: false, trainerId: null }).exec();
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
            const trainers = await this.userModel.find({ isTrainer: true, isAdmin: false }).exec();
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
                let userList = [];
                for (let i = 0; i < data.users.length; i++) {
                    const user = data.users[i];
                    user.password = await user_schema_1.UserSchema.methods.getEncryptedPassword(user.password);
                    userList = [...userList, user];
                }
                await this.userModel.insertMany(userList);
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
        const user = await this.userModel.findById(id).exec();
        const isAdmin = user.isAdmin ? user.isAdmin : false;
        this.userModel.updateOne({ _id: id }, Object.assign(Object.assign({}, userParams), { isAdmin: isAdmin })).exec();
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
    async getAllUsers() {
        const users = await this.userModel.find({}).exec();
        return users;
    }
    async getByUserId(id) {
        const user = await this.userModel.findById(id).exec();
        if (!user)
            throw new common_1.HttpException('User not found', common_1.HttpStatus.NOT_FOUND);
        return user;
    }
    async deleteUserById(id) {
        const user = await this.userModel.findByIdAndDelete(id).exec();
        if (!user)
            throw new common_1.HttpException('User not found', common_1.HttpStatus.NOT_FOUND);
        return user;
    }
    async updateUser(id, user) {
        const updatedUser = await this.userModel.findByIdAndUpdate(id, user, { new: true }).exec();
        if (!updatedUser)
            throw new common_1.HttpException('User not found', common_1.HttpStatus.NOT_FOUND);
        return updatedUser;
    }
    async newUser(user) {
        const newUser = new this.userModel(user);
        return await newUser.save();
    }
    async getUsersByIds(userIds) {
        const users = await this.userModel.find({ _id: { $in: userIds } }).exec();
        return users;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('User')),
    __param(1, (0, mongoose_1.InjectModel)('UserLink')),
    __param(2, (0, common_1.Inject)('SUBSCRIPTION_SERVICE')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        microservices_1.ClientProxy,
        config_service_1.ConfigService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map