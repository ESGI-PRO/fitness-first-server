import { Module } from '@nestjs/common';
import { ExercicesController } from './exercices.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { ExercicesService } from './exercices.service';

@Module({
  controllers: [ExercicesController],
  providers: [ExercicesService, PrismaService]
})
export class ExercicesModule {}
