import { ErrorCode } from '@/enums/error-code.enums';
import BaseError from '@/utils/error/base.error';

export async function authenticate(req: any, res: any, next: any) {
  try {
    console.log('request header', req.headers);

    const setcretKey: string = req.header('X-SECRET-KEY');
    if (!setcretKey) {
      throw new BaseError(ErrorCode.AUTH_01, 'Authorization header is required');
    }

    const SERVER_SECRET_KEY = process.env.SECRET_KEY || '';

    if (setcretKey !== SERVER_SECRET_KEY) {
      throw new BaseError(ErrorCode.AUTH_01, 'Invalid secret key');
    }

    next();
  } catch (error) {
    next(error);
  }
}
