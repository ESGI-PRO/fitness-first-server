import { IUser } from '../user.interface';
export declare class GetUserByTokenResponseDto {
    message: string;
    data: {
        user: IUser;
    };
    errors: {
        [key: string]: any;
    };
}
