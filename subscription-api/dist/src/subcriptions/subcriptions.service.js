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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubcriptionsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let SubcriptionsService = class SubcriptionsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createData) {
        console.log("user subscription createData", createData);
        const { planId } = createData, rest = __rest(createData, ["planId"]);
        return this.prisma.subscription.create({ data: Object.assign(Object.assign({}, rest), { plan: { connect: { id: planId } } }) });
    }
    findAll() {
        return this.prisma.subscription.findMany({ where: { active: true } });
    }
    findByUserId(id) {
        return this.prisma.subscription.findMany({ where: { userId: id } });
    }
    findOne(id) {
        return this.prisma.subscription.findUnique({ where: { id } });
    }
    findByStripeId(stripeId) {
        console.log("[findByStripeId]", stripeId);
        return this.prisma.subscription.findMany({ where: { stripeId } }) || [];
    }
    update(id, updateData) {
        return this.prisma.subscription.update({
            where: { id },
            data: updateData,
        });
    }
    remove(id) {
        return this.prisma.subscription.delete({ where: { id } });
    }
    findActiveSub(userId) {
        return this.prisma.subscription.findMany({
            where: {
                userId,
                active: true,
                currentPeriodStart: {
                    lte: new Date(),
                },
                currentPeriodEnd: {
                    gte: new Date(),
                },
            },
        }) || [];
    }
};
SubcriptionsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SubcriptionsService);
exports.SubcriptionsService = SubcriptionsService;
//# sourceMappingURL=subcriptions.service.js.map