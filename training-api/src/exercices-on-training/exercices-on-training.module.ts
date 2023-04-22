import { Module } from '@nestjs/common';
import { ExercicesOnTrainingController } from './exercices-on-training.controller';
import { ExercicesService } from 'src/exercices/exercices.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { ExercicesOnTrainingService } from './exercices-on-training.service';

@Module({
  controllers: [ExercicesOnTrainingController],
  providers: [ExercicesOnTrainingService, PrismaService]
})
export class ExercicesOnTrainingModule {}
