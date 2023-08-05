import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @ApiProperty({ example: 'test3@denrox.com' })
  email: string;
  @ApiProperty({ example: 'password' })
  password: string;
}
