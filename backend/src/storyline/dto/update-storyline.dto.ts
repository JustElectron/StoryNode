import { PartialType } from '@nestjs/swagger';
import { CreateStorylineDto } from './create-storyline.dto';

export class UpdateStorylineDto extends PartialType(CreateStorylineDto) {}
