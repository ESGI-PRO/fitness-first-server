import { Module } from '@nestjs/common';

import { StripeModule } from './stripe/stripe.module';
import { StripeController } from './stripe/stripe.controller';
import { StripeService } from './stripe/stripe.service';

import { SubcriptionsModule } from './subcriptions/subcriptions.module';
import { SubcriptionsController } from './subcriptions/subcriptions.controller';
import { SubcriptionsService } from './subcriptions/subcriptions.service';

import { InvoicesModule } from './invoices/invoices.module';
import { InvoicesController } from './invoices/invoices.controller';
import { InvoicesService } from './invoices/invoices.service';

import { PlansModule } from './plans/plans.module';
import { PlansController } from './plans/plans.controller';
import { PlansService } from './plans/plans.service';

import { PrismaService } from './prisma/prisma.service';
import { ConfigService } from './services/config/config.service';
import { ClientProxyFactory } from '@nestjs/microservices';

@Module({
  imports: [
   StripeModule,
   SubcriptionsModule,
   InvoicesModule,
   PlansModule],
   controllers: [StripeController, SubcriptionsController, InvoicesController, PlansController],
   providers: [PrismaService, StripeService, SubcriptionsService, InvoicesService, PlansService,
    ConfigService,
    {
      provide: 'USER_SERVICE',
      useFactory: (configService: ConfigService) => {
        const userServiceOptions = configService.get('userService');
        return ClientProxyFactory.create(userServiceOptions);
      },
      inject: [ConfigService],
    }],
})
export class AppModule { }
