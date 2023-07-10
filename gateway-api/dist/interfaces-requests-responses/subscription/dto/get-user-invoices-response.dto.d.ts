import { IInvoice } from '../invoice.interface';
export declare class GetUserInvoicesResponseDto {
    status: number;
    message: string;
    invoices: IInvoice[];
    errors: {
        [key: string]: any;
    };
}
