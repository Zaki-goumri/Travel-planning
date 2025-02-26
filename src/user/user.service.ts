import { Injectable } from '@nestjs/common';
import { PrismaClient, User } from '@prisma/client';
import bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  private prisma: PrismaClient;

  constructor() {
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

  async hashPassword(password: string): Promise<string> {
    try {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      return hashedPassword;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to hash password: ${error.message}`);
      } else {
        throw new Error('Failed to hash password: Unknown error');
      }
    }
  }

  async findByEmail(email: string): Promise<User | null> {
    try {
      return await this.prisma.user.findUnique({
        where: { email },
      });
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to find user by email: ${error.message}`);
      } else {
        throw new Error('Failed to find user by email: Unknown error');
      }
    }
  }
}
