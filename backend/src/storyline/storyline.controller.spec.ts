import { Test, TestingModule } from '@nestjs/testing';
import { StorylineController } from './storyline.controller';
import { StorylineService } from './storyline.service';

describe('StorylineController', () => {
  let controller: StorylineController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StorylineController],
      providers: [StorylineService],
    }).compile();

    controller = module.get<StorylineController>(StorylineController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
