import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TrainingModule } from './training/training.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [TrainingModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
