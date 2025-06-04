import { AuthController } from '@/server/modules/auth/auth.controller';

export const POST = async (req: Request) => {
  const body = await req.json();

  const authCtrl = new AuthController();

  return await authCtrl.login(body);
};
