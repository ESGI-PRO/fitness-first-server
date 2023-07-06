import { PrismaService } from 'src/prisma/prisma.service';
export declare class InvoicesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createData: any): import(".prisma/client").Prisma.Prisma__InvoiceClient<import("@prisma/client/runtime").GetResult<{
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
    findByUserId(id: string): import(".prisma/client").Prisma.PrismaPromise<(import("@prisma/client/runtime").GetResult<{
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
    update(id: string, updateData: any): import(".prisma/client").Prisma.Prisma__InvoiceClient<import("@prisma/client/runtime").GetResult<{
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
