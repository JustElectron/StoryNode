import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StorylineService } from './storyline.service';
import { CreateStorylineDto } from './dto/create-storyline.dto';
import { UpdateStorylineDto } from './dto/update-storyline.dto';

@Controller('storyline')
export class StorylineController {
  constructor(private readonly storylineService: StorylineService) {}

  @Post()
  create(@Body() createStorylineDto: CreateStorylineDto) {
    return this.storylineService.create(createStorylineDto);
  }

  @Get()
  findAll() {
    return this.storylineService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.storylineService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStorylineDto: UpdateStorylineDto) {
    return this.storylineService.update(+id, updateStorylineDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.storylineService.remove(+id);
  }
}
