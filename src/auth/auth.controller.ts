/* eslint-disable */
import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Body, Post, HttpCode, HttpStatus, Res } from '@nestjs/common';
import { SignupDTO, SigninDTO } from './dto/signup-auth.dto';
import { Response } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { Get, Req, UseGuards } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post('signup')
  async signup(
    @Res({ passthrough: true }) res: Response,
    @Body() data: SignupDTO,
  ) {
    const result = await this.authService.signup(data);
    const { password, accessToken, refreshToken, ...user } = result;
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      sameSite: 'none',
      secure: true,
    });
    res.header('Authorization', `Bearer ${accessToken}`);
    return user;
  }

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  async signin(
    @Res({ passthrough: true }) res: Response,
    @Body() data: SigninDTO,
  ) {
    const result = await this.authService.signin(data);
    const { password, accessToken, refreshToken, ...user } = result;
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      sameSite: 'none',
      secure: true,
    });
    res.header('Authorization', `Bearer ${accessToken}`);
    return user;
  }

  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth() {
  }

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req: any, @Res() res: any) {
    console.log(req.user);
    res.status(302).redirect('/');
  }
}
