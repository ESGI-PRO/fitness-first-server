import { ApiProperty } from '@nestjs/swagger';
import { IUser } from '../user.interface';
import { IToken } from '../../token/token.interface';

export class CreateUserResponseDto {
  @ApiProperty({ example: 'user_create_success' })
  message: string;
  @ApiProperty({
    example: {
      user: {
        email: 'test@denrox.com',
        is_confirmed: false,
        id: '5d987c3bfb881ec86b476bcc',
        userName: 'John Doe',
        mobileNumber: '1234567890',
        isTrainer: true,
        isAdmin: false,
        trainerId: '5d987c3bfb881ec86b476bcc',
        traineeIds: [],
        trainerSpeciality: 'YOGA',
      },
      token:{
        access: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDZmZTdlOGFjMWZjZDQwZGQ1YWQzOTUiLCJpYXQiOjE2ODUwNTU0NjQsImV4cCI6MTY4NTA1OTA2NCwidHlwZSI6ImFjY2VzcyJ9.9puJokzb5fFOZdPUHdgqzChbcfb34CbvcssaYZ7Uvu4",
        refresh: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDZmZTdlOGFjMWZjZDQwZGQ1YWQzOTUiLCJpYXQiOjE2ODUwNTU0NjQsImV4cCI6MTY5MDIzOTQ2NCwidHlwZSI6InJlZnJlc2gifQ.pI9XzbE6KeDJNCavHU9bGWTcI9HzpNAVfQNOjpnz6zA"
      }
    },
    nullable: true,
  })
  data: {
    user: IUser;
    token: IToken;
  };
  @ApiProperty({ example: null, nullable: true })
  errors: { [key: string]: any };
}
