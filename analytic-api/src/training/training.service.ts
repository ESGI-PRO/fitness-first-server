import { Injectable } from '@nestjs/common';

@Injectable()
export class TrainingService {
    
    getTrainingNumbers(): number {
        return 20;
    }
}
