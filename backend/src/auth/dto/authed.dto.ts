import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class AuthedDTO {
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}