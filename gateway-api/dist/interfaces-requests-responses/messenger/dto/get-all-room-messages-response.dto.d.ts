import { IMessage } from '../message.interface';
export declare class GetAllRoomMessagesResponseDto {
    message: string;
    data: {
        messages: IMessage[];
    };
    errors: {
        [key: string]: any;
    };
}
