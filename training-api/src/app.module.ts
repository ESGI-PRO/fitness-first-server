import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TrainingModule } from './training/training.module';
import { PrismaService } from './prisma/prisma.service';
import { ExercicesService } from './exercices/exercices.service';
import { ExercicesModule } from './exercices/exercices.module';
import { ExercicesOnTrainingService } from './exercices-on-training/exercices-on-training.service';
import { ExercicesOnTrainingModule } from './exercices-on-training/exercices-on-training.module';

@Module({
  imports: [TrainingModule, ExercicesModule, ExercicesOnTrainingModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, ExercicesService, ExercicesOnTrainingService],
})
export class AppModule {}
