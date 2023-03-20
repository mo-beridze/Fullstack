/* eslint-disable react/react-in-jsx-scope */
import { Redirect, Route } from 'react-router-dom';
import { APP_KEYS } from '../common/consts';
import { Props } from '../common/types/props.types';

export default function PrivateRouter({ children, restricted = false }: Props) {
  const isLoggedIn = localStorage.getItem('token');
  const shouldRedirect = isLoggedIn !== null && restricted;
  return <Route>{shouldRedirect ? <Redirect to={APP_KEYS.ROUTER_KEYS.TODOS} /> : children}</Route>;
}
