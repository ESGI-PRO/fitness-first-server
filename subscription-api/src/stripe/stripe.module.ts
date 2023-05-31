import { Module } from '@nestjs/common';
import { StripeController } from './stripe.controller';
import { StripeService } from './stripe.service';
import {SubcriptionsModule} from "../subcriptions/subcriptions.module";
import {PlansModule} from "../plans/plans.module";
import {InvoicesModule} from "../invoices/invoices.module";
import { PrismaService } from 'src/prisma/prisma.service';
import { ConfigService } from '../services/config/config.service';
import { ClientProxyFactory } from '@nestjs/microservices';

@Module({
  imports: [SubcriptionsModule, PlansModule, InvoicesModule],
  controllers: [StripeController],
  providers: [StripeService, StripeController, PrismaService,
    ConfigService,
    {
      provide: 'USER_SERVICE',
      useFactory: (configService: ConfigService) => {
        const userServiceOptions = configService.get('userService');
        return ClientProxyFactory.create(userServiceOptions);
      },
      inject: [ConfigService],
    }],
  exports:[StripeService]
})
export class StripeModule {}
