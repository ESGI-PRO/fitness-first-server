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
exports.CreateAnalyticVisitorsCountDto = exports.GetAnalyticVisitorsDto = exports.GetAllAnalyticsDto = exports.GetAnalyticDto = exports.CreateAnalyticDto = exports.AnalytiqueEventinterface = void 0;
const swagger_1 = require("@nestjs/swagger");
class AnalytiqueEventinterface {
}
exports.AnalytiqueEventinterface = AnalytiqueEventinterface;
class CreateAnalyticDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'appId123' }),
    __metadata("design:type", String)
], CreateAnalyticDto.prototype, "appName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'apikey123' }),
    __metadata("design:type", String)
], CreateAnalyticDto.prototype, "apiKey", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.110 Safari/537.36' }),
    __metadata("design:type", String)
], CreateAnalyticDto.prototype, "userAgent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'www.appurl.com' }),
    __metadata("design:type", String)
], CreateAnalyticDto.prototype, "baseUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: {
            "eventName": "name of event",
            "eventAction": "action",
            "eventCategory": "category",
            "eventPage": "login",
            "date": "2020-01-01",
            "events": {
                "buttonName": "optionnal",
                "buttonId": "button1",
            }
        } }),
    __metadata("design:type", AnalytiqueEventinterface)
], CreateAnalyticDto.prototype, "data", void 0);
exports.CreateAnalyticDto = CreateAnalyticDto;
class GetAnalyticDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'appId123' }),
    __metadata("design:type", String)
], GetAnalyticDto.prototype, "appName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'apikey123' }),
    __metadata("design:type", String)
], GetAnalyticDto.prototype, "apiKey", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.110 Safari/537.36' }),
    __metadata("design:type", String)
], GetAnalyticDto.prototype, "userAgent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'www.appurl.com' }),
    __metadata("design:type", String)
], GetAnalyticDto.prototype, "baseUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: {
            "eventName": "name of event",
            "eventAction": "action",
            "eventCategory": "category",
            "eventPage": "login",
            "date": "2020-01-01",
            "events": {
                "buttonName": "optionnal",
                "buttonId": "button1",
            }
        } }),
    __metadata("design:type", AnalytiqueEventinterface)
], GetAnalyticDto.prototype, "data", void 0);
exports.GetAnalyticDto = GetAnalyticDto;
class GetAllAnalyticsDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: {
            appName: "name of app",
            apiKey: "apikey",
            userAgent: "user agent",
            baseUrl: "www.appurl.fr",
            data: {
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
    __metadata("design:type", Array)
], GetAllAnalyticsDto.prototype, "Analytics", void 0);
exports.GetAllAnalyticsDto = GetAllAnalyticsDto;
class GetAnalyticVisitorsDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'appId123' }),
    __metadata("design:type", String)
], GetAnalyticVisitorsDto.prototype, "appName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'apikey123' }),
    __metadata("design:type", String)
], GetAnalyticVisitorsDto.prototype, "apiKey", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.110 Safari/537.36' }),
    __metadata("design:type", String)
], GetAnalyticVisitorsDto.prototype, "userAgent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'www.appurl.com' }),
    __metadata("design:type", String)
], GetAnalyticVisitorsDto.prototype, "baseUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], GetAnalyticVisitorsDto.prototype, "count", void 0);
exports.GetAnalyticVisitorsDto = GetAnalyticVisitorsDto;
class CreateAnalyticVisitorsCountDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'appId123' }),
    __metadata("design:type", String)
], CreateAnalyticVisitorsCountDto.prototype, "appName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'apikey123' }),
    __metadata("design:type", String)
], CreateAnalyticVisitorsCountDto.prototype, "apiKey", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.110 Safari/537.36' }),
    __metadata("design:type", String)
], CreateAnalyticVisitorsCountDto.prototype, "userAgent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'www.appurl.com' }),
    __metadata("design:type", String)
], CreateAnalyticVisitorsCountDto.prototype, "baseUrl", void 0);
exports.CreateAnalyticVisitorsCountDto = CreateAnalyticVisitorsCountDto;
//# sourceMappingURL=analytic.request.js.map