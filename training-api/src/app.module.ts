import { ExercicesController } from './exercices/exercices.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TrainingModule } from './training/training.module';
import { PrismaService } from './prisma.service';
import { ExercicesService } from './exercices/exercices.service';
import { ExercicesModule } from './exercices/exercices.module';
import { ExercicesOnTrainingService } from './exercices-on-training/exercices-on-training.service';
import { ExercicesOnTrainingModule } from './exercices-on-training/exercices-on-training.module';
import { ExercicesOnTrainingController } from './exercices-on-training/exercices-on-training.controller';
import { TrainingController } from './training/training.controller';
import { ConfigService } from './services/config/config.service';
import { TrainingService } from './training/training.service';

@Module({
  imports: [TrainingModule, ExercicesModule, ExercicesOnTrainingModule],
  controllers: [AppController , ExercicesOnTrainingController , ExercicesController , TrainingController],
  providers: [ConfigService, AppService, ExercicesService, ExercicesOnTrainingService, TrainingService],
})
export class AppModule {}
