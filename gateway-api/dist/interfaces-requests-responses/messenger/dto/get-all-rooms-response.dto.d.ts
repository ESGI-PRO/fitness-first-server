import { IRoom } from '../room.interface';
export declare class GetAllRoomsResponseDto {
    message: string;
    data: {
        user: IRoom[];
    };
    errors: {
        [key: string]: any;
    };
}
