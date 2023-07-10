import { Module } from '@nestjs/common';
import { SubcriptionsService } from './subcriptions.service';
import { SubcriptionsController } from './subcriptions.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [SubcriptionsController],
  providers: [SubcriptionsService, PrismaService],
  exports: [SubcriptionsService]
})
export class SubcriptionsModule {}
