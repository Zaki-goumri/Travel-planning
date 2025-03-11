import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
  Inject,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '@prisma/client';
import { UserService } from '../user/user.service';
import emailValidator from 'email-validator';
import { JwtService } from '@nestjs/jwt';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

type SigninInput = {
  email: string;
  password: string;
};

type SignupInput = {
  email: string;
  password: string;
  name: string;
};

type GoogleUser = {
  email: string;
  firstName: string;
  lastName: string;
};

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private prisma: PrismaService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.findByEmail(email);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      console.log(password);
      return result;
    }
    return null;
  }

  async googleLogin(
    user: GoogleUser,
  ): Promise<(User & { accessToken: string; refreshToken: string }) | string> {
    if (!user) {
      return 'No user from google';
    }
    let existingUser = await this.userService.findByEmail(user.email);
    if (!existingUser) {
      existingUser = await this.prisma.user.create({
        data: {
          email: user.email,
          name: `${user.firstName} ${user.lastName}`,
          provider: 'google',
        },
      });
    }
    const payload = { email: existingUser.email, sub: existingUser.id };
    const accessToken = await this.jwtService.signAsync(payload, {
      expiresIn: '60s',
    });
    const refreshToken = await this.jwtService.signAsync(
      { sub: existingUser.id },
      {
        expiresIn: '7d',
      },
    );
    await this.setUserInCache(existingUser);
    return { accessToken, refreshToken, ...existingUser };
  }

  async signup(
    data: SignupInput,
  ): Promise<User & { accessToken: string; refreshToken: string }> {
    try {
      if (!emailValidator.validate(data.email)) {
        throw new BadRequestException('Invalid email');
      }
      if (!data.password) {
        throw new BadRequestException('Password cannot be null');
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
      await this.setUserInCache(newUser);
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

  async setUserInCache(user: User) {
    try {
      await this.cacheManager.set(`user_id_${user.id}`, user, 3600 * 60);
      await this.cacheManager.set(`user_email_${user.email}`, user, 3600 * 60);
    } catch (error) {
      console.error('Failed to cache user data:', error);
    }
  }

  async signin(
    data: SigninInput,
  ): Promise<User & { accessToken: string; refreshToken: string }> {
    try {
      const cachedUser = await this.cacheManager.get<User | null>(
        `user_email_${data.email}`,
      );
      if (cachedUser) {
        const payload = { email: cachedUser.email, sub: cachedUser.id };
        const accessToken = await this.jwtService.signAsync(payload, {
          expiresIn: '60s',
        });
        const refreshToken = await this.jwtService.signAsync(
          { sub: cachedUser.id },
          {
            expiresIn: '7d',
          },
        );
        return {
          ...cachedUser,
          accessToken: accessToken,
          refreshToken: refreshToken,
        };
      }
      if (!emailValidator.validate(data.email)) {
        throw new BadRequestException('Invalid email');
      }
      if (!data.password) {
        throw new BadRequestException('Password cannot be null');
      }
      const user = await this.userService.findByEmail(data.email);
      if (!user) {
        throw new BadRequestException('User not found');
      }
      if (!user.password) {
        throw new BadRequestException('User has no password');
      }
      const isPasswordValid = await this.userService.validatePassword(
        data.password,
        user.password,
      );
      if (!isPasswordValid) {
        throw new UnauthorizedException('wrong email or password');
      }
      const payload = { email: user.email, sub: user.id };
      const accessToken = await this.jwtService.signAsync(payload, {
        expiresIn: '60s',
      });
      const refreshToken = await this.jwtService.signAsync(
        { sub: user.id },
        {
          expiresIn: '7d',
        },
      );
      try {
        await this.cacheManager.set(
          `user_email_${data.email}`,
          user,
          1000 * 60,
        );
      } catch (error) {
        console.error('Failed to cache user data:', error);
      }
      await this.setUserInCache(user);
      return {
        ...user,
        accessToken: accessToken,
        refreshToken: refreshToken,
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
