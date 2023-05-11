import { Body, Controller, HttpCode, HttpStatus, Param, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDTO } from './dto';
import { Tokens } from './types';
import { AuthedDTO } from './dto/authed.dto';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { AtGuard, RtGuard } from 'src/common/decorators/guards';
import { GetCurrentUser, GetCurrentUserId, Public } from 'src/common';
import { User } from '@prisma/client';

@Controller('auth')
export class AuthController {
    constructor(private authService : AuthService) {}

     // Access Token & Refresh Token
    @Public()
    @Post('/local/signup')
    @HttpCode(HttpStatus.CREATED)
    signupLocal(@Body() dto: AuthDTO): Promise<Tokens> {
        return this.authService.signupLocal(dto);
    }

    @Public()
    @Post('/local/signin')
    @HttpCode(HttpStatus.OK)
    async signinLocal(@Body() dto: AuthedDTO): Promise<Tokens> {
        return await this.authService.signinLocal(dto)
    }

    @Public()
    @UseGuards(AtGuard)
    @Post('logout')
    @HttpCode(HttpStatus.OK)
    async logout(@GetCurrentUserId() userId?: number) {
        if (userId) {
            return await this.authService.logout(userId);
        } else {
            return { message: 'User not logged in' };
        }
    }    

    // @Public()
    // @Post('logout/:id')
    // @UseGuards(AtGuard)
    // async logout(@Param('id') id: number) {
    //     await this.authService.logout(id);
    // }
      
    @Public()
    @UseGuards(RtGuard)
    @Post('refresh')
    @HttpCode(HttpStatus.OK)
    refreshTokens(
        @GetCurrentUserId() userId: number, 
        @GetCurrentUser('refreshToken') refreshToken: string) {
        return this.authService.refreshTokens(userId, refreshToken);
    }
}

