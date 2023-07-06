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
const analytic_request_1 = require("./interfaces-requests-responses/analytic/analytic.request");
const analytic_response_1 = require("./interfaces-requests-responses/analytic/analytic.response");
const rxjs_1 = require("rxjs");
const authorization_decorator_1 = require("./decorators/authorization.decorator");
const permission_decorator_1 = require("./decorators/permission.decorator");
let AnalyticController = class AnalyticController {
    constructor(analyticServiceClient) {
        this.analyticServiceClient = analyticServiceClient;
    }
    async createAnalytics(data) {
        return await (0, rxjs_1.firstValueFrom)(this.analyticServiceClient.send('create_analytics', data));
    }
    async createVisitors(data) {
        const visitor = await (0, rxjs_1.firstValueFrom)(this.analyticServiceClient.send('create_visitors', data));
        return visitor;
    }
    async updateAnalyticsVisitors(data) {
        const visitors = await (0, rxjs_1.firstValueFrom)(this.analyticServiceClient.send('update_analytics_visitors', data));
        return visitors;
    }
    async findAllAnalytics() {
        const data = await (0, rxjs_1.firstValueFrom)(this.analyticServiceClient.send('find_all_analytics', {}));
        return data;
    }
    async findAllAnalyticsVisitors() {
        const data = await (0, rxjs_1.firstValueFrom)(this.analyticServiceClient.send('find_all_analytics_visitors', {}));
        return data;
    }
    async findAnalyticsBy(data) {
        const analytics = await (0, rxjs_1.firstValueFrom)(this.analyticServiceClient.send('find_analytics_by_params', data));
        return analytics;
    }
    async findAnalyticsVisitorsBy(data) {
        const analyticsVisitors = await (0, rxjs_1.firstValueFrom)(this.analyticServiceClient.send('find_analytics_visitors_by_params', data));
        return analyticsVisitors;
    }
};
__decorate([
    (0, common_1.Post)("/create_analytics"),
    (0, authorization_decorator_1.Authorization)(true),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, permission_decorator_1.Permission)('create_analytics'),
    (0, swagger_1.ApiCreatedResponse)({
        type: analytic_response_1.IAnalyticCreateResponse
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [analytic_request_1.CreateAnalyticDto]),
    __metadata("design:returntype", Promise)
], AnalyticController.prototype, "createAnalytics", null);
__decorate([
    (0, common_1.Post)("/create_visitors"),
    (0, authorization_decorator_1.Authorization)(true),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, permission_decorator_1.Permission)('create_visitors'),
    (0, swagger_1.ApiCreatedResponse)({
        type: analytic_response_1.IAnalyticsVisitorCreateResponse
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [analytic_request_1.CreateAnalyticVisitorsCountDto]),
    __metadata("design:returntype", Promise)
], AnalyticController.prototype, "createVisitors", null);
__decorate([
    (0, common_1.Post)("/update_analytics_visitors"),
    (0, authorization_decorator_1.Authorization)(true),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, permission_decorator_1.Permission)('update_analytics_visitors'),
    (0, swagger_1.ApiCreatedResponse)({
        type: analytic_response_1.IAnalyticsVisitorResponse
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [analytic_request_1.CreateAnalyticVisitorsCountDto]),
    __metadata("design:returntype", Promise)
], AnalyticController.prototype, "updateAnalyticsVisitors", null);
__decorate([
    (0, common_1.Get)("/find_all_analytics"),
    (0, authorization_decorator_1.Authorization)(true),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, permission_decorator_1.Permission)('find_all_analytics'),
    (0, swagger_1.ApiOkResponse)({
        type: analytic_response_1.IAnalyticsResponse
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AnalyticController.prototype, "findAllAnalytics", null);
__decorate([
    (0, common_1.Get)("/analytics_visitors"),
    (0, authorization_decorator_1.Authorization)(true),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, permission_decorator_1.Permission)('find_all_analytics_visitors'),
    (0, swagger_1.ApiOkResponse)({
        type: analytic_response_1.IAnalyticsVisitorResponse
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AnalyticController.prototype, "findAllAnalyticsVisitors", null);
__decorate([
    (0, common_1.Post)("/find_analytics_by_params"),
    (0, authorization_decorator_1.Authorization)(true),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, permission_decorator_1.Permission)('find_analytics_by_params'),
    (0, swagger_1.ApiOkResponse)({
        type: analytic_response_1.IAnalyticsResponse
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [analytic_request_1.CreateAnalyticDto]),
    __metadata("design:returntype", Promise)
], AnalyticController.prototype, "findAnalyticsBy", null);
__decorate([
    (0, common_1.Post)("/find_analytics_visitors_by_params"),
    (0, authorization_decorator_1.Authorization)(true),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, permission_decorator_1.Permission)('find_analytics_visitors_by_params'),
    (0, swagger_1.ApiOkResponse)({
        type: analytic_response_1.IAnalyticsVisitorResponse
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [analytic_request_1.CreateAnalyticVisitorsCountDto]),
    __metadata("design:returntype", Promise)
], AnalyticController.prototype, "findAnalyticsVisitorsBy", null);
AnalyticController = __decorate([
    (0, common_1.Controller)('analytics'),
    (0, swagger_1.ApiTags)('analytics'),
    __param(0, (0, common_1.Inject)('ANALYTIC_SERVICE')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], AnalyticController);
exports.AnalyticController = AnalyticController;
//# sourceMappingURL=analytic.controller.js.map