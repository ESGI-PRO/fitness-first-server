import { Controller, HttpStatus } from '@nestjs/common';
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

  @MessagePattern('findInvoicesByUserId')
  async findByUserId(@Payload() id: string){
    const invoices = await this.invoicesService.findByUserId(id);
    if(invoices){
      return {
        status: HttpStatus.OK,
        message: "get_user_invoices_success",
        invoices: invoices
      }
    }else{
      return {
        status: HttpStatus.NOT_FOUND,
        message: 'get_user_invoices_not_found',
        invoices: null
      }
    }
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
