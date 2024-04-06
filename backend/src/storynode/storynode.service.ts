import { Injectable } from '@nestjs/common';
import { CreateStorynodeDto } from './dto/create-storynode.dto';
import { UpdateStorynodeDto } from './dto/update-storynode.dto';

@Injectable()
export class StorynodeService {
  create(createStorynodeDto: CreateStorynodeDto) {
    return 'This action adds a new storynode';
  }

  findAll() {
    return `This action returns all storynode`;
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
