import { CreateMessageDto } from './dto/create-message.dto';
import { MessagesRepository } from './messages.repository';
export declare class MessagesService {
    private readonly messagesRepository;
    constructor(messagesRepository: MessagesRepository);
    createMessage(createMessageDto: CreateMessageDto): Promise<any>;
    findAllMessages(id: string): Promise<any>;
}
