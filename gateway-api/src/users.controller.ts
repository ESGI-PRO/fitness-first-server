import {
  Controller,
  Post,
  Put,
  Get,
  Body,
  Req,
  Inject,
  HttpStatus,
  HttpException,
  Param,
} from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags, ApiOkResponse, ApiCreatedResponse, ApiBearerAuth } from '@nestjs/swagger';

import { Authorization } from './decorators/authorization.decorator';
import { IAuthorizedRequest } from './interfaces-requests-responses/common/authorized-request.interface';
import { IServiceUserCreateResponse } from './interfaces-requests-responses/user/service-user-create-response.interface';
import { IServiceUserSearchResponse } from './interfaces-requests-responses/user/service-user-search-response.interface';
import { IServiveTokenCreateResponse } from './interfaces-requests-responses/token/service-token-create-response.interface';
import { IServiceTokenDestroyResponse } from './interfaces-requests-responses/token/service-token-destroy-response.interface';
import { IServiceUserConfirmResponse } from './interfaces-requests-responses/user/service-user-confirm-response.interface';
import { IServiceUserGetByIdResponse } from './interfaces-requests-responses/user/service-user-get-by-id-response.interface';

import { GetUserByTokenResponseDto } from './interfaces-requests-responses/user/dto/get-user-by-token-response.dto';
import { CreateUserDto } from './interfaces-requests-responses/user/dto/create-user.dto';
import { CreateUserResponseDto } from './interfaces-requests-responses/user/dto/create-user-response.dto';
import { LoginUserDto } from './interfaces-requests-responses/user/dto/login-user.dto';
import { LoginUserResponseDto } from './interfaces-requests-responses/user/dto/login-user-response.dto';
import { LogoutUserResponseDto } from './interfaces-requests-responses/user/dto/logout-user-response.dto';
import { ConfirmUserDto } from './interfaces-requests-responses/user/dto/confirm-user.dto';
import { ConfirmUserResponseDto } from './interfaces-requests-responses/user/dto/confirm-user-response.dto';
import { RefreshTokenDto } from './interfaces-requests-responses/user/dto/refresh-token';
import { ITokenDataResponse } from './interfaces-requests-responses/token/token-data-response.interface';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(
    @Inject('TOKEN_SERVICE') private readonly tokenServiceClient: ClientProxy,
    @Inject('USER_SERVICE') private readonly userServiceClient: ClientProxy,
  ) { }

  @Get()
  @Authorization(true)
  @ApiBearerAuth('access-token')
  @ApiOkResponse({
    type: GetUserByTokenResponseDto,
  })
  public async getUserByToken(
    @Req() request: IAuthorizedRequest,
  ): Promise<GetUserByTokenResponseDto> {
    const userInfo = request.user;

    const userResponse: IServiceUserGetByIdResponse = await firstValueFrom(
      this.userServiceClient.send('user_get_by_id', userInfo.id),
    );

    return {
      message: userResponse.message,
      data: {
        user: userResponse.user,
      },
      errors: null,
    };
  }

  @Post('/register')
  @ApiCreatedResponse({
    type: CreateUserResponseDto,
  })
  public async createUser(
    @Body() userRequest: CreateUserDto,
  ): Promise<CreateUserResponseDto> {

    const createUserResponse: IServiceUserCreateResponse = await firstValueFrom(
      this.userServiceClient.send('user_create', userRequest),
    );

    if (createUserResponse.status !== HttpStatus.CREATED) {

      throw new HttpException(
        {
          message: createUserResponse.message,
          data: null,
          errors: createUserResponse.errors,
        },
        createUserResponse.status,
      );
    }
    console.log("createUserResponse.user.id", createUserResponse.user.id)
    const createTokenResponse: IServiveTokenCreateResponse = await firstValueFrom(
      this.tokenServiceClient.send('token_create', {
        userId: createUserResponse.user.id,
      }),
    );
    console.log("createTokenResponse", createTokenResponse)
    return {
      message: createUserResponse.message,
      data: {
        user: createUserResponse.user,
        token: createTokenResponse.token,
      },
      errors: null,
    };
  }

  @Post('/login')
  @ApiCreatedResponse({
    type: LoginUserResponseDto,
  })
  public async loginUser(
    @Body() loginRequest: LoginUserDto,
  ): Promise<LoginUserResponseDto> {
    const getUserResponse: IServiceUserSearchResponse = await firstValueFrom(
      this.userServiceClient.send('user_search_by_credentials', loginRequest),
    );

    if (getUserResponse.status !== HttpStatus.OK) {
      throw new HttpException(
        {
          message: getUserResponse.message,
          data: null,
          errors: null,
        },
        HttpStatus.UNAUTHORIZED,
      );
    }

    const createTokenResponse: IServiveTokenCreateResponse = await firstValueFrom(
      this.tokenServiceClient.send('token_create', {
        userId: getUserResponse.user.id,
      }),
    );

    return {
      message: createTokenResponse.message,
      data: {
        token: createTokenResponse.token,
        user: getUserResponse.user
      },
      errors: null,
    };
  }

  @Put('/logout')
  @Authorization(true)
  @ApiCreatedResponse({
    type: LogoutUserResponseDto,
  })
  public async logoutUser(
    @Req() request: IAuthorizedRequest,
  ): Promise<LogoutUserResponseDto> {
    const userInfo = request.user;

    const destroyTokenResponse: IServiceTokenDestroyResponse = await firstValueFrom(
      this.tokenServiceClient.send('token_destroy', {
        userId: userInfo.id,
      }),
    );

    if (destroyTokenResponse.status !== HttpStatus.OK) {
      throw new HttpException(
        {
          message: destroyTokenResponse.message,
          data: null,
          errors: destroyTokenResponse.errors,
        },
        destroyTokenResponse.status,
      );
    }

    return {
      message: destroyTokenResponse.message,
      errors: null,
      data: null,
    };
  }

  @Get('/confirm/:link')
  @ApiCreatedResponse({
    type: ConfirmUserResponseDto,
  })
  public async confirmUser(
    @Param() params: ConfirmUserDto,
  ): Promise<ConfirmUserResponseDto> {
    const confirmUserResponse: IServiceUserConfirmResponse = await firstValueFrom(
      this.userServiceClient.send('user_confirm', {
        link: params.link,
      }),
    );

    if (confirmUserResponse.status !== HttpStatus.OK) {
      throw new HttpException(
        {
          message: confirmUserResponse.message,
          data: null,
          errors: confirmUserResponse.errors,
        },
        confirmUserResponse.status,
      );
    }

    return {
      message: confirmUserResponse.message,
      errors: null,
      data: null,
    };
  }

  @Post('/refresh_token')
  @ApiCreatedResponse({
    type: LoginUserResponseDto,
  })
  public async refreshToken(
    @Body() refreshTokenRequest: RefreshTokenDto,
  ): Promise<LoginUserResponseDto> {
    try {
      const tokenVerifyResponse: ITokenDataResponse = await firstValueFrom(
        this.userServiceClient.send('token_verify', {
          token: refreshTokenRequest.token
        }),
      );

      // get user by id
      const getUserResponse: IServiceUserGetByIdResponse = await firstValueFrom(
        this.userServiceClient.send('user_get_by_id', tokenVerifyResponse.data.userId),
      );

      if (getUserResponse.status !== HttpStatus.OK) {
        throw new HttpException(
          {
            message: getUserResponse.message,
            data: null,
          },
          getUserResponse.status,
        );
      }
      // destroy token
      await firstValueFrom(
        this.tokenServiceClient.send('token_destroy', {
          userId: getUserResponse.user.id,
        }),
      );

      // create new token
      const createTokenResponse: IServiveTokenCreateResponse = await firstValueFrom(
        this.tokenServiceClient.send('token_create', {
          userId: getUserResponse.user.id,
        }),
      );

      return {
        message: createTokenResponse.message,
        data: {
          token: createTokenResponse.token,
          user: getUserResponse.user
        },
        errors: null,
      };


    } catch (err) {
      throw new HttpException(
        {
          message: err.message,
          data: null,
        },
        HttpStatus.UNAUTHORIZED,
      );

    }

  }
}
