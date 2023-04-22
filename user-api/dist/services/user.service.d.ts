import { Model } from 'mongoose';
import { ConfigService } from './config/config.service';
import { IUser } from '../interfaces/user.interface';
import { IUserLink } from '../interfaces/user-link.interface';
export declare class UserService {
    private readonly userModel;
    private readonly userLinkModel;
    private readonly configService;
    constructor(userModel: Model<IUser>, userLinkModel: Model<IUserLink>, configService: ConfigService);
    searchUser(params: {
        email: string;
    }): Promise<IUser[]>;
    searchUserById(id: string): Promise<IUser>;
    updateUserById(id: string, userParams: {
        is_confirmed: boolean;
    }): Promise<IUser>;
    createUser(user: IUser): Promise<IUser>;
    createUserLink(id: string): Promise<IUserLink>;
    getUserLink(link: string): Promise<IUserLink[]>;
    updateUserLinkById(id: string, linkParams: {
        is_used: boolean;
    }): Promise<IUserLink>;
    getConfirmationLink(link: string): string;
}
