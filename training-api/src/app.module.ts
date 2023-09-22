import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ExercisesModule } from './exercises/exercises.module';
import { ConfigService } from './services/config/config.service';
import { MongoConfigService } from './services/config/mongo-config.service';
import { ExerciseSchema } from './_schemas/exercise.schema';
import { ClientProxyFactory } from '@nestjs/microservices';
import { AppService } from './app.service';

@Module({
  controllers: [],
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      useClass: MongoConfigService,
    }),
    MongooseModule.forFeature([
      {
        name: 'Exercise',
        schema: ExerciseSchema,
        collection: 'exercises',
      }
    ]),
    ExercisesModule
  ],
  providers: [
    ConfigService,
    AppService,
    {
      provide: 'USER_SERVICE',
      useFactory: (configService: ConfigService) => {
        const userServiceOptions = configService.get('userService');
        return ClientProxyFactory.create(userServiceOptions);
      },
      inject: [ConfigService],
    }
  ],
})

export class AppModule {}
