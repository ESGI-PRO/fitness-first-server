import { IRoom } from '../room.interface';
export declare class CreateRoomResponseDto {
    message: string;
    data: {
        user: IRoom;
    };
    errors: {
        [key: string]: any;
    };
}
