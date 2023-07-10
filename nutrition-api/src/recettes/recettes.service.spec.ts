import { Test, TestingModule } from '@nestjs/testing';
import { RecettesService } from './recettes.service';

describe('RecettesService', () => {
  let service: RecettesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecettesService],
    }).compile();

    service = module.get<RecettesService>(RecettesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
