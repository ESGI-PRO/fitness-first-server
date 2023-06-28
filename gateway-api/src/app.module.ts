import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ClientProxyFactory } from '@nestjs/microservices';
import { UsersController } from './users.controller';
import { TrainingController } from './training.controller';
import { NutritionController } from './nutrition.controller';
import { AnalyticController } from './analytic.controller';
import { MessengerGateWay } from './messenger.gateway'
import { AuthGuard } from './services/guards/authorization.guard';
import { PermissionGuard } from './services/guards/permission.guard';
import { ConfigService } from './services/config/config.service';
import { SubscriptionController } from './subscription.controller';
import { MessengerController } from './messenger.controller';

@Module({
  imports: [],
  controllers: [UsersController,
     TrainingController,
     NutritionController,
     AnalyticController,
     SubscriptionController,
     MessengerController
     ],
  providers: [
    ConfigService,
    MessengerGateWay,
    {
      provide: 'TOKEN_SERVICE',
      useFactory: (configService: ConfigService) => {
        const tokenServiceOptions = configService.get('tokenService');
        return ClientProxyFactory.create(tokenServiceOptions);
      },
      inject: [ConfigService],
    },
    {
      provide: 'USER_SERVICE',
      useFactory: (configService: ConfigService) => {
        const userServiceOptions = configService.get('userService');
        return ClientProxyFactory.create(userServiceOptions);
      },
      inject: [ConfigService],
    },
    {
      provide: 'PERMISSION_SERVICE',
      useFactory: (configService: ConfigService) => {
        return ClientProxyFactory.create(
          configService.get('permissionService'),
        );
      },
      inject: [ConfigService],
    },
    {
      provide: 'TRAINING_SERVICE',
      useFactory: (configService: ConfigService) => {
        return ClientProxyFactory.create(configService.get('trainingService'));
      },
      inject: [ConfigService],
    },
    {
      provide: 'NUTRITION_SERVICE',
      useFactory: (configService: ConfigService) => {
        return ClientProxyFactory.create(configService.get('nutritionService'));
      },
      inject: [ConfigService],
    },
    {
      provide: 'ANALYTIC_SERVICE',
      useFactory: (configService: ConfigService) => {
        return ClientProxyFactory.create(configService.get('analyticService'));
      },
      inject: [ConfigService],
    },
    {
      provide: 'SUBSCRIPTION_SERVICE',
      useFactory: (configService: ConfigService) => {
        return ClientProxyFactory.create(configService.get('subscriptionService'));
      },
      inject: [ConfigService],
    },
    {
      provide: 'MESSENGER_SERVICE',
      useFactory: (configService: ConfigService) => {
        return ClientProxyFactory.create(configService.get('messengerService'));
      },
      inject: [ConfigService],
    },
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: PermissionGuard,
    },
  ],
})
export class AppModule {}
