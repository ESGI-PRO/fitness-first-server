import { Test, TestingModule } from '@nestjs/testing';
import { ExercicesOnTrainingController } from './exercices-on-training.controller';

describe('ExercicesOnTrainingController', () => {
  let controller: ExercicesOnTrainingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExercicesOnTrainingController],
    }).compile();

    controller = module.get<ExercicesOnTrainingController>(ExercicesOnTrainingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
