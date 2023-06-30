import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
@Injectable()
export class PlansService {
  constructor() {}

  create(createPlanDto: any) {
    return prisma.plan.create({ data: createPlanDto });
  }

  findAll() {
    return prisma.plan.findMany();
  }

  findOne(id: string) {
    return prisma.plan.findUnique({ where: { id } });
  }

  // find one by stripeId
  findOneByStripeId(stripeId: string) {
    return prisma.plan.findMany({ where: { stripeId } });
  }

  update(id: string, updateData: any) {
    return prisma.plan.update({
      where: { id: id },
      data: updateData,
    });
  }

  remove(id: string) {
    return prisma.plan.delete({ where: { id } });
  }

}
