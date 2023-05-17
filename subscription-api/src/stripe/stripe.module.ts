import { Module } from '@nestjs/common';
import { StripeController } from './stripe.controller';
import { StripeService } from './stripe.service';
import { PrismaService } from '../prisma/prisma.service';
import {SubcriptionsModule} from "../subcriptions/subcriptions.module";
import {PlansModule} from "../plans/plans.module";
import {InvoicesModule} from "../invoices/invoices.module";

@Module({
  imports: [SubcriptionsModule, PlansModule, InvoicesModule],
  controllers: [StripeController],
  providers: [StripeService, StripeController,PrismaService],
  exports:[StripeService]
})
export class StripeModule {}
