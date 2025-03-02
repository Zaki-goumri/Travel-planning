import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Body, Post } from '@nestjs/common';
import { SignupDTO, SigninDTO } from './dto/signup-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(@Body() data: SignupDTO) {
    return await this.authService.signup(data);
  }
  @Post('signin')
  async signin(@Body() data: SigninDTO) {
    return await this.authService.signin(data);
  }
}
