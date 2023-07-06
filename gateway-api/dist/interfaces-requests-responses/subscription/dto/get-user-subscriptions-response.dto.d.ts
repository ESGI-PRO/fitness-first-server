import { ISubcription } from '../subcription.interface';
export declare class GetUserSubscriptionResponseDto {
    status: number;
    message: string;
    subscriptions: ISubcription[];
    errors: {
        [key: string]: any;
    };
}
