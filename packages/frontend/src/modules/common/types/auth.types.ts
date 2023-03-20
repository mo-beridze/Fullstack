export interface IUserSignUp {
  email: string;
  password: string;
  avatar: string;
}
export interface IUserSignIn {
  email: string;
  password: string;
}
export interface IUserResetPassword {
  email: string;
  oldPassword: string;
  newPassword: string;
}
export interface IUserEmail {
  email: string | null;
}
