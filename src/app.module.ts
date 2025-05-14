import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { CacheModule } from '@nestjs/cache-manager';
import { RedisOptions } from './configs/redis.configs';
import { ConfigModule } from '@nestjs/config';
import { DestinationService } from './destination/destination.service';
import { DestinationController } from './destination/destination.controller';

@Module({
  imports: [
    AuthModule,
    UserModule,
    PrismaModule,
    ConfigModule.forRoot({ isGlobal: true }),
    CacheModule.registerAsync(RedisOptions),
  ],
  controllers: [AppController, DestinationController],
  providers: [AppService, PrismaService, DestinationService],
  exports: [AppService],
})
export class AppModule {}
