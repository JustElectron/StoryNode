import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StorylineModule } from './storyline/storyline.module';

@Module({
  imports: [StorylineModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
