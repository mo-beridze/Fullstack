/* eslint-disable react/react-in-jsx-scope */
import { Redirect, Route } from 'react-router-dom';
import { APP_KEYS } from '../common/consts';
import { Props } from '../common/types/props.types';

// export interface Props {
//   children?: React.ReactNode;
//   path: string;
// }

export default function PrivateRouter({ children, ...routeProps }: Props) {
  const isLoggedIn = localStorage.getItem('token');
  return (
    <Route {...routeProps}>
      {isLoggedIn !== null ? children : <Redirect to={APP_KEYS.ROUTER_KEYS.LOGIN} />}
    </Route>
  );
}
