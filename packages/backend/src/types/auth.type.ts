import { Document } from 'mongoose';

export interface IUser {
  email: string;
  password: string;
  avatar: string;
}
export interface IUserSignIn {
  email: string;
  password: string;
  avatar: string;
  token: string;
}

export interface User extends IUser, Document {
  email: string;
  password: string;
  avatar: string;
}
export interface IUserResetPassword {
  email: string;
  oldPassword: string;
  newPassword: string;
}
