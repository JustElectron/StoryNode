import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StorylineModule } from './storyline/storyline.module';

@Module({
  imports: [
    DatabaseModule,
    StorylineModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
