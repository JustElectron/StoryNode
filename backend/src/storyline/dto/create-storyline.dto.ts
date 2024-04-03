import { IsString } from "class-validator";

export class CreateStorylineDto {
    @IsString()
    title: string;

    @IsString()
    description: string;
}
