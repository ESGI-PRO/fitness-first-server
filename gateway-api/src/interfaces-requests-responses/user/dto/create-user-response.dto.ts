import { ApiProperty } from '@nestjs/swagger';
import { IUser } from '../user.interface';

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
        trainerSpeciality: 'Yoga',
      },
    },
    nullable: true,
  })
  data: {
    user: IUser;
    token: string;
  };
  @ApiProperty({ example: null, nullable: true })
  errors: { [key: string]: any };
}
