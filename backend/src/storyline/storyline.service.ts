import { Injectable } from '@nestjs/common';
import { CreateStorylineDto } from './dto/create-storyline.dto';
import { UpdateStorylineDto } from './dto/update-storyline.dto';

@Injectable()
export class StorylineService {
  create(createStorylineDto: CreateStorylineDto) {
    return 'This action adds a new storyline';
  }

  findAll() {
    return `This action returns all storyline`;
  }

  findOne(id: number) {
    return `This action returns a #${id} storyline`;
  }

  update(id: number, updateStorylineDto: UpdateStorylineDto) {
    return `This action updates a #${id} storyline`;
  }

  remove(id: number) {
    return `This action removes a #${id} storyline`;
  }
}
