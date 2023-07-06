export declare class PlansService {
    constructor();
    create(createPlanDto: any): import(".prisma/client").Prisma.Prisma__PlanClient<import("@prisma/client/runtime").GetResult<{
        id: string;
        name: string;
        slug: string;
        stripeId: string;
        price: number;
        paymentLink: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<(import("@prisma/client/runtime").GetResult<{
        id: string;
        name: string;
        slug: string;
        stripeId: string;
        price: number;
        paymentLink: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {})[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__PlanClient<import("@prisma/client/runtime").GetResult<{
        id: string;
        name: string;
        slug: string;
        stripeId: string;
        price: number;
        paymentLink: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
    findOneByStripeId(stripeId: string): import(".prisma/client").Prisma.PrismaPromise<(import("@prisma/client/runtime").GetResult<{
        id: string;
        name: string;
        slug: string;
        stripeId: string;
        price: number;
        paymentLink: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {})[]>;
    update(id: string, updateData: any): import(".prisma/client").Prisma.Prisma__PlanClient<import("@prisma/client/runtime").GetResult<{
        id: string;
        name: string;
        slug: string;
        stripeId: string;
        price: number;
        paymentLink: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__PlanClient<import("@prisma/client/runtime").GetResult<{
        id: string;
        name: string;
        slug: string;
        stripeId: string;
        price: number;
        paymentLink: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
}
