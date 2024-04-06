import { Test, TestingModule } from '@nestjs/testing';
import { StorynodeController } from './storynode.controller';
import { StorynodeService } from './storynode.service';

describe('StorynodeController', () => {
  let controller: StorynodeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StorynodeController],
      providers: [StorynodeService],
    }).compile();

    controller = module.get<StorynodeController>(StorynodeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
