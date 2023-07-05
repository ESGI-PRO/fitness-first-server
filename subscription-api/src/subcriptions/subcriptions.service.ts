import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';



@Injectable()
export class SubcriptionsService {
  constructor(private prisma: PrismaService) {}

  create(createData: any) {
    console.log("user subscription createData", createData)
    const {planId, ...rest}=createData
    return this.prisma.subscription.create({ data: {...rest, plan: {connect: {id: planId}}}});
  }

  findAll() {
    return this.prisma.subscription.findMany({ where: { active: true } });
  }

  findByUserId(id: string) {
    return this.prisma.subscription.findMany({ where: { userId: id } });
  }

  findOne(id: string) {
    return this.prisma.subscription.findUnique({ where: { id } });
  }

  findByStripeId(stripeId: string) {
    console.log("[findByStripeId]", stripeId)
    return this.prisma.subscription.findMany({ where: { stripeId } }) || [];
  }

  update(id: string, updateData: any) {
    return this.prisma.subscription.update({
      where: { id },
      data: updateData,
    });
  }

  remove(id: string) {
    return this.prisma.subscription.delete({ where: { id } });
  }

  //find all user active subscription by userId, currentPeriodStart and currentPeriodEnd from now
  findActiveSub(userId: string){
    return this.prisma.subscription.findMany({
      where: {
        userId,
        active: true,
        currentPeriodStart: {
          lte: new Date(),
        },
        currentPeriodEnd: {
          gte: new Date(),
        },
      },
    }) || [];
  }

}
