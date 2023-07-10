import { ApiProperty } from '@nestjs/swagger';
import { ISubcription } from '../subcription.interface';

export class GetUserSubscriptionResponseDto {
  @ApiProperty({ example: 200 })
  status: number;
  @ApiProperty({ example: 'get_user_subscription_success' })
  message: string;
  @ApiProperty({
    example: [],
    nullable: true,
  })
  subscriptions: ISubcription[];
  @ApiProperty({ example: null, nullable: true })
  errors: { [key: string]: any };
}
