import { IRoom } from '../room.interface';
export declare class CreateRoomResponseDto {
    message: string;
    data: {
        room: IRoom;
    };
    errors: {
        [key: string]: any;
    };
}
