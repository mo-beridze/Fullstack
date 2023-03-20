import { Request } from 'express';
import AuthService from '../services/auth.service';
import { IUser, IUserResetPassword, IUserSignIn } from '../types/auth.type';

export class AuthController {
  constructor(private authService: AuthService) {}

  async register(_: Request<IUser>) {
    const { email, password, avatar } = _.body;
    const user = await this.authService.signUp({ email, password, avatar });
    return user;
  }

  async login(_: Request<IUserSignIn>) {
    const { email, password } = _.body;
    const token = await this.authService.signIn(email, password);
    return token;
  }

  async resetPassword(_: Request<IUserResetPassword>) {
    const { oldPassword, newPassword } = _.body;
    const { _id: userId } = _.user;
    const todo = await this.authService.changePassword(userId, oldPassword, newPassword);
    return todo;
  }

  async getUserByEmail(_: Request) {
    const { email } = _.body;
    const user = await this.authService.findUserByEmail(email);
    return user;
  }
}
const authController = new AuthController(new AuthService());
export default authController;
