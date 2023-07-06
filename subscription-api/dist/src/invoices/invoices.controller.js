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
exports.InvoicesController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const invoices_service_1 = require("./invoices.service");
const create_invoice_dto_1 = require("./dto/create-invoice.dto");
const update_invoice_dto_1 = require("./dto/update-invoice.dto");
let InvoicesController = class InvoicesController {
    constructor(invoicesService) {
        this.invoicesService = invoicesService;
    }
    create(createInvoiceDto) {
        return this.invoicesService.create(createInvoiceDto);
    }
    findAll() {
        return this.invoicesService.findAll();
    }
    async findByUserId(id) {
        const invoices = await this.invoicesService.findByUserId(id);
        if (invoices) {
            return {
                status: common_1.HttpStatus.OK,
                message: "get_user_invoices_success",
                invoices: invoices
            };
        }
        else {
            return {
                status: common_1.HttpStatus.NOT_FOUND,
                message: 'get_user_invoices_not_found',
                invoices: null
            };
        }
    }
    findOne(id) {
        return this.invoicesService.findOne(id);
    }
    update(updateInvoiceDto) {
        return this.invoicesService.update(updateInvoiceDto.id, updateInvoiceDto);
    }
    remove(id) {
        return this.invoicesService.remove(id);
    }
};
__decorate([
    (0, microservices_1.MessagePattern)('create_invoice'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_invoice_dto_1.CreateInvoiceDto]),
    __metadata("design:returntype", void 0)
], InvoicesController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)('find_all_invoices'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], InvoicesController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.MessagePattern)('find_invoices_by_userId'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InvoicesController.prototype, "findByUserId", null);
__decorate([
    (0, microservices_1.MessagePattern)('findOneInvoice'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InvoicesController.prototype, "findOne", null);
__decorate([
    (0, microservices_1.MessagePattern)('updateInvoice'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_invoice_dto_1.UpdateInvoiceDto]),
    __metadata("design:returntype", void 0)
], InvoicesController.prototype, "update", null);
__decorate([
    (0, microservices_1.MessagePattern)('removeInvoice'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InvoicesController.prototype, "remove", null);
InvoicesController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [invoices_service_1.InvoicesService])
], InvoicesController);
exports.InvoicesController = InvoicesController;
//# sourceMappingURL=invoices.controller.js.map