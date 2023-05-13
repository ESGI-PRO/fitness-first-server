import { Module } from '@nestjs/common';
import { ExercicesController } from './exercices.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { ExercicesService } from './exercices.service';
import { ExercicesOnTrainingModule } from 'src/exercices-on-training/exercices-on-training.module';
import { TrainingModule } from 'src/training/training.module';

@Module({
})
export class ExercicesModule {}
