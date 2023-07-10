import {
    IsNotEmpty,
    IsString
  } from 'class-validator';

  export class CreatePlanDto {
    @IsString()
    @IsNotEmpty()
    name: string;
  
    @IsString()
    @IsNotEmpty()
    slug: string;
  
    @IsString()
    @IsNotEmpty()
    stripeId: string;

    @IsNotEmpty()
    price: number;
  
    @IsString()
    @IsNotEmpty()
    paymentLink: string;
  }
  
  