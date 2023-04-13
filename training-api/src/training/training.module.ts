import { Module } from '@nestjs/common';
import { TrainingController } from './training.controller';
import { TrainingService } from './training.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [TrainingController],
  providers: [TrainingService, PrismaService]
})
export class TrainingModule {}
