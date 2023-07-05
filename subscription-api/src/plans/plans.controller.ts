import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PlansService } from './plans.service';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';

@Controller()
export class PlansController {
  constructor(private readonly plansService: PlansService) {}

  @MessagePattern('create_plan')
  create(@Payload() createPlanDto: CreatePlanDto) {
    return this.plansService.create(createPlanDto);
  }

  @MessagePattern('find_all_plans')
  findAll() {
    return this.plansService.findAll();
  }

  @MessagePattern('find_one_plan')
  findOne(@Payload() id: string) {
    return this.plansService.findOne(id);
  }

  @MessagePattern('update_plan')
  update(@Payload() updatePlanDto: UpdatePlanDto) {
    return this.plansService.update(updatePlanDto.id, updatePlanDto);
  }

  @MessagePattern('remove_plan')
  remove(@Payload() id: string) {
    return this.plansService.remove(id);
  }
}
