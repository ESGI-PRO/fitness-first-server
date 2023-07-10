import { Test, TestingModule } from '@nestjs/testing';
import { ExercicesService } from './exercices.service';

describe('ExercicesService', () => {
  let service: ExercicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExercicesService],
    }).compile();

    service = module.get<ExercicesService>(ExercicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
