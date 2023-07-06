import { PlansService } from './plans.service';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';
export declare class PlansController {
    private readonly plansService;
    constructor(plansService: PlansService);
    create(createPlanDto: CreatePlanDto): import(".prisma/client").Prisma.Prisma__PlanClient<import("@prisma/client/runtime").GetResult<{
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
    update(updatePlanDto: UpdatePlanDto): import(".prisma/client").Prisma.Prisma__PlanClient<import("@prisma/client/runtime").GetResult<{
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
