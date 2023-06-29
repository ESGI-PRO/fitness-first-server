import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    uniqueItems: true,
    example: 'test1@denrox.com',
  })
  email: string;
  @ApiProperty({
    minLength: 6,
    example: 'test11',
  })
  password: string;
  @ApiProperty({
    minLength: 6,
    example: 'test11',
  })
  userName: string;
  @ApiProperty({
    minLength: 10,
    example: '1234567890',
  })
  mobileNumber: string;
  @ApiProperty({
    example: true,
  })
  isTrainer: boolean;
  @ApiProperty({
    example: '5d987c3bfb881ec86b476bcc',
  })
  trainerId: string;
  @ApiProperty({
    example: [],
  })
  traineeIds: Array<string>;
  @ApiProperty({
    example: 'YOGA',
  })
  trainerSpeciality: string;
  @ApiProperty({
    example: false,
  })
  is_confirmed: boolean;
}
