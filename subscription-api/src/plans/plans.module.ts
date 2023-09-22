import { Module } from '@nestjs/common';
import { PlansService } from './plans.service';
import { PlansController } from './plans.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [PlansController],
  providers: [PlansService, PrismaService],
  exports: [PlansService]
})
export class PlansModule {}
