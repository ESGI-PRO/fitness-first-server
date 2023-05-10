import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { InvoicesService } from './invoices.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';

@Controller()
export class InvoicesController {
  constructor(private readonly invoicesService: InvoicesService) {}

  @MessagePattern('createInvoice')
  create(@Payload() createInvoiceDto: CreateInvoiceDto) {
    return this.invoicesService.create(createInvoiceDto);
  }

  @MessagePattern('findAllInvoices')
  findAll() {
    return this.invoicesService.findAll();
  }

  @MessagePattern('findByUserId')
  findByUserId(@Payload() id: string){
    return this.invoicesService.findByUserId(id);
  }

  @MessagePattern('findOneInvoice')
  findOne(@Payload() id: string) {
    return this.invoicesService.findOne(id);
  }

  @MessagePattern('updateInvoice')
  update(@Payload() updateInvoiceDto: UpdateInvoiceDto) {
    return this.invoicesService.update(updateInvoiceDto.id, updateInvoiceDto);
  }

  @MessagePattern('removeInvoice')
  remove(@Payload() id: string) {
    return this.invoicesService.remove(id);
  }
}
