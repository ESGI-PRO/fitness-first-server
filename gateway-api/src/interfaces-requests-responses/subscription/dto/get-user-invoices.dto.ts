import { ApiProperty } from '@nestjs/swagger';

export class GetUserInvoicesDto {
  @ApiProperty({ example: '649855c87d0ddf0d29fbdeb1' })
  userId: string;
}