import { Controller, Get } from '@nestjs/common';
import { TrainingService } from './training.service';

@Controller('training')
export class TrainingController {
    constructor(private readonly trainingService: TrainingService ) {}

    @Get()
    getTrainingNumber(): number {
        return this.trainingService.getTrainingNumbers();
    }
}
