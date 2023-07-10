import { JwtService } from '@nestjs/jwt';
import { Model, Query } from 'mongoose';
import { IToken } from '../interfaces/token.interface';
import { ConfigService } from './config/config.service';
export declare class TokenService {
    private readonly jwtService;
    private readonly tokenModel;
    private readonly configService;
    constructor(jwtService: JwtService, tokenModel: Model<IToken>, configService: ConfigService);
    generateToken(userId: string, expires: number, type: string): string;
    createToken(userId: string): Promise<IToken>;
    deleteTokenForUserId(userId: string): Query<any, any>;
    decodeToken(token: string): Promise<any>;
    verifyToken(token: string, type: string): Promise<any>;
}
