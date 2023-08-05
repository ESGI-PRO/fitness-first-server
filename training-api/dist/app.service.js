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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
<<<<<<< HEAD
exports.AppService = void 0;
=======
exports.AppService = exports.fetchData = void 0;
>>>>>>> b776f9860 (modification get ingredients for web)
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const rxjs_1 = require("rxjs");
<<<<<<< HEAD
const data = require("./mock/exercises.json");
=======
const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
    return data;
};
exports.fetchData = fetchData;
>>>>>>> b776f9860 (modification get ingredients for web)
let AppService = class AppService {
    constructor(userServiceClient, exerciseModel) {
        this.userServiceClient = userServiceClient;
        this.exerciseModel = exerciseModel;
    }
    onModuleInit() {
        const cleardb = async () => {
            await this.exerciseModel.deleteMany({}).exec();
        };
        const seedAlgo = async () => {
<<<<<<< HEAD
=======
            const data = await (0, exports.fetchData)('https://exercisedb.p.rapidapi.com/exercises', {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
                    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
                },
            });
>>>>>>> b776f9860 (modification get ingredients for web)
            const trainers = await (0, rxjs_1.firstValueFrom)(this.userServiceClient.send('user_search_by_params', {
                isTrainer: true,
            }));
            for (let i = 0; i < trainers.length; i++) {
                const trainer = trainers[i];
                const trainees = trainer.traineeIds;
                for (let j = 0; j < trainees.length; j++) {
                    const traineeId = trainees[j];
                    const exercises = data.sort(() => Math.random() - Math.random()).slice(0, 5);
                    for (let k = 0; k < 5; k++) {
                        await this.exerciseModel.create({
                            user_id: traineeId,
                            trainer_id: trainer.id,
                            content: exercises[k],
                        });
                    }
                }
            }
        };
        this.exerciseModel.countDocuments({})
            .then(async (count) => {
<<<<<<< HEAD
            if (count < 1) {
                await seedAlgo();
            }
=======
            await cleardb();
            await seedAlgo();
>>>>>>> b776f9860 (modification get ingredients for web)
        })
            .catch((err) => {
            console.log(err);
        });
    }
    ;
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('USER_SERVICE')),
    __param(1, (0, mongoose_1.InjectModel)('Exercise')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy, typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map