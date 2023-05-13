import { ApiProperty } from '@nestjs/swagger';
import { IUser } from '../user.interface';

export class GetUserByTokenResponseDto {
  @ApiProperty({ example: 'user_get_by_id_success' })
  message: string;
  @ApiProperty({
    example: {
      user: {
        email: 'test@denrox.com',
        is_confirmed: true,
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
  };
  @ApiProperty({ example: null, nullable: true })
  errors: { [key: string]: any };
}
