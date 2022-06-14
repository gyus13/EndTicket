import {
  createParamDecorator,
  ExecutionContext,
  HttpException,
} from '@nestjs/common';
import { regularExp } from '../../config/regularExp';
import { response } from '../../config/response.utils';

export const AddTicket = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const body = ctx.switchToHttp().getRequest().body;
    if (!body.title) {
      throw new HttpException('제목을 입력해 주세요.', 201);
    }
    return body;
  },
);