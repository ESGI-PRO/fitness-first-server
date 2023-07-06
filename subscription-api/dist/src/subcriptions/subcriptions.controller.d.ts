import { SubcriptionsService } from './subcriptions.service';
import { CreateSubcriptionDto } from './dto/create-subcription.dto';
import { UpdateSubcriptionDto } from './dto/update-subcription.dto';
import { ISubcriptionResponse } from '../interfaces/findSubscriptionsByUserId.interface';
export declare class SubcriptionsController {
    private readonly subcriptionsService;
    constructor(subcriptionsService: SubcriptionsService);
    create(createSubcriptionDto: CreateSubcriptionDto): import(".prisma/client").Prisma.Prisma__SubscriptionClient<import("@prisma/client/runtime").GetResult<{
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
    findByUserId(id: string): Promise<ISubcriptionResponse>;
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
    update(updateSubcriptionDto: UpdateSubcriptionDto): import(".prisma/client").Prisma.Prisma__SubscriptionClient<import("@prisma/client/runtime").GetResult<{
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
}
