import { Test, TestingModule } from '@nestjs/testing';
import { SubcriptionsController } from './subcriptions.controller';
import { SubcriptionsService } from './subcriptions.service';

describe('SubcriptionsController', () => {
  let controller: SubcriptionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubcriptionsController],
      providers: [SubcriptionsService],
    }).compile();

    controller = module.get<SubcriptionsController>(SubcriptionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
