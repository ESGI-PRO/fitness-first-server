import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { SubcriptionsService } from './subcriptions.service';
import { CreateSubcriptionDto } from './dto/create-subcription.dto';
import { UpdateSubcriptionDto } from './dto/update-subcription.dto';

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

  @MessagePattern('findByUserId')
  findByUserId(@Payload() id: string){
    return this.subcriptionsService.findByUserId(id);
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
