import { Test, TestingModule } from '@nestjs/testing';
import { MaturityController } from './maturity.controller';

describe('MaturityController', () => {
  let controller: MaturityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MaturityController],
    }).compile();

    controller = module.get<MaturityController>(MaturityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
