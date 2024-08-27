import { Test, TestingModule } from '@nestjs/testing';
import { StorylineService } from './storyline.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Storyline } from './entities/storyline.entity';
import { Repository } from 'typeorm';

const id = 1;
const title = "Awsome Story";
const description = "This is the awsome story of how i created this app";
const storyLine1 = {
  id: id,
  title: title,
  description: description,
};

describe('StorylineService', () => {
  let service: StorylineService;
  let repo: Repository<Storyline>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StorylineService,
        {
          provide: getRepositoryToken(Storyline),
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

    service = module.get<StorylineService>(StorylineService);
    repo = module.get<Repository<Storyline>>(getRepositoryToken(Storyline));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
