import { Injectable } from '@nestjs/common';
import { CreateStorynodeDto } from './dto/create-storynode.dto';
import { UpdateStorynodeDto } from './dto/update-storynode.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { StoryNode } from './entities/storynode.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StorynodeService {
  constructor(
    @InjectRepository(StoryNode) private storyNodeRepository: Repository<StoryNode>
  ) {}
  updateNodeRelations(storyNodeDTO: CreateStorynodeDto | UpdateStorynodeDto, thisNode: StoryNode) {
    if (storyNodeDTO.nextNodeId) {
      this.storyNodeRepository.findOneBy({id: storyNodeDTO.nextNodeId})
        .then((nextNode) => {this.storyNodeRepository.update(nextNode.id, {prevNodeId: thisNode.id})})
    }
    if (storyNodeDTO.prevNodeId) {
      this.storyNodeRepository.findOneBy({id: storyNodeDTO.prevNodeId})
        .then((prevNode) => {this.storyNodeRepository.update(prevNode.id, {nextNodeId: thisNode.id})})
    }
  }

  create(createStorynodeDto: CreateStorynodeDto) {
    const newStoryNode = this.storyNodeRepository.create(createStorynodeDto);
    return this.storyNodeRepository.save(newStoryNode)
      .then((newNode) => {
        this.updateNodeRelations(createStorynodeDto,newNode)
        return newNode;
      });
  }

  findAll() {
    return this.storyNodeRepository.find({relations: {prevNode: true, nextNode: true}});
  }

  findOne(id: number) {
    return this.storyNodeRepository.findOneBy({id: id});
  }

  update(id: number, updateStorynodeDto: UpdateStorynodeDto) {
    return this.storyNodeRepository.update(id, updateStorynodeDto)
      .then(() => {
        return this.findOne(id)
          .then((thisNode) => {
            this.updateNodeRelations(updateStorynodeDto, thisNode);
            return thisNode;
          });
    });
  }

  remove(id: number) {
    return this.findOne(id)
      .then ((val) => {
        if (!val) {
          return val;
        }
        return this.storyNodeRepository.remove(val)
      })
  }
}
