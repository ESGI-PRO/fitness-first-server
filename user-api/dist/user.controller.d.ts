import { ClientProxy } from '@nestjs/microservices';
import { UserService } from './services/user.service';
import { IUser } from './interfaces/user.interface';
import { IUserCreateResponse } from './interfaces/user-create-response.interface';
import { IUserSearchResponse } from './interfaces/user-search-response.interface';
import { IUserConfirmResponse } from './interfaces/user-confirm-response.interface';
export declare class UserController {
    private readonly userService;
    private readonly mailerServiceClient;
    constructor(userService: UserService, mailerServiceClient: ClientProxy);
    searchUserByCredentials(searchParams: {
        email: string;
        password: string;
    }): Promise<IUserSearchResponse>;
    getUserById(id: string): Promise<IUserSearchResponse>;
    confirmUser(confirmParams: {
        link: string;
    }): Promise<IUserConfirmResponse>;
    createUser(userParams: IUser): Promise<IUserCreateResponse>;
    updateUser(data: {
        id: string;
        userParams: any;
    }): Promise<IUserSearchResponse>;
    searchUserByEmail(email: string): Promise<IUserSearchResponse>;
    getAllUsers(): Promise<any>;
    getByUserId(id: string): Promise<any>;
    deleteUser(id: string): Promise<any>;
    updateUserById(id: string, user: any): Promise<any>;
    searchUserByParams(userParams: any): Promise<any>;
    connectUserToTrainer(data: {
        userId: string;
        trainerId: string;
    }): Promise<IUserSearchResponse>;
}
