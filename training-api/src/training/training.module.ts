import { Module } from '@nestjs/common';
import { TrainingController } from './training.controller';
import { TrainingService } from './training.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { ExercicesModule } from 'src/exercices/exercices.module';
import { ExercicesOnTrainingModule } from 'src/exercices-on-training/exercices-on-training.module';

@Module({})
export class TrainingModule {}
