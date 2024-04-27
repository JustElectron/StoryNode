import { Controller, Get, Post, Body, Param, Delete, UseInterceptors, ClassSerializerInterceptor, Put, NotFoundException, HttpCode, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id)
      .then((val) => {
        if (!val){
          throw new NotFoundException(`A user with ID ${id} was not found!`);
        }
        return val;
      });
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto)
      .then((val) => {
        if (!val){
          throw new NotFoundException(`A user with ID ${id} was not found!`);
        }
        return val;
      });
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.usersService.remove(id)
      .then((val) => {
        if (!val){
          throw new NotFoundException(`A user with ID ${id} was not found!`);
        }
        return;
      });
  }
}
