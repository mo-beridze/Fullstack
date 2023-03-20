/* eslint-disable import/no-cycle */
import { useContext } from 'react';
import { useMutation } from 'react-query';
import { useHistory } from 'react-router-dom';
import { IsLoggedInContext } from '../app';
import { ROUTER_KEYS } from '../common/consts/app-keys.const';
import {
  IUserEmail,
  IUserResetPassword,
  IUserSignIn,
  IUserSignUp
} from '../common/types/auth.types';
import AuthService from '../service/auth.service';

const authService = new AuthService();

export const useRegister = () => {
  const history = useHistory();
  const { setIsLoggedIn } = useContext(IsLoggedInContext);
  return useMutation((user: IUserSignUp) => authService.registerUser(user), {
    onSuccess: (data) => {
      if (data === 'This email is already in use') {
        return data;
      }
      localStorage.setItem('token', data);
      const token = localStorage.getItem('token');
      if (token) {
        history.push(`${ROUTER_KEYS.TODOS}`);
        setIsLoggedIn(true);
      }
    }
  });
};

export const useLogin = () => {
  const history = useHistory();
  const { setIsLoggedIn } = useContext(IsLoggedInContext);
  return useMutation((user: IUserSignIn) => authService.loginUser(user), {
    onSuccess: (data) => {
      if (data === 'Wrong password') {
        return data;
      }
      if (data === 'No user found with this email') {
        return data;
      }
      localStorage.setItem('token', data);
      history.push(`${ROUTER_KEYS.TODOS}`);
      setIsLoggedIn(true);
    }
  });
};

export const useResetPassword = () =>
  useMutation((user: IUserResetPassword) => authService.resetPasswordUser(user));

export const useGetUserByEmail = () =>
  useMutation((email: IUserEmail) => authService.getUser(email));
