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
const faker_1 = require("@faker-js/faker");
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const client_1 = require("@prisma/client");
const rxjs_1 = require("rxjs");
const prisma = new client_1.PrismaClient();
let AppService = class AppService {
    constructor(userServiceClient) {
        this.userServiceClient = userServiceClient;
    }
    getHello() {
        return 'Hello World!';
    }
    ModuleInit() {
        const seeders = async () => {
            const trainers = await (0, rxjs_1.firstValueFrom)(this.userServiceClient.send('user_search_by_params', {
                isTrainer: true,
            }));
            trainers.forEach(async (trainer) => {
                var recettes;
                for (let i = 0; i < 5; i++) {
                    const recette = await prisma.recettes.create({
                        data: {
                            title: faker_1.faker.lorem.text(),
                            UserId: trainer.id,
                            instructions: [
                                {
                                    order: faker_1.faker.number.int({ max: 160 }),
                                    produits: [
                                        {
                                            quantite: faker_1.faker.number.int({ max: 360 }),
                                            ingredients: faker_1.faker.number.int({ max: 191 }),
                                        },
                                    ],
                                    description: faker_1.faker.lorem.paragraph(),
                                },
                            ],
                        },
                    });
                    recettes = [...recettes, recette];
                }
            });
        };
        seeders();
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('USER_SERVICE')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map