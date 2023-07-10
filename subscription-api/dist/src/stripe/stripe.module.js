"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripeModule = void 0;
const common_1 = require("@nestjs/common");
const stripe_controller_1 = require("./stripe.controller");
const stripe_service_1 = require("./stripe.service");
const subcriptions_module_1 = require("../subcriptions/subcriptions.module");
const plans_module_1 = require("../plans/plans.module");
const invoices_module_1 = require("../invoices/invoices.module");
const prisma_service_1 = require("../prisma/prisma.service");
const config_service_1 = require("../services/config/config.service");
const microservices_1 = require("@nestjs/microservices");
let StripeModule = class StripeModule {
};
StripeModule = __decorate([
    (0, common_1.Module)({
        imports: [subcriptions_module_1.SubcriptionsModule, plans_module_1.PlansModule, invoices_module_1.InvoicesModule],
        controllers: [stripe_controller_1.StripeController],
        providers: [stripe_service_1.StripeService, stripe_controller_1.StripeController, prisma_service_1.PrismaService,
            config_service_1.ConfigService,
            {
                provide: 'USER_SERVICE',
                useFactory: (configService) => {
                    const userServiceOptions = configService.get('userService');
                    return microservices_1.ClientProxyFactory.create(userServiceOptions);
                },
                inject: [config_service_1.ConfigService],
            }],
        exports: [stripe_service_1.StripeService]
    })
], StripeModule);
exports.StripeModule = StripeModule;
//# sourceMappingURL=stripe.module.js.map