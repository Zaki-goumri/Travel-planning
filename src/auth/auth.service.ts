import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaClient, User } from '@prisma/client';
import { UserService } from '../user/user.service';
import emailValidator from 'email-validator';

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

  constructor(private userService: UserService) {
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

  async signup(data: SignupInput): Promise<string> {
    try {
      if (!emailValidator.validate(data.email)) {
        throw new BadRequestException('Invalid email');
      }
      const user = await this.userService.findByEmail(data.email);
      if (user) {
        throw new BadRequestException('User already exists');
      }
      const hashedPassword = await this.userService.hashPassword(data.password);
      await this.prisma.user.create({
        data: {
          email: data.email,
          password: hashedPassword,
          name: data.name,
        },
      });
      return 'You are registered';
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      } else {
        throw new BadRequestException('Failed to sign up: Unknown error');
      }
    }
  }

  async signin(data: SigninInput): Promise<User> {
    try {
      if (!emailValidator.validate(data.email)) {
        throw new BadRequestException('Invalid email');
      }
      const user = await this.userService.findByEmail(data.email);
      if (!user) {
        throw new BadRequestException('User not found');
      }
      return user;
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      } else {
        throw new BadRequestException('Failed to sign in: Unknown error');
      }
    }
  }
}
