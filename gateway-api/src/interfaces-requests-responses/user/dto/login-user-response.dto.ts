import { ApiProperty } from '@nestjs/swagger';
import {IToken} from '../../token/token.interface';
import { IUser } from '../user.interface';
export class LoginUserResponseDto {
  @ApiProperty({ example: 'token_create_success' })
  message: string;
  @ApiProperty({
    example: { token: 'someEncodedToken' },
    nullable: true,
  })
  data: {
    token: IToken;
    user: IUser;
  };
  @ApiProperty({ example: null, nullable: true })
  errors: { [key: string]: any };
}
