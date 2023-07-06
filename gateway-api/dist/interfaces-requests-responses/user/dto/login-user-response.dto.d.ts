import { IToken } from '../../token/token.interface';
import { IUser } from '../user.interface';
export declare class LoginUserResponseDto {
    message: string;
    data: {
        token: IToken;
        user: IUser;
    };
    errors: {
        [key: string]: any;
    };
}
