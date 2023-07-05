import { ClientProxy } from '@nestjs/microservices';
import { IAuthorizedRequest } from './interfaces-requests-responses/common/authorized-request.interface';
import { GetUserByTokenResponseDto } from './interfaces-requests-responses/user/dto/get-user-by-token-response.dto';
import { CreateUserDto } from './interfaces-requests-responses/user/dto/create-user.dto';
import { CreateUserResponseDto } from './interfaces-requests-responses/user/dto/create-user-response.dto';
import { LoginUserDto } from './interfaces-requests-responses/user/dto/login-user.dto';
import { LoginUserResponseDto } from './interfaces-requests-responses/user/dto/login-user-response.dto';
import { LogoutUserResponseDto } from './interfaces-requests-responses/user/dto/logout-user-response.dto';
import { ConfirmUserDto } from './interfaces-requests-responses/user/dto/confirm-user.dto';
import { ConfirmUserResponseDto } from './interfaces-requests-responses/user/dto/confirm-user-response.dto';
import { RefreshTokenDto } from './interfaces-requests-responses/user/dto/refresh-token';
export declare class UsersController {
    private readonly tokenServiceClient;
    private readonly userServiceClient;
    constructor(tokenServiceClient: ClientProxy, userServiceClient: ClientProxy);
    getUserByToken(request: IAuthorizedRequest): Promise<GetUserByTokenResponseDto>;
    createUser(userRequest: CreateUserDto): Promise<CreateUserResponseDto>;
    loginUser(loginRequest: LoginUserDto): Promise<LoginUserResponseDto>;
    logoutUser(request: IAuthorizedRequest): Promise<LogoutUserResponseDto>;
    confirmUser(params: ConfirmUserDto): Promise<ConfirmUserResponseDto>;
    refreshToken(refreshTokenRequest: RefreshTokenDto): Promise<LoginUserResponseDto>;
    getAllUsers(): Promise<any>;
    getByUserId(id: string): Promise<any>;
    updateUser(id: string, user: any): Promise<any>;
    deleteUser(id: string): Promise<any>;
}
