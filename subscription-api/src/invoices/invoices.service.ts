import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class InvoicesService {
  constructor(private prisma: PrismaService) {}

  create( createData: any) {
    console.log("user invoice createData", createData)
    const {subscriptionId, ...rest}=createData
    return this.prisma.invoice.create({ data: {...rest, subscription: {connect: {id: subscriptionId}}}});
  }

  findAll() {
    return this.prisma.invoice.findMany();
  }

  findByUserId(id: string) {
    return this.prisma.invoice.findMany({ where: { userId: id } });
  }

  findOne(id: string) {
    return this.prisma.invoice.findUnique({ where: { id } });
  }

  update(id: string, updateData: any) {
    return this.prisma.invoice.update({
      where: { id },
      data: updateData,
    });
  }

  remove(id: string) {
    return this.prisma.invoice.delete({ where: { id } });
  }
}
