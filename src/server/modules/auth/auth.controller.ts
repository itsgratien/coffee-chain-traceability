import jwt from 'jsonwebtoken';
import type { AuthDTO } from './auth.dto';
import httpCode from 'http-status-codes';

export class AuthController {
  private readonly storage = {
    email: process.env.AUTH_EMAIL as string,
    username: process.env.AUTH_USERNAME as string,
    password: process.env.AUTH_PASSWORD as string,
  };

  private readonly generateToken = (payload: {
    username: string;
    email: string;
  }) => {
    const secretKey = process.env.SECRET_KEY as string;
    const gen = jwt.sign(payload, secretKey, { expiresIn: '2h' });

    return gen;
  };

  login = async ({ email, password }: AuthDTO) => {
    if (email !== this.storage.email) {
      return Response.json(
        { message: 'unauthorized access' },
        { status: httpCode.UNAUTHORIZED },
      );
    }

    if (password !== this.storage.password) {
      return Response.json(
        { message: 'unauthorized access' },
        { status: httpCode.UNAUTHORIZED },
      );
    }

    const token = this.generateToken({
      email,
      username: this.storage.username,
    });

    return Response.json(
      {
        message: 'Logged in successfully',
        data: { token, user: { username: this.storage.username } },
      },
      { status: httpCode.OK },
    );
  };
}
