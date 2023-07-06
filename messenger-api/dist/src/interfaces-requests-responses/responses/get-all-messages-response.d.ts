import { IMessage } from '../interfaces/message.interface';
export interface IMessagesGetResponse {
    status: number;
    message: string;
    data: {
        messages: Array<IMessage>;
    };
    errors: {
        [key: string]: any;
    };
}
