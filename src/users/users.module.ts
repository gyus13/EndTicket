import { forwardRef, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entity/users.entity';
import { AuthModule } from '../auth/auth.module';
import { Inquiry } from '../entity/inquirement.entity';
import {UsersQuery} from "./users.query";

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Inquiry]),
    forwardRef(() => AuthModule),
  ],
  controllers: [UsersController],
  providers: [UsersService, UsersQuery],
  exports: [UsersService],
})
export class UsersModule {}
