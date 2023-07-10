import { Test, TestingModule } from '@nestjs/testing';
import { ExercicesController } from './exercices.controller';

describe('ExercicesController', () => {
  let controller: ExercicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExercicesController],
    }).compile();

    controller = module.get<ExercicesController>(ExercicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
