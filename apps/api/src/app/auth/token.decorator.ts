import { createParamDecorator, ExecutionContext } from '@nestjs/common';

import { Id } from '@pokemon/test';

export interface Token {
  username: Id;
  id: string;
}

export const InjectToken = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext) => {
    const response = ctx.switchToHttp().getResponse();
    return response.locals.token;
  }
);
