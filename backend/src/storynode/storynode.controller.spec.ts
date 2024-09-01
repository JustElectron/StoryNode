import { Test, TestingModule } from '@nestjs/testing';
import { StorynodeController } from './storynode.controller';
import { StorynodeService } from './storynode.service';
import { StoryNode } from './entities/storynode.entity';

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

describe('StorynodeController', () => {
  let controller: StorynodeController;
  let service: StorynodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StorynodeController],
      providers: [
        {
          provide: StorynodeService,
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

    controller = module.get<StorynodeController>(StorynodeController);
    service = module.get<StorynodeService>(StorynodeService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
