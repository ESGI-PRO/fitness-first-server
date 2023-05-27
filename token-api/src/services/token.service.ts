import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Query } from 'mongoose';
import { IToken } from '../interfaces/token.interface';
import { ConfigService } from './config/config.service';
import * as moment from 'moment';
import { tokenTypes } from './config/token.types';

@Injectable()
export class TokenService {
  constructor(
    private readonly jwtService: JwtService,
    @InjectModel('Token') private readonly tokenModel: Model<IToken>,
    private readonly configService: ConfigService
  ) {
  }

    /**
   * Generate token
   * @param {ObjectId} userId
   * @param {Moment} expires
   * @param {string} type
   * @param {string} [secret]
   * @returns {string}
   */
  public generateToken(userId: string, expires: number, type: string) {
    const payload = {
      sub: userId,
      iat: moment().unix(),
      exp: expires,
      type,
    };
    return this.jwtService.sign(payload);
  };


  public async createToken(userId: string): Promise<IToken> {
    const jwtServiceOptions = this.configService.get('jwt');
    const accessTokenExpires = moment().add(jwtServiceOptions.accessExpirationMinutes, 'minutes').unix();
    const refreshTokenExpires = moment().add(jwtServiceOptions.refreshExpirationDays, 'days').unix();
    console.log(
      'jwtServiceOptions',
      jwtServiceOptions,
      accessTokenExpires,
      refreshTokenExpires
    )
    // access token
    const accessToken = this.generateToken(
      userId,
      accessTokenExpires,
      tokenTypes.ACCESS
    )

    // refresh token
    const refreshToken = this.generateToken(
      userId,
      refreshTokenExpires,
      tokenTypes.REFRESH
    )

    console.log(
      'accessToken',
      accessToken,
      'refreshToken',
      refreshToken
    )

    const access = await new this.tokenModel({
      user_id: userId,
      token: accessToken,
      type: tokenTypes.ACCESS
    }).save();


    const refresh = await new this.tokenModel({
      user_id: userId,
      token: refreshToken,
      type: tokenTypes.REFRESH
    }).save();

    console.log(
      'access-refresh',
      access,
      refresh
    )

    return {
        access: {
          token: accessToken,
          exp: accessTokenExpires
        },
        refresh: {
          token: accessToken,
          exp: refreshTokenExpires
        }
    }
  }

  public deleteTokenForUserId(userId: string): Query<any, any> {
    return this.tokenModel.findOneAndDelete({
      user_id: userId,
    });
  }

  public async decodeToken(token: string) {
    const tokenModel: any = await this.tokenModel.find({
      token,
    });
    console.log("tokenModel", tokenModel, 'token', token)
    let result = null;

    if (tokenModel && tokenModel[0]) {
      try {
        const tokenData = this.jwtService.decode(tokenModel[0].token) as {
          exp: number;
          sub: any;
          iat: string;
          type: string
        };
        if (!tokenData || tokenData.exp <= Math.floor(+new Date() / 1000)) {
          result = null;
        } else {
          result = {
            userId: tokenData.sub,
            type: tokenData.type
          };
        }
        console.log("tokenData", tokenData)
      } catch (e) {
        result = null;
      }
    }
    return result;
  }


  /**
 * Verify token and return token doc (or throw an error if it is not valid)
 * @param {string} token
 * @param {string} type
 * @returns {Promise<Token>}
 */
public async verifyToken (token: string, type: string): Promise<any> {
  const payload = this.jwtService.verify(token);
  const tokenDoc = await this.tokenModel.findOne({ token, type, user_id: payload.sub });
  if (!tokenDoc) {
    throw new Error('Token not found');
  }
  return {
    userId: payload.sub
  };
};

}
