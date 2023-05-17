import { Injectable } from '@nestjs/common';
//import { CreatePlanDto } from './dto/create-plan.dto';
//import { UpdatePlanDto } from './dto/update-plan.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PlansService {
  constructor(private prisma: PrismaService) {}

  create(createPlanDto: any) {
    return this.prisma.plan.create({ data: createPlanDto });
  }

  findAll() {
    return this.prisma.plan.findMany();
  }

  findOne(id: string) {
    return this.prisma.plan.findUnique({ where: { id } });
  }

  update(id: string, updateData: any) {
    return this.prisma.plan.update({
      where: { id: id },
      data: updateData,
    });
  }

  remove(id: string) {
    return this.prisma.plan.delete({ where: { id } });
  }

}
