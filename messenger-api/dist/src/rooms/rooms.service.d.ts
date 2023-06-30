import { CreateRoomDto } from './dto/create-room.dto';
import { RoomsRepository } from './rooms.repository';
export declare class RoomsService {
    private readonly roomsRepository;
    constructor(roomsRepository: RoomsRepository);
    createRoom(createRoomDto: CreateRoomDto): Promise<any>;
    findAllRooms(id: string): Promise<any>;
}
