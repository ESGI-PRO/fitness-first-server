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
exports.AnalyticController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const swagger_1 = require("@nestjs/swagger");
let AnalyticController = class AnalyticController {
    constructor(analyticServiceClient) {
        this.analyticServiceClient = analyticServiceClient;
    }
    createAnalytics(data) {
        console.log("data", data);
        return this.analyticServiceClient.send('create_analytics', data);
    }
    countAnalyticsVisitors(data) {
        console.log("analyticsVisitors----", data);
        const analyticsVisitors = this.analyticServiceClient.send('update_analytics_visitors', data);
        return analyticsVisitors;
    }
    createVisitors(data) {
        return this.analyticServiceClient.send('create_visitors', data);
    }
    findAllAnalytics() {
        const analytics = this.analyticServiceClient.send('find_all_analytics', {});
        console.log("all analytics", analytics);
        return analytics;
    }
    findAnalyticsById(data) {
        const analytics = this.analyticServiceClient.send('find_analytics_by_id', data);
        console.log("analytics", analytics);
        return analytics;
    }
    findAllAnalyticsVisitors() {
        const analyticsVisitors = this.analyticServiceClient.send('find_all_analytics_visitors', {});
        console.log("all analyticsVisitors", analyticsVisitors);
        return analyticsVisitors;
    }
    findAnalyticsVisitorsById(appKey) {
        console.log("analyticsVisitors", appKey);
        const analyticsVisitors = this.analyticServiceClient.send('find_analytics_visitors_by_id', appKey);
        return analyticsVisitors;
    }
    findAnalyticsVisitorsByAppName(appName) {
        const analyticsVisitors = this.analyticServiceClient.send('find_analytics_visitors_by_app_name', appName);
        console.log("analyticsVisitors", analyticsVisitors);
        return analyticsVisitors;
    }
};
__decorate([
    (0, common_1.Post)("/createAnalytics"),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AnalyticController.prototype, "createAnalytics", null);
__decorate([
    (0, common_1.Post)("/AnalyticsVisitors"),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AnalyticController.prototype, "countAnalyticsVisitors", null);
__decorate([
    (0, common_1.Post)("/createVisitors"),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AnalyticController.prototype, "createVisitors", null);
__decorate([
    (0, common_1.Get)("/Analytics"),
    (0, common_1.HttpCode)(200),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AnalyticController.prototype, "findAllAnalytics", null);
__decorate([
    (0, common_1.Get)("/Analytics/:id"),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)("id", new common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AnalyticController.prototype, "findAnalyticsById", null);
__decorate([
    (0, common_1.Get)("/AnalyticsVisitors"),
    (0, common_1.HttpCode)(200),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AnalyticController.prototype, "findAllAnalyticsVisitors", null);
__decorate([
    (0, common_1.Get)("/AnalyticsVisitors/:appKey"),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)("appKey")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AnalyticController.prototype, "findAnalyticsVisitorsById", null);
__decorate([
    (0, common_1.Get)("/AnalyticsVisitors/:appName"),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)("appName")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AnalyticController.prototype, "findAnalyticsVisitorsByAppName", null);
AnalyticController = __decorate([
    (0, common_1.Controller)('analytics'),
    (0, swagger_1.ApiTags)('analytics'),
    __param(0, (0, common_1.Inject)('ANALYTIC_SERVICE')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], AnalyticController);
exports.AnalyticController = AnalyticController;
//# sourceMappingURL=analytic.controller.js.map