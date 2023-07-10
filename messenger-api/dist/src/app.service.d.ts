import { ClientProxy } from '@nestjs/microservices';
import { Model } from 'mongoose';
import { IRoom } from './interfaces/room.interface';
import { IMessage } from './interfaces/message.interface';
import { IMeetingCreate } from './interfaces/meeting.interface';
export declare class AppService {
    private readonly userServiceClient;
    private readonly roomModel;
    private readonly messageModel;
    private readonly meetingModel;
    constructor(userServiceClient: ClientProxy, roomModel: Model<IRoom>, messageModel: Model<IMessage>, meetingModel: Model<IMeetingCreate>);
    onModuleInit(): void;
}
