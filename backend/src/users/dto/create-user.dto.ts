import { IsEmail, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    displayName: string

    @IsEmail()
    email: string

    // TODO: Add password strength validation
    @IsString()
    password: string
}
