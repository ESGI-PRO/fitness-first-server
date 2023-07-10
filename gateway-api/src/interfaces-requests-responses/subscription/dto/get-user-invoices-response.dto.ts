import { ApiProperty } from '@nestjs/swagger';
import { IInvoice } from '../invoice.interface';

export class GetUserInvoicesResponseDto {
  @ApiProperty({ example: 200 })
  status: number;
  @ApiProperty({ example: 'get_user_invoices_success' })
  message: string;
  @ApiProperty({
    example: [],
    nullable: true,
  })
  invoices: IInvoice[];
  @ApiProperty({ example: null, nullable: true })
  errors: { [key: string]: any };
}
