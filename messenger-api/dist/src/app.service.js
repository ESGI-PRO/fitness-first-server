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
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const rxjs_1 = require("rxjs");
const faker_1 = require("@faker-js/faker");
let AppService = class AppService {
    constructor(userServiceClient, roomModel, messageModel, meetingModel) {
        this.userServiceClient = userServiceClient;
        this.roomModel = roomModel;
        this.messageModel = messageModel;
        this.meetingModel = meetingModel;
    }
    onModuleInit() {
        const cleardb = () => {
            this.roomModel.deleteMany({}).exec();
            this.messageModel.deleteMany({}).exec();
        };
        const seedAlgo = async () => {
            const trainers = await (0, rxjs_1.firstValueFrom)(this.userServiceClient.send('user_search_by_params', {
                isTrainer: true,
            }));
            for (let i = 0; i < trainers.length; i++) {
                const trainer = trainers[i];
                const trainees = trainer.traineeIds;
                for (let j = 0; j < trainees.length; j++) {
                    const traineeId = trainees[j];
                    const members = [trainer.id, traineeId];
                    const room = await this.roomModel.create({
                        sender_id: traineeId,
                        members: members,
                    });
                    for (let k = 0; k < 10; k++) {
                        await this.messageModel.create({
                            sender_id: members[Math.floor(Math.random() * 2)],
                            room_id: room.id,
                            message: faker_1.faker.lorem.sentence(),
                        });
                        for (let k = 0; k < 2; k++) {
                            await this.meetingModel.create({
                                sender_id: traineeId,
                                members: [trainer.id, traineeId],
                                date: faker_1.faker.date.soon().toISOString(),
                                time: faker_1.faker.date.anytime(),
                                description: faker_1.faker.lorem.sentence({
                                    min: 20,
                                    max: 30
                                })
                            });
                        }
                        for (let k = 0; k < 2; k++) {
                            await this.meetingModel.create({
                                sender_id: traineeId,
                                members: [trainer.id, traineeId],
                                date: faker_1.faker.date.soon().toISOString(),
                                time: faker_1.faker.date.anytime(),
                            });
                        }
                        for (let k = 0; k < 10; k++) {
                            await this.messageModel.create({
                                sender_id: trainer.id,
                                room_id: room.id,
                                message: faker_1.faker.lorem.sentence(),
                            });
                        }
                    }
                }
            }
            this.roomModel
                .countDocuments({})
                .then(async (count) => {
                if (count < 1) {
                    await seedAlgo();
                }
            })
                .catch((err) => {
                console.log(err);
            });
        };
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('USER_SERVICE')),
    __param(1, (0, mongoose_1.InjectModel)('Room')),
    __param(2, (0, mongoose_1.InjectModel)('Message')),
    __param(3, (0, mongoose_1.InjectModel)('Meeting')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map