import { Test, TestingModule } from '@nestjs/testing';
import { StorynodeService } from './storynode.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { StoryNode, NodeTypes } from './entities/storynode.entity';
import { Repository } from 'typeorm';
import { UpdateStorynodeDto } from './dto/update-storynode.dto';
import { CreateStorynodeDto } from './dto/create-storynode.dto';

const id = 1;
const name = 'Intro node';
const text = 'Some good story text here!';
const nodeType = NodeTypes.TEXT_NODE;
const nodeActions = null;
const prevNode = null
const nextNode = {
  id: 2,
  name: "string",
  text: "string",
  nodeType: NodeTypes.TEXT_NODE,
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

const storyNodeArray = [
  storyNode1
]

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
            save: jest.fn().mockResolvedValue(storyNode1),
            update: jest.fn().mockResolvedValue(storyNode1),
            findOneBy: jest.fn().mockResolvedValue(storyNode1),
            find: jest.fn().mockResolvedValue(storyNodeArray),
            remove: jest.fn().mockResolvedValue(true),
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

  describe('getAll', () => {
    it('should return an array of storyNodes', async () => {
      const storyNodes = await service.findAll();
      expect(storyNodes).toEqual(storyNodeArray);
    });
  });

  describe('getOne', () => {
    it('should return a storyNodes', async () => {
      const repoSpy = jest.spyOn(repo, "findOneBy")
      const storyNode = await service.findOne(1);
      expect(storyNode).toEqual(storyNode1);
      expect(repoSpy).toHaveBeenCalledWith({id: 1})
    });
  });

  describe('create', () => {
    it('should create a new storyNodes', async () => {
      const createStoryNodeDTO: CreateStorynodeDto = {
        name: name,
        text: text,
        nodeType: nodeType,
        nodeActions: nodeActions,
        prevNodeId: prevNode};
      const storyNode = await service.create(createStoryNodeDTO)
      expect(storyNode).toEqual(storyNode1);
      expect(repo.create).toHaveBeenCalledTimes(1)
      expect(repo.create).toHaveBeenCalledWith(createStoryNodeDTO)
      expect(repo.save).toHaveBeenCalledTimes(1)
    });
  });

  describe('update', () => {
    it('should update an existing storyNodes', async () => {
      const updateStorynodeDto: UpdateStorynodeDto = {
        name: "New name",
        text: "Some different text"};
      const storyNode = await service.update(1, updateStorynodeDto)
      expect(storyNode).toEqual(storyNode1);
      expect(repo.update).toHaveBeenCalledTimes(1)
      expect(repo.update).toHaveBeenCalledWith(1, updateStorynodeDto)
    });
  });

  describe('delete', () => {
    it('should delete an existing storyNodes', async () => {
      const deleteResult = await service.remove(1)
      expect(deleteResult).toEqual(true);
      expect(repo.remove).toHaveBeenCalledTimes(1)
      expect(repo.remove).toHaveBeenCalledWith(storyNode1)
    });
  });
});
