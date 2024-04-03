import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Storyline } from './entities/storyline.entity';
import { CreateStorylineDto } from './dto/create-storyline.dto';
import { UpdateStorylineDto } from './dto/update-storyline.dto';

@Injectable()
export class StorylineService {
  constructor(
    @InjectRepository(Storyline) private storyLineRepository: Repository<Storyline>
    ) {}

  create(createStorylineDto: CreateStorylineDto) {
    const newStoryLine = this.storyLineRepository.create(createStorylineDto);
    return this.storyLineRepository.save(newStoryLine);
  }

  findAll() {
    return this.storyLineRepository.find();
  }

  findOne(id: number) {
    return this.storyLineRepository.findOneBy({id: id});
  }

  update(id: number, updateStorylineDto: UpdateStorylineDto) {
    return this.storyLineRepository.update(id, updateStorylineDto)
      .then(() => {return this.findOne(id)});
  }

  remove(id: number) {
    return this.findOne(id)
      .then ((val) => {
        if (!val) {
          return val;
        }
        return this.storyLineRepository.remove(val)
      })
  }
}
