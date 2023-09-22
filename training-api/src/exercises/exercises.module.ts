import { Module } from '@nestjs/common';
import { ExercisesService } from './exercises.service';
import { ExercisesController } from './exercises.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ExerciseSchema, Exercise } from 'src/_schemas/exercise.schema';
import { ExercisesRepository } from './exercises.repository';
import { ConfigService } from '../services/config/config.service';
import { ClientProxyFactory } from '@nestjs/microservices';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Exercise.name, schema: ExerciseSchema }]),
  ],
  controllers: [ExercisesController],
  providers: [ExercisesService, ExercisesRepository,   ConfigService,
    {
      provide: 'USER_SERVICE',
      useFactory: (configService: ConfigService) => {
        const userServiceOptions = configService.get('userService');
        return ClientProxyFactory.create(userServiceOptions);
      },
      inject: [ConfigService],
    }],
  exports: [ExercisesService],
})
export class ExercisesModule {}
