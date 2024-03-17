import { Test, TestingModule } from '@nestjs/testing';
import { StorylineService } from './storyline.service';

describe('StorylineService', () => {
  let service: StorylineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StorylineService],
    }).compile();

    service = module.get<StorylineService>(StorylineService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
