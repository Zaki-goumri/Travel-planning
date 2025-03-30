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
import { ElasticSearchModule } from './elastic-search/elastic-search.module';
import { DestinationService } from './destination/destination.service';
import { DestinationController } from './destination/destination.controller';
import { ElasticsearchIndexService } from './elastic-search/elasticsearch-index.service';

@Module({
  imports: [
    AuthModule,
    UserModule,
    PrismaModule,
    ConfigModule.forRoot({ isGlobal: true }),
    CacheModule.registerAsync(RedisOptions),
    ElasticSearchModule,
  ],
  controllers: [AppController, DestinationController],
  providers: [
    AppService,
    PrismaService,
    DestinationService,
    ElasticsearchIndexService,
  ],
})
export class AppModule {}
