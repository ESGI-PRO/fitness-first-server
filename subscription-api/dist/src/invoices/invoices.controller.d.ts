import { HttpStatus } from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
export declare class InvoicesController {
    private readonly invoicesService;
    constructor(invoicesService: InvoicesService);
    create(createInvoiceDto: CreateInvoiceDto): any;
    findAll(): any;
    findByUserId(id: string): Promise<{
        status: HttpStatus;
        message: string;
        invoices: any;
    }>;
    findOne(id: string): any;
    update(updateInvoiceDto: UpdateInvoiceDto): any;
    remove(id: string): any;
}
