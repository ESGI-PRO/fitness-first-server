import { HttpStatus } from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
export declare class InvoicesController {
    private readonly invoicesService;
    constructor(invoicesService: InvoicesService);
    create(createInvoiceDto: CreateInvoiceDto): import(".prisma/client").Prisma.Prisma__InvoiceClient<import("@prisma/client/runtime").GetResult<{
        id: string;
        stripeId: string;
        userId: string;
        subscriptionId: string;
        amountPaid: number;
        number: string;
        hostedInvoiceUrl: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<(import("@prisma/client/runtime").GetResult<{
        id: string;
        stripeId: string;
        userId: string;
        subscriptionId: string;
        amountPaid: number;
        number: string;
        hostedInvoiceUrl: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {})[]>;
    findByUserId(id: string): Promise<{
        status: HttpStatus;
        message: string;
        invoices: (import("@prisma/client/runtime").GetResult<{
            id: string;
            stripeId: string;
            userId: string;
            subscriptionId: string;
            amountPaid: number;
            number: string;
            hostedInvoiceUrl: string;
            createdAt: Date;
            updatedAt: Date;
        }, unknown, never> & {})[];
    }>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__InvoiceClient<import("@prisma/client/runtime").GetResult<{
        id: string;
        stripeId: string;
        userId: string;
        subscriptionId: string;
        amountPaid: number;
        number: string;
        hostedInvoiceUrl: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
    update(updateInvoiceDto: UpdateInvoiceDto): import(".prisma/client").Prisma.Prisma__InvoiceClient<import("@prisma/client/runtime").GetResult<{
        id: string;
        stripeId: string;
        userId: string;
        subscriptionId: string;
        amountPaid: number;
        number: string;
        hostedInvoiceUrl: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__InvoiceClient<import("@prisma/client/runtime").GetResult<{
        id: string;
        stripeId: string;
        userId: string;
        subscriptionId: string;
        amountPaid: number;
        number: string;
        hostedInvoiceUrl: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
}
