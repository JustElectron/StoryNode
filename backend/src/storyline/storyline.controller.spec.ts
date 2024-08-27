import { Test, TestingModule } from '@nestjs/testing';
import { StorylineController } from './storyline.controller';
import { StorylineService } from './storyline.service';

const id = 1;
const title = "Awsome Story";
const description = "This is the awsome story of how i created this app";
const storyLine1 = {
  id: id,
  title: title,
  description: description,
};

describe('StorylineController', () => {
  let controller: StorylineController;
  let service: StorylineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StorylineController],
      providers: [
        {
          provide: StorylineService,
          useValue: {
            create: jest.fn().mockResolvedValue(storyLine1),
            update: jest.fn().mockResolvedValue(storyLine1),
            findOne: jest.fn().mockResolvedValue(storyLine1),
            findAll: jest.fn().mockResolvedValue([storyLine1]),
            remove: jest.fn().mockResolvedValue(null),
          }
        }
      ],
    }).compile();

    controller = module.get<StorylineController>(StorylineController);
    service = module.get<StorylineService>(StorylineService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
