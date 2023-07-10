"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const stripe_module_1 = require("./stripe/stripe.module");
const stripe_controller_1 = require("./stripe/stripe.controller");
const stripe_service_1 = require("./stripe/stripe.service");
const subcriptions_module_1 = require("./subcriptions/subcriptions.module");
const subcriptions_controller_1 = require("./subcriptions/subcriptions.controller");
const subcriptions_service_1 = require("./subcriptions/subcriptions.service");
const invoices_module_1 = require("./invoices/invoices.module");
const invoices_controller_1 = require("./invoices/invoices.controller");
const invoices_service_1 = require("./invoices/invoices.service");
const plans_module_1 = require("./plans/plans.module");
const plans_controller_1 = require("./plans/plans.controller");
const plans_service_1 = require("./plans/plans.service");
const prisma_service_1 = require("./prisma/prisma.service");
const config_service_1 = require("./services/config/config.service");
const microservices_1 = require("@nestjs/microservices");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            stripe_module_1.StripeModule,
            subcriptions_module_1.SubcriptionsModule,
            invoices_module_1.InvoicesModule,
            plans_module_1.PlansModule
        ],
        controllers: [stripe_controller_1.StripeController, subcriptions_controller_1.SubcriptionsController, invoices_controller_1.InvoicesController, plans_controller_1.PlansController],
        providers: [prisma_service_1.PrismaService, stripe_service_1.StripeService, subcriptions_service_1.SubcriptionsService, invoices_service_1.InvoicesService, plans_service_1.PlansService,
            config_service_1.ConfigService,
            {
                provide: 'USER_SERVICE',
                useFactory: (configService) => {
                    const userServiceOptions = configService.get('userService');
                    return microservices_1.ClientProxyFactory.create(userServiceOptions);
                },
                inject: [config_service_1.ConfigService],
            }],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map