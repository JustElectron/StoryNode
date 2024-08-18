import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoryNode } from './entities/storynode.entity';
import { StorynodeService } from './storynode.service';
import { StorynodeController } from './storynode.controller';

@Module({
  imports: [TypeOrmModule.forFeature([StoryNode])],
  controllers: [StorynodeController],
  providers: [StorynodeService],
})
export class StorynodeModule {}
