import { PickType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { User } from '../users.entity';

export class UserLogInDTO extends PickType(User, ['email'] as const) {
  @IsString()
  @IsNotEmpty({ message: '비밀번호를 작성해주세요.' })
  password: string;
}
