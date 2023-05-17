import { Test, TestingModule } from '@nestjs/testing';
import { RecettesController } from './recettes.controller';

describe('RecettesController', () => {
  let controller: RecettesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecettesController],
    }).compile();

    controller = module.get<RecettesController>(RecettesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
