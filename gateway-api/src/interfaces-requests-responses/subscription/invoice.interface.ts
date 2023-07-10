// create invoices interface from prisma

export interface IInvoice {
    id: string;
    userId: string;
    subscriptionId: string;
    stripeId: string;
    amountPaid: number;
    hostedInvoiceUrl: number;
    number: string;
    createdAt: Date;
    updatedAt: Date;
}