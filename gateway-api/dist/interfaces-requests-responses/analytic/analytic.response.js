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
Object.defineProperty(exports, "__esModule", { value: true });
exports.IAnalyticsVisitorCreateResponse = exports.IAnalyticsVisitorResponse = exports.IAnalyticsVisitorsResponse = exports.IAnalyticCreateResponse = exports.IAnalyticResponse = exports.IAnalyticsResponse = exports.AnalytiqueEventinterface = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class AnalytiqueEventinterface {
}
exports.AnalytiqueEventinterface = AnalytiqueEventinterface;
class IAnalyticsResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 200 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], IAnalyticsResponse.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'success' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], IAnalyticsResponse.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: [{
                "appName": "appId123",
                "apiKey": "apikey123",
                "userAgent": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.110 Safari/537.36",
                "baseUrl": "www.appurl.com",
                "data": {
                    "eventName": "name of event",
                    "eventAction": "action",
                    "eventCategory": "category",
                    "eventPage": "login",
                    "date": "2020-01-01",
                    "events": {
                        "buttonName": "optionnal",
                        "buttonId": "button1",
                    }
                }
            }] }),
    __metadata("design:type", Array)
], IAnalyticsResponse.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null }),
    __metadata("design:type", Object)
], IAnalyticsResponse.prototype, "errors", void 0);
exports.IAnalyticsResponse = IAnalyticsResponse;
class IAnalyticResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 200 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], IAnalyticResponse.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'success' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], IAnalyticResponse.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: {
            "appName": "appId123",
            "apiKey": "apikey123",
            "userAgent": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.110 Safari/537.36",
            "baseUrl": "www.appurl.com",
            "data": {
                "eventName": "name of event",
                "eventAction": "action",
                "eventCategory": "category",
                "eventPage": "login",
                "date": "2020-01-01",
                "events": {
                    "buttonName": "optionnal",
                    "buttonId": "button1",
                }
            }
        } }),
    __metadata("design:type", Object)
], IAnalyticResponse.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null }),
    __metadata("design:type", Object)
], IAnalyticResponse.prototype, "errors", void 0);
exports.IAnalyticResponse = IAnalyticResponse;
class IAnalyticCreateResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 201 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], IAnalyticCreateResponse.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'success' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], IAnalyticCreateResponse.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: {
            "appName": "appId123",
            "apiKey": "apikey123",
            "userAgent": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.110 Safari/537.36",
            "baseUrl": "www.appurl.com",
            "data": {
                "eventName": "name of event",
                "eventAction": "action",
                "eventCategory": "category",
                "eventPage": "login",
                "date": "2020-01-01",
                "events": {
                    "buttonName": "optionnal",
                    "buttonId": "button1",
                }
            }
        } }),
    __metadata("design:type", Object)
], IAnalyticCreateResponse.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null }),
    __metadata("design:type", Object)
], IAnalyticCreateResponse.prototype, "errors", void 0);
exports.IAnalyticCreateResponse = IAnalyticCreateResponse;
class IAnalyticsVisitorsResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 200 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], IAnalyticsVisitorsResponse.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'success' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], IAnalyticsVisitorsResponse.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: [{
                "appName": "appId123",
                "apiKey": "apikey123",
                "userAgent": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.110 Safari/537.36",
                "baseUrl": "www.appurl.com",
                "count": 1
            }] }),
    __metadata("design:type", Array)
], IAnalyticsVisitorsResponse.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null }),
    __metadata("design:type", Object)
], IAnalyticsVisitorsResponse.prototype, "errors", void 0);
exports.IAnalyticsVisitorsResponse = IAnalyticsVisitorsResponse;
class IAnalyticsVisitorResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 200 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], IAnalyticsVisitorResponse.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'success' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], IAnalyticsVisitorResponse.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: {
            "appName": "appId123",
            "apiKey": "apikey123",
            "userAgent": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.110 Safari/537.36",
            "baseUrl": "www.appurl.com",
            "count": 1
        } }),
    __metadata("design:type", Object)
], IAnalyticsVisitorResponse.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null }),
    __metadata("design:type", Object)
], IAnalyticsVisitorResponse.prototype, "errors", void 0);
exports.IAnalyticsVisitorResponse = IAnalyticsVisitorResponse;
class IAnalyticsVisitorCreateResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 201 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], IAnalyticsVisitorCreateResponse.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'success' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], IAnalyticsVisitorCreateResponse.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: {
            "appName": "appId123",
            "apiKey": "apikey123",
            "userAgent": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.110 Safari/537.36",
            "baseUrl": "www.appurl.com",
            "count": 1
        } }),
    __metadata("design:type", Object)
], IAnalyticsVisitorCreateResponse.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null }),
    __metadata("design:type", Object)
], IAnalyticsVisitorCreateResponse.prototype, "errors", void 0);
exports.IAnalyticsVisitorCreateResponse = IAnalyticsVisitorCreateResponse;
//# sourceMappingURL=analytic.response.js.map