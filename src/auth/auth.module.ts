import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { jwtConstants } from './auth.constants';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { GoogleStrategy } from './googlel.strategy';

@Module({
  controllers: [AuthController],
  providers: [AuthService, GoogleStrategy],
  imports: [
    UserModule,
    JwtModule.register({
      secret: jwtConstants.secret,
    }),
    PassportModule.register({ defaultStrategy: 'google' }),
  ],
})
export class AuthModule {}
