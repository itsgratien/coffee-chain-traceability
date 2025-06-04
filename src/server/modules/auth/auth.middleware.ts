import { NextRequest } from 'next/server';
import type { RequestContext } from '@/types/Connect';
import { NextHandler } from 'next-connect';

export class AuthMiddleware {
  isAuth = async (
    req: NextRequest,
    event: RequestContext,
    next: NextHandler,
  ) => {
    return next();
  };
}
