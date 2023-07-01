import { IMessage } from '../message.interface';
export declare class CreateMessageResponseDto {
    message: string;
    data: {
        message: IMessage;
    };
    errors: {
        [key: string]: any;
    };
}
