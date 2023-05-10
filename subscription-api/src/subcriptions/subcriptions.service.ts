import { Injectable } from '@nestjs/common';
//import { CreateSubcriptionDto } from './dto/create-subcription.dto';
//import { UpdateSubcriptionDto } from './dto/update-subcription.dto';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class SubcriptionsService {
  constructor(private prisma: PrismaService) {}

  create(createData: any) {
    return this.prisma.subscription.create({ data: createData});
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
  public findActiveSub(userId: string){
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
    });
  }
  // find by stripeId
  public findByStripeId(stripeId: string) {
    return this.prisma.subscription.findMany({ where: { stripeId } });
  }
}
