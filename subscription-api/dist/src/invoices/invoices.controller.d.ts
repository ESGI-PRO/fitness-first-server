import { InvoicesService } from './invoices.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
export declare class InvoicesController {
    private readonly invoicesService;
    constructor(invoicesService: InvoicesService);
    create(createInvoiceDto: CreateInvoiceDto): any;
    findAll(): any;
    findByUserId(id: string): any;
    findOne(id: string): any;
    update(updateInvoiceDto: UpdateInvoiceDto): any;
    remove(id: string): any;
}
