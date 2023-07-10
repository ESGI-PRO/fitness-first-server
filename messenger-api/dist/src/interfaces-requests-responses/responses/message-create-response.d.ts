import { IMessage } from '../interfaces/message.interface';
export interface IMessageCreateResponse {
    status: number;
    message: string;
    data: {
        message: IMessage | null;
    };
    errors: {
        [key: string]: any;
    };
}
