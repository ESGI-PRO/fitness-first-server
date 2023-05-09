import { Module } from '@nestjs/common';
import { StripeModule } from './stripe/stripe.module';
import { StripeController } from './stripe/stripe.controller';
import { SubcriptionsModule } from './subcriptions/subcriptions.module';
import { InvoicesModule } from './invoices/invoices.module';
import { PlansModule } from './plans/plans.module';

@Module({
  imports: [
   StripeModule,
   SubcriptionsModule,
   InvoicesModule,
   PlansModule],
   controllers: [StripeController],
})
export class AppModule { }
