import { Controller, Get, Post, Body, Put, Param, Delete, UseInterceptors, ClassSerializerInterceptor, HttpCode, HttpStatus, NotFoundException } from '@nestjs/common';
import { StorynodeService } from './storynode.service';
import { CreateStorynodeDto } from './dto/create-storynode.dto';
import { UpdateStorynodeDto } from './dto/update-storynode.dto';

@Controller('storynode')
export class StorynodeController {
  constructor(private readonly storynodeService: StorynodeService) {}

  @Post()
  @UseInterceptors(ClassSerializerInterceptor)
  create(@Body() createStorynodeDto: CreateStorynodeDto) {
    return this.storynodeService.create(createStorynodeDto);
  }

  @Get()
  @UseInterceptors(ClassSerializerInterceptor)
  findAll() {
    return this.storynodeService.findAll();
  }

  @Get(':id')
  @UseInterceptors(ClassSerializerInterceptor)
  findOne(@Param('id') id: string) {
    return this.storynodeService.findOne(+id)
    .then((val) => {
      if (!val){
        throw new NotFoundException(`A storyNode with ID ${id} was not found!`);
      }
      return val;
    });
  }

  @Put(':id')
  @UseInterceptors(ClassSerializerInterceptor)
  update(@Param('id') id: string, @Body() updateStorynodeDto: UpdateStorynodeDto) {
    return this.storynodeService.update(+id, updateStorynodeDto)
    .then((val) => {
      if (!val){
        throw new NotFoundException(`A storyNode with ID ${id} was not found!`);
      }
      return val;
    });
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.storynodeService.remove(+id)
      .then((val) => {
        if (!val){
          throw new NotFoundException(`A storyNode with ID ${id} was not found!`);
        }
        return;
      });
  }
}
