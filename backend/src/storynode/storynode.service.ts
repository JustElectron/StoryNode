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
    console.log(createStorynodeDto)
    const newStoryNode = this.storyNodeRepository.create(createStorynodeDto);
    console.log(newStoryNode)
    return this.storyNodeRepository.save(newStoryNode);
  }

  findAll() {
    return this.storyNodeRepository.find();
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
