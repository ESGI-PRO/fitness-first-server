import { TokenService } from './services/token.service';
import { ITokenResponse } from './interfaces/token-response.interface';
import { ITokenDataResponse } from './interfaces/token-data-response.interface';
import { ITokenDestroyResponse } from './interfaces/token-destroy-response.interface';
export declare class TokenController {
    private readonly tokenService;
    constructor(tokenService: TokenService);
    createToken(data: {
        userId: string;
    }): Promise<ITokenResponse>;
    destroyToken(data: {
        userId: string;
    }): Promise<ITokenDestroyResponse>;
    decodeToken(data: {
        token: string;
    }): Promise<ITokenDataResponse>;
    verifyToken(data: {
        token: string;
        type?: string;
    }): Promise<ITokenDataResponse>;
}
