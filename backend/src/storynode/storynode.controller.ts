import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { StorynodeService } from './storynode.service';
import { CreateStorynodeDto } from './dto/create-storynode.dto';
import { UpdateStorynodeDto } from './dto/update-storynode.dto';

@Controller('storynode')
export class StorynodeController {
  constructor(private readonly storynodeService: StorynodeService) {}

  @Post()
  create(@Body() createStorynodeDto: CreateStorynodeDto) {
    return this.storynodeService.create(createStorynodeDto);
  }

  @Get()
  findAll() {
    return this.storynodeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.storynodeService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateStorynodeDto: UpdateStorynodeDto) {
    return this.storynodeService.update(+id, updateStorynodeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.storynodeService.remove(+id);
  }
}
