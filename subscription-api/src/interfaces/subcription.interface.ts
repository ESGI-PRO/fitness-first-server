// create subscription interface from prisma

export interface ISubcription {
    id: string;
    userId: string;
    planId: string;
    stripeId: string;
    currentPeriodStart: Date;
    currentPeriodEnd: Date;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
}