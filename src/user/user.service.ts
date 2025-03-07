import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '@prisma/client';
import bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

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

  async validatePassword(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    try {
      return await bcrypt.compare(password, hashedPassword);
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        throw error;
      } else {
        throw new Error('Failed to validate password: Unknown error');
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
