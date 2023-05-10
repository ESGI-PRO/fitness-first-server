import { Module } from '@nestjs/common';
import { ExercicesOnTrainingController } from './exercices-on-training.controller';

@Module({
  controllers: [ExercicesOnTrainingController]
})
export class ExercicesOnTrainingModule {}
