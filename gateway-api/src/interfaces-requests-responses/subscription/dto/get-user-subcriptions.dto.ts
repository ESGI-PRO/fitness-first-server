import { ApiProperty } from '@nestjs/swagger';

export class GetUserSubscriptionsDto {
  @ApiProperty({ example: '649855c87d0ddf0d29fbdeb1' })
  userId: string;
}