import { Model } from 'mongoose';
import { RoomDo } from 'src/_schemas/room.do';
import { ClientProxy } from '@nestjs/microservices';
export declare class RoomsRepository {
    private readonly roomModel;
    private readonly userServiceClient;
    constructor(roomModel: Model<RoomDo>, userServiceClient: ClientProxy);
    createRoom(room: any): Promise<any>;
    findAllRooms(id: any): Promise<any>;
}
