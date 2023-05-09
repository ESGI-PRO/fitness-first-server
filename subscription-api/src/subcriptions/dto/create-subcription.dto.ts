import {
  IsBoolean,
  IsNotEmpty,
  IsString,
  IsDateString,
} from 'class-validator';

export class CreateSubcriptionDto {
  @IsString()
  @IsNotEmpty()
  stripeId: string;

  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  planId: string;

  @IsDateString({ strict: true } as any)
  @IsNotEmpty()
  currentPeriodStart: Date;

  @IsDateString({ strict: true } as any)
  @IsNotEmpty()
  currentPeriodEnd: Date;

  @IsBoolean()
  active: boolean = false;
}

