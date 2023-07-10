import { Test, TestingModule } from '@nestjs/testing';
import { SubcriptionsService } from './subcriptions.service';

describe('SubcriptionsService', () => {
  let service: SubcriptionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubcriptionsService],
    }).compile();

    service = module.get<SubcriptionsService>(SubcriptionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
