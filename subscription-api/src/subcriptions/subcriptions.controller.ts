import { Controller, HttpStatus } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { SubcriptionsService } from './subcriptions.service';
import { CreateSubcriptionDto } from './dto/create-subcription.dto';
import { UpdateSubcriptionDto } from './dto/update-subcription.dto';
import { ISubcriptionResponse } from '../interfaces/findSubscriptionsByUserId.interface';

@Controller()
export class SubcriptionsController {
  constructor(private readonly subcriptionsService: SubcriptionsService) {}

  @MessagePattern('createSubcription')
  create(@Payload() createSubcriptionDto: CreateSubcriptionDto) {
    return this.subcriptionsService.create(createSubcriptionDto);
  }

  @MessagePattern('findAllSubcriptions')
  findAll() {
    return this.subcriptionsService.findAll();
  }

  @MessagePattern('findUserSubcriptions')
  async findByUserId(@Payload() id: string) : Promise<ISubcriptionResponse>  {
    const subcriptions =  await this.subcriptionsService.findByUserId(id);
    if(subcriptions){
      return {
        status: HttpStatus.OK,
        message: "get_user_subscription_success",
        subscriptions: subcriptions
      }
    }else{
      return {
        status: HttpStatus.NOT_FOUND,
        message: 'get_user_id_not_found',
        subscriptions: null
      }
    }

  }

  @MessagePattern('findOneSubcription')
  findOne(@Payload() id: string) {
    return this.subcriptionsService.findOne(id);
  }

  @MessagePattern('updateSubcription')
  update(@Payload() updateSubcriptionDto: UpdateSubcriptionDto) {
    return this.subcriptionsService.update(updateSubcriptionDto.id, updateSubcriptionDto);
  }

  @MessagePattern('removeSubcription')
  remove(@Payload() id: string) {
    return this.subcriptionsService.remove(id);
  }
}
