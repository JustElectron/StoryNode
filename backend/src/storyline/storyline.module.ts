import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Storyline } from './entities/storyline.entity';
import { StorylineService } from './storyline.service';
import { StorylineController } from './storyline.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Storyline])],
  controllers: [StorylineController],
  providers: [StorylineService],
})
export class StorylineModule {}
