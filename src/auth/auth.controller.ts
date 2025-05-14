/* eslint-disable */
import { Controller, Inject } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Body, Post, HttpCode, HttpStatus, Res } from '@nestjs/common';
import SignupDTO from './dto/signup-auth.dto';
import SigninDTO from './dto/signin-auth.dto';
import { Response } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { Get, Req, UseGuards } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { UserService } from '../user/user.service';

interface OauthRequest extends Request {
  user: {
    email: string;
    firstName: string;
    lastName: string;
  };
}

@Controller('auth')
export class AuthController {
  constructor(
    private userService: UserService,
    private readonly authService: AuthService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

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
    try {
      await this.cacheManager.set(`user_id_${user.id}`, user, 3600 * 60);
      await this.cacheManager.set(`user_email_${data.email}`, user, 3600 * 60);
    } catch (error) {
      console.error('Failed to cache user data:', error);
    }

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
  async googleAuth() {}

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req: OauthRequest, @Res() res: Response) {
    const userData = req.user;
    const result = await this.authService.googleLogin(userData);
    if (typeof result === 'string') {
      res.status(HttpStatus.BAD_REQUEST).send(result);
      return;
    }
    const { accessToken, refreshToken, ...user } = result;
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      sameSite: 'none',
      secure: true,
    });
    res.header('Authorization', `Bearer ${accessToken}`);
    res.status(HttpStatus.ACCEPTED).redirect('/api');
    return user;
  }
}
