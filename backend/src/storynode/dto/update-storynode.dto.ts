import { PartialType } from '@nestjs/swagger';
import { CreateStorynodeDto } from './create-storynode.dto';

export class UpdateStorynodeDto extends PartialType(CreateStorynodeDto) {}
