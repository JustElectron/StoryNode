import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StorylineModule } from './storyline/storyline.module';
import { StorynodeModule } from './storynode/storynode.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    DatabaseModule,
    StorylineModule,
    StorynodeModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
