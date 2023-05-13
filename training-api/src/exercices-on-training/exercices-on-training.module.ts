import { ExercicesOnTrainingService } from './exercices-on-training.service';
import { Module } from '@nestjs/common';
import { ExercicesOnTrainingController } from './exercices-on-training.controller';
import { PrismaService } from '../prisma.service';
import { ExercicesModule } from '../exercices/exercices.module';
import { TrainingModule } from '../training/training.module';

@Module({})
export class ExercicesOnTrainingModule {}
