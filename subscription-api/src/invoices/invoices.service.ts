import { Injectable } from '@nestjs/common';
//import { CreateInvoiceDto } from './dto/create-invoice.dto';
//import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class InvoicesService {
  constructor(private prisma: PrismaService) {}

  create(createInvoiceDto: any) {
    return this.prisma.invoice.create({ data: createInvoiceDto });
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
