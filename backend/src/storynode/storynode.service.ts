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
  create(createStorynodeDto: CreateStorynodeDto) {
    const newStoryNode = this.storyNodeRepository.create(createStorynodeDto);
    return this.storyNodeRepository.save(newStoryNode)
      .then((newNode) => {
        if (createStorynodeDto.nextNodeId) {
          this.storyNodeRepository.findOneBy({id: createStorynodeDto.nextNodeId})
            .then((nextNode) => {this.storyNodeRepository.update(nextNode.id, {prevNodeId: newNode.id})})
        }
        if (createStorynodeDto.prevNodeId) {
          this.storyNodeRepository.findOneBy({id: createStorynodeDto.prevNodeId})
            .then((prevNode) => {this.storyNodeRepository.update(prevNode.id, {nextNodeId: newNode.id})})
        }
        return newNode
      });
  }

  findAll() {
    return this.storyNodeRepository.find({relations: {prevNode: true, nextNode: true}})
  }

  findOne(id: number) {
    return `This action returns a #${id} storynode`;
  }

  update(id: number, updateStorynodeDto: UpdateStorynodeDto) {
    return `This action updates a #${id} storynode`;
  }

  remove(id: number) {
    return `This action removes a #${id} storynode`;
  }
}
