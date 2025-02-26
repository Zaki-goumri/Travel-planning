import { Injectable } from '@nestjs/common';
import { PrismaClient, User } from '@prisma/client';
import { UserService } from '../user/user.service';

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

  async signup(data: SignupInput): Promise<string | Error> {
    try {
      const user = await this.userService.findByEmail(data.email);
      if (user) {
        throw new Error('User already exists');
      }
      const hashedPassword = await this.userService.hashPassword(data.password);
      await this.prisma.user.create({
        data: {
          email: data.email,
          password: hashedPassword,
          name: data.name,
        },
      });
      return 'you are registerd';
    } catch (error) {
      if (error instanceof Error) {
        return new Error(`Failed to create user: ${error.message}`);
      } else {
        return new Error('Failed to create user: Unknown error');
      }
    }
  }

  async signin(data: SigninInput): Promise<User> {
    try {
      const user = await this.userService.findByEmail(data.email);
      if (!user) {
        throw new Error('User not found');
      }
      return user;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to sign in: ${error.message}`);
      } else {
        throw new Error('Failed to sign in: Unknown error');
      }
    }
  }
}
