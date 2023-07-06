import { RoomsService } from './rooms.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { IRoomCreateResponse } from '../interfaces-requests-responses/responses/room-create-response';
import { IRoomsGetResponse } from '../interfaces-requests-responses/responses/get-all-rooms-response';
export declare class RoomsController {
    private readonly roomsService;
    constructor(roomsService: RoomsService);
    createRoom(createRoomDto: CreateRoomDto): Promise<IRoomCreateResponse>;
    getAllRoomsByUserId(data: {
        userId: string;
    }): Promise<IRoomsGetResponse>;
    getRoomsByIds(data: {
        ids: string[];
    }): Promise<any>;
}
