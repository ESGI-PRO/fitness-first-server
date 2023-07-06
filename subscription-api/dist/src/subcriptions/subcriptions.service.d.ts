import { PrismaService } from 'src/prisma/prisma.service';
export declare class SubcriptionsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createData: any): import(".prisma/client").Prisma.Prisma__SubscriptionClient<import("@prisma/client/runtime").GetResult<{
        id: string;
        stripeId: string;
        userId: string;
        planId: string;
        active: boolean;
        currentPeriodStart: Date;
        currentPeriodEnd: Date;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<(import("@prisma/client/runtime").GetResult<{
        id: string;
        stripeId: string;
        userId: string;
        planId: string;
        active: boolean;
        currentPeriodStart: Date;
        currentPeriodEnd: Date;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {})[]>;
    findByUserId(id: string): import(".prisma/client").Prisma.PrismaPromise<(import("@prisma/client/runtime").GetResult<{
        id: string;
        stripeId: string;
        userId: string;
        planId: string;
        active: boolean;
        currentPeriodStart: Date;
        currentPeriodEnd: Date;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {})[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__SubscriptionClient<import("@prisma/client/runtime").GetResult<{
        id: string;
        stripeId: string;
        userId: string;
        planId: string;
        active: boolean;
        currentPeriodStart: Date;
        currentPeriodEnd: Date;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
    findByStripeId(stripeId: string): any[] | import(".prisma/client").Prisma.PrismaPromise<(import("@prisma/client/runtime").GetResult<{
        id: string;
        stripeId: string;
        userId: string;
        planId: string;
        active: boolean;
        currentPeriodStart: Date;
        currentPeriodEnd: Date;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {})[]>;
    update(id: string, updateData: any): import(".prisma/client").Prisma.Prisma__SubscriptionClient<import("@prisma/client/runtime").GetResult<{
        id: string;
        stripeId: string;
        userId: string;
        planId: string;
        active: boolean;
        currentPeriodStart: Date;
        currentPeriodEnd: Date;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__SubscriptionClient<import("@prisma/client/runtime").GetResult<{
        id: string;
        stripeId: string;
        userId: string;
        planId: string;
        active: boolean;
        currentPeriodStart: Date;
        currentPeriodEnd: Date;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
    findActiveSub(userId: string): any[] | import(".prisma/client").Prisma.PrismaPromise<(import("@prisma/client/runtime").GetResult<{
        id: string;
        stripeId: string;
        userId: string;
        planId: string;
        active: boolean;
        currentPeriodStart: Date;
        currentPeriodEnd: Date;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {})[]>;
}
