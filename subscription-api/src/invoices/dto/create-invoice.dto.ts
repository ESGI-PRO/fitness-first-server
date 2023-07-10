import {
    IsNotEmpty,
    IsString
  } from 'class-validator';

  export class CreateInvoiceDto {

  
    @IsString()
    @IsNotEmpty()
    userId: string;
  
    @IsString()
    @IsNotEmpty()
    stripeId: string;

    @IsString()
    @IsNotEmpty()
    number: string;

    @IsNotEmpty()
    amountPaid: number;

    @IsString()
    @IsNotEmpty()
    hostedInvoiceUrl: string;
  }
  