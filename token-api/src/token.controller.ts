import { Controller, HttpStatus } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { TokenService } from './services/token.service';
import { ITokenResponse } from './interfaces/token-response.interface';
import { ITokenDataResponse } from './interfaces/token-data-response.interface';
import { ITokenDestroyResponse } from './interfaces/token-destroy-response.interface';
import { tokenTypes } from './services/config/token.types';
@Controller('token')
export class TokenController {
  constructor(private readonly tokenService: TokenService) {}

  @MessagePattern('token_create')
  public async createToken(data: { userId: string }): Promise<ITokenResponse> {
    let result: ITokenResponse;

    console.log('createToken', data)

    if (data && data.userId) {
      try {
        const createResult = await this.tokenService.createToken(data.userId);
        console.log('createResult', data.userId, createResult)
        result = {
          status: HttpStatus.CREATED,
          message: 'token_create_success',
          token: createResult,
        };
      } catch (e) {
        result = {
          status: HttpStatus.BAD_REQUEST,
          message: 'token_create_bad_request',
          token: null,
        };
      }
    } else {
      console.log('BAD_REQUEST', data)
      result = {
        status: HttpStatus.BAD_REQUEST,
        message: 'token_create_bad_request',
        token: null,
      };
    }

    return result;
  }

  @MessagePattern('token_destroy')
  public async destroyToken(data: {
    userId: string;
  }): Promise<ITokenDestroyResponse> {
    return {
      status: data && data.userId ? HttpStatus.OK : HttpStatus.BAD_REQUEST,
      message:
        data && data.userId
          ? (await this.tokenService.deleteTokenForUserId(data.userId)) &&
            'token_destroy_success'
          : 'token_destroy_bad_request',
      errors: null,
    };
  }

  @MessagePattern('token_decode')
  public async decodeToken(data: {
    token: string;
  }): Promise<ITokenDataResponse> {
    const tokenData = await this.tokenService.decodeToken(data.token);
    return {
      status: tokenData ? HttpStatus.OK : HttpStatus.UNAUTHORIZED,
      message: tokenData ? 'token_decode_success' : 'token_decode_unauthorized',
      data: tokenData,
    };
  }

  @MessagePattern('token_verify')
  public async verifyToken(data: {
    token: string;
    type?: string;
  }): Promise<ITokenDataResponse> {
    const {token, type=tokenTypes.REFRESH} = data

    const tokenData = await this.tokenService.verifyToken(token, type);
    return {
      status: tokenData ? HttpStatus.OK : HttpStatus.UNAUTHORIZED,
      message: tokenData ? 'token_verify_success' : 'token_verify_unauthorized',
      data: tokenData,
    };
  }
}
