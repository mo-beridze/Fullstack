import HttpService from './http';
import {
  IUserEmail,
  IUserResetPassword,
  IUserSignIn,
  IUserSignUp
} from '../common/types/auth.types';

export default class AuthService extends HttpService {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  getUser(email: IUserEmail) {
    return this.post({
      url: 'auth/user',
      data: email
    });
  }

  registerUser(user: IUserSignUp) {
    return this.post({
      url: 'auth/register',
      data: user
    });
  }

  loginUser(user: IUserSignIn) {
    return this.post({
      url: 'auth/login',
      data: user
    });
  }

  resetPasswordUser(user: IUserResetPassword) {
    return this.put({
      url: 'auth/reset-password',
      data: user
    });
  }
}
