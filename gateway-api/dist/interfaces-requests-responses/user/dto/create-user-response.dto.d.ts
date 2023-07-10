import { IUser } from '../user.interface';
import { IToken } from '../../token/token.interface';
export declare class CreateUserResponseDto {
    message: string;
    data: {
        user: IUser;
        token: IToken;
    };
    errors: {
        [key: string]: any;
    };
}
