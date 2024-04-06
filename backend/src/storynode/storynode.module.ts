import { Module } from '@nestjs/common';
import { StorynodeService } from './storynode.service';
import { StorynodeController } from './storynode.controller';

@Module({
  controllers: [StorynodeController],
  providers: [StorynodeService],
})
export class StorynodeModule {}
