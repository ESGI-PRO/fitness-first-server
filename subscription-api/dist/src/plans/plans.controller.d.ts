import { PlansService } from './plans.service';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';
export declare class PlansController {
    private readonly plansService;
    constructor(plansService: PlansService);
    create(createPlanDto: CreatePlanDto): any;
    findAll(): any;
    findOne(id: string): any;
    update(updatePlanDto: UpdatePlanDto): any;
    remove(id: string): any;
}
