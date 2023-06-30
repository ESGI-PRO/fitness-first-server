import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { IMessagesGetResponse } from '../interfaces-requests-responses/responses/get-all-messages-response';
import { IMessageCreateResponse } from '../interfaces-requests-responses/responses/message-create-response';
export declare class MessagesController {
    private readonly messagesService;
    constructor(messagesService: MessagesService);
    createMessage(createMessageDto: CreateMessageDto): Promise<IMessageCreateResponse>;
    getAllMessagesByRoomId(data: {
        roomId: string;
    }): Promise<IMessagesGetResponse>;
}
