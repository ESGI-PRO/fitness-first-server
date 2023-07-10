import { Test, TestingModule } from '@nestjs/testing';
import { ExercicesOnTrainingService } from './exercices-on-training.service';

describe('ExercicesOnTrainingService', () => {
  let service: ExercicesOnTrainingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExercicesOnTrainingService],
    }).compile();

    service = module.get<ExercicesOnTrainingService>(ExercicesOnTrainingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
