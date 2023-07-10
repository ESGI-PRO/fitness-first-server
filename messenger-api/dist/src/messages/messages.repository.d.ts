import { Model } from 'mongoose';
import { MessageDo } from 'src/_schemas/message.do';
import { ClientProxy } from '@nestjs/microservices';
export declare class MessagesRepository {
    private messageModel;
    private readonly userServiceClient;
    constructor(messageModel: Model<MessageDo>, userServiceClient: ClientProxy);
    createMessage(message: any): Promise<any>;
    findAllMessages(id: any): Promise<any>;
}
