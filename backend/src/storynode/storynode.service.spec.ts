import { Test, TestingModule } from '@nestjs/testing';
import { StorynodeService } from './storynode.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { StoryNode } from './entities/storynode.entity';
import { Repository } from 'typeorm';

const id = 1;
const name = 'Intro node';
const text = 'Some good story text here!';
const nodeType = 'textNode';
const nodeActions = null;
const prevNode = null
const nextNode = {
  id: 2,
  name: "string",
  text: "string",
  nodeType: "textNode",
  nodeActions: null
};

const storyNode1 = {
  id: id,
  name: name,
  text: text,
  nodeType: nodeType,
  nodeAction: nodeActions,
  prevNode: prevNode,
  nextNode: nextNode}

describe('StorynodeService', () => {
  let service: StorynodeService;
  let repo: Repository<StoryNode>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StorynodeService,
        {
          provide: getRepositoryToken(StoryNode),
          useValue: {
            create: jest.fn().mockResolvedValue(storyNode1),
            update: jest.fn().mockResolvedValue(storyNode1),
            findOne: jest.fn().mockResolvedValue(storyNode1),
            findAll: jest.fn().mockResolvedValue([storyNode1]),
            remove: jest.fn().mockResolvedValue(null),
          },
        },
      ],
    }).compile();

    service = module.get<StorynodeService>(StorynodeService);
    repo = module.get<Repository<StoryNode>>(getRepositoryToken(StoryNode))
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
