import bcrypt = require('bcrypt');
import jwt from 'jsonwebtoken';
import { ValidationError } from '../middleware/error';
import User from '../models/User';
import { IUser } from '../types/auth.type';

export default class AuthService {
  async signUp(body: IUser): Promise<string> {
    const { email, password, avatar } = body;
    const user = new User({ email, password: await bcrypt.hash(password, 10), avatar });
    if (!user) {
      throw new ValidationError('This email is already in use');
    }
    await user.save();
    const token = jwt.sign(
      {
        _id: user._id,
        avatar: user.avatar
      },
      process.env.JWT_SECRET
    );
    return token;
  }

  async signIn(email: string, password: string): Promise<string> {
    const user = await User.findOne({ email });
    if (!user) {
      throw new ValidationError('No user found with this email');
    }
    if (!(await bcrypt.compare(password, user.password))) {
      throw new ValidationError('Wrong password');
    }
    const token = jwt.sign(
      {
        _id: user._id,
        avatar: user.avatar
      },
      process.env.JWT_SECRET
    );
    return token;
  }

  async changePassword(userId: string, oldPassword: string, newPassword: string) {
    const user = await User.findById(userId);
    if (user) {
      const compare = bcrypt.compareSync(oldPassword, user.password);
      if (!compare) {
        throw new Error('Wrong old password');
      }
      if (oldPassword === newPassword) {
        throw new Error('This password is already in use');
      }
      const hashPassword = await bcrypt.hash(newPassword, 10);
      const newUser = await User.findByIdAndUpdate(
        userId,
        { password: hashPassword },
        { new: true }
      );
      return newUser;
    }
  }

  async findUserByEmail(email: string) {
    const user = await User.findOne({ email });
    return user;
  }
}
