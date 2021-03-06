import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt/jwt.strategy';
import { GoogleStrategy } from './passport/google.strategy';
import { AuthController } from './auth.controller';
import {User} from "../entity/users.entity";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Character} from "../entity/character.entity";
import {AuthQuery} from "./auth.query";

@Module({
  imports: [
    TypeOrmModule.forFeature([User,Character]),
    //* JwtService를 사용하기위해서 import 해준다.
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '1y' },
    }),
    forwardRef(() => UsersModule),
  ],
  providers: [AuthService, JwtStrategy, GoogleStrategy, AuthQuery],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
