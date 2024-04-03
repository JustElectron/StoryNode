import { Controller, Get, Post, Body, Param, Delete, NotFoundException, Put, HttpCode, HttpStatus } from '@nestjs/common';
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
    return this.storylineService.findOne(+id)
      .then((val) => {
        if (!val){
          throw new NotFoundException(`A storyline with ID ${id} was not found!`);
        }
        return val;
      });
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateStorylineDto: UpdateStorylineDto) {
    return this.storylineService.update(+id, updateStorylineDto)
      .then((val) => {
        if (!val){
          throw new NotFoundException(`A storyline with ID ${id} was not found!`);
        }
        return val;
      });
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.storylineService.remove(+id)
      .then((val) => {
        if (!val){
          throw new NotFoundException(`A storyline with ID ${id} was not found!`);
        }
        return;
      });
  }
}
