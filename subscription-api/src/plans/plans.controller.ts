import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PlansService } from './plans.service';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';

@Controller()
export class PlansController {
  constructor(private readonly plansService: PlansService) {}

  @MessagePattern('createPlan')
  create(@Payload() createPlanDto: CreatePlanDto) {
    return this.plansService.create(createPlanDto);
  }

  @MessagePattern('findAllPlans')
  findAll() {
    return this.plansService.findAll();
  }

  @MessagePattern('findOnePlan')
  findOne(@Payload() id: string) {
    return this.plansService.findOne(id);
  }

  @MessagePattern('updatePlan')
  update(@Payload() updatePlanDto: UpdatePlanDto) {
    return this.plansService.update(updatePlanDto.id, updatePlanDto);
  }

  @MessagePattern('removePlan')
  remove(@Payload() id: string) {
    return this.plansService.remove(id);
  }
}
