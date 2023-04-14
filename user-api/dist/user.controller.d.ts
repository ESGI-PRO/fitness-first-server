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
}
