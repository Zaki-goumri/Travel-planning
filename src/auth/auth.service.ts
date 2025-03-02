import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaClient, User } from '@prisma/client';
import { UserService } from '../user/user.service';
import emailValidator from 'email-validator';
import { JwtService } from '@nestjs/jwt';

type SigninInput = {
  email: string;
  password: string;
};

type SignupInput = {
  email: string;
  password: string;
  name: string;
};

@Injectable()
export class AuthService {
  private prisma: PrismaClient;

  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {
    try {
      this.prisma = new PrismaClient();
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to initialize PrismaClient: ${error.message}`);
      } else {
        throw new Error('Failed to initialize PrismaClient: Unknown error');
      }
    }
  }

  async signup(
    data: SignupInput,
  ): Promise<User & { accessToken: string; refreshToken: string }> {
    try {
      if (!emailValidator.validate(data.email)) {
        throw new BadRequestException('Invalid email');
      }
      const user = await this.userService.findByEmail(data.email);
      if (user) {
        throw new BadRequestException('User already exists');
      }
      const hashedPassword = await this.userService.hashPassword(data.password);
      const newUser = await this.prisma.user.create({
        data: {
          email: data.email,
          password: hashedPassword,
          name: data.name,
        },
      });
      const payload = { email: newUser.email, sub: newUser.id };
      const token = await this.jwtService.signAsync(payload);
      return {
        ...newUser,
        accessToken: token,
        refreshToken: token,
      };
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      } else {
        throw new BadRequestException(`Failed to sign up: ${error as any}`);
      }
    }
  }

  async signin(
    data: SigninInput,
  ): Promise<User & { accessToken: string; refreshToken: string }> {
    try {
      if (!emailValidator.validate(data.email)) {
        throw new BadRequestException('Invalid email');
      }
      const user = await this.userService.findByEmail(data.email);
      if (!user) {
        throw new BadRequestException('User not found');
      }
      const isPasswordValid = await this.userService.validatePassword(
        data.password,
        user.password,
      );
      if (!isPasswordValid) {
        throw new UnauthorizedException('wrong email or password');
      }
      const payload = { email: user.email, sub: user.id };
      const token = await this.jwtService.signAsync(payload);
      return {
        ...user,
        accessToken: token,
        refreshToken: token,
      };
    } catch (error) {
      if (
        error instanceof BadRequestException ||
        error instanceof UnauthorizedException
      ) {
        throw error;
      } else {
        throw new BadRequestException(`Failed to sign in: ${error as any}`);
      }
    }
  }
}
