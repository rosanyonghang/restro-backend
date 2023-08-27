import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { CqrsModule } from '@nestjs/cqrs';
import { User } from '../user/entities/user.entity';
import { NestJwtStrategy } from './passport/strategy/jwt.strategy';
import { AuthenticationController } from './http/controllers/authentication.controller';
import { BcryptService } from './services/bcrypt.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TokenStorageProvider } from './providers/token-storage.provider';
import { DatabaseStrategy } from './passport/strategy/database.strategy';
import { CoreModule } from '../core/core.module';
import { JwtStorage } from './storage/jwt.storage';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { OrganizationService } from '../organization/organization.service';
import { OrganizationModule } from '../organization/organization.module';
import { OrganizationMiddleware } from './http/response/organization.middleware';
import { TokenGuard } from './http/token.guard';
import {ApiKeyService} from "./services/api-key.service";
import {Organization} from "../organization/entities/organization.entity";

@Module({
  imports: [
    CqrsModule,
    TypeOrmModule.forFeature([User, Organization]),
    CoreModule,
    OrganizationModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  providers: [
    DatabaseStrategy,
    TokenGuard,
    NestJwtStrategy,
    TokenStorageProvider,
    BcryptService,
    JwtStorage,
    JwtService,
    OrganizationMiddleware,
    ApiKeyService,
    OrganizationService,
  ],
  controllers: [AuthenticationController],
  exports: [
    BcryptService,
    TokenGuard,
    JwtStorage,
    JwtService,
    OrganizationService,
    ApiKeyService,
    OrganizationMiddleware,
  ],
})
export class AuthenticationModule {}
