import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Body, Post } from '@nestjs/common';
import { SignupDTO } from './dto/signup-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(@Body() data: SignupDTO) {

  }
}
