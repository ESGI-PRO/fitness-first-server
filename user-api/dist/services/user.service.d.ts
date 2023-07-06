import { OnModuleInit } from '@nestjs/common';
import { Model } from 'mongoose';
import { ConfigService } from './config/config.service';
import { IUser } from '../interfaces/user.interface';
import { IUserLink } from '../interfaces/user-link.interface';
import { ClientProxy } from '@nestjs/microservices';
export declare class UserService implements OnModuleInit {
    private readonly userModel;
    private readonly userLinkModel;
    private readonly subscriptionServiceClient;
    private readonly configService;
    constructor(userModel: Model<IUser>, userLinkModel: Model<IUserLink>, subscriptionServiceClient: ClientProxy, configService: ConfigService);
    onModuleInit(): void;
    searchUser(params: any): Promise<IUser[]>;
    searchUserById(id: string): Promise<IUser>;
    updateUserById(id: string, userParams: any): Promise<IUser>;
    createUser(user: IUser): Promise<IUser>;
    createUserLink(id: string): Promise<IUserLink>;
    getUserLink(link: string): Promise<IUserLink[]>;
    updateUserLinkById(id: string, linkParams: {
        is_used: boolean;
    }): Promise<IUserLink>;
    getConfirmationLink(link: string): string;
    getAllUsers(): Promise<IUser[]>;
    getByUserId(id: string): Promise<IUser>;
    deleteUserById(id: string): Promise<IUser>;
    updateUser(id: string, user: IUser): Promise<IUser>;
    newUser(user: IUser): Promise<IUser>;
    getUsersByIds(userIds: string[]): Promise<IUser[]>;
}
