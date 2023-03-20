/* eslint-disable import/no-cycle */
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import { Grid } from '@mui/material';
import { APP_KEYS } from '../common/consts';
import PrivateRoute from './private.route';
import PublicRoute from './public.route';
import ApplicationBar from '../navbar/app-bar';

const HomePageContainer = lazy(() => import('../home'));
const RegisterPageContainer = lazy(
  () => import('../common/components/auth/register/register.components')
);
const LoginPageContainer = lazy(() => import('../common/components/auth/login/login.component'));
const TodoView = lazy(() => import('../common/components/todo/todo-view/todo-view.components'));
const ResetPasswordPageContainer = lazy(
  () => import('../common/components/auth/reset/reset-password.components')
);
const CreateTodoContainer = lazy(
  () => import('../common/components/todo/creat-todo/createTodoContainer')
);
const EditTodoContainer = lazy(
  () => import('../common/components/todo/edit-todo/edit-todo-container')
);

export const MainRouter = () => (
  <Router>
    <Suspense
      fallback={
        <Grid container alignItems="center" display="flex" justifyContent="center">
          <RotatingLines
            strokeColor="grey"
            strokeWidth="4"
            animationDuration="0.75"
            width="96"
            visible
          />
        </Grid>
      }
    >
      <Grid>
        <Grid sx={{ marginTop: '64px', paddingBottom: '10px' }}>
          <ApplicationBar />
        </Grid>
        <Switch>
          <PublicRoute exact path={APP_KEYS.ROUTER_KEYS.ROOT}>
            <HomePageContainer />
          </PublicRoute>
          <PublicRoute exact path={APP_KEYS.ROUTER_KEYS.LOGIN} restricted>
            <LoginPageContainer />
          </PublicRoute>
          <PrivateRoute exact path={APP_KEYS.ROUTER_KEYS.CHANGE_PASSWORD}>
            <ResetPasswordPageContainer />
          </PrivateRoute>
          <PublicRoute exact path={APP_KEYS.ROUTER_KEYS.REGISTER} restricted>
            <RegisterPageContainer />
          </PublicRoute>
          <PrivateRoute exact path={APP_KEYS.ROUTER_KEYS.TODOS}>
            <TodoView />
          </PrivateRoute>
          <PrivateRoute path={APP_KEYS.ROUTER_KEYS.CREATE_TODO}>
            <CreateTodoContainer />
          </PrivateRoute>
          <PrivateRoute exact path={APP_KEYS.ROUTER_KEYS.TODO_EDIT}>
            <EditTodoContainer />
          </PrivateRoute>
        </Switch>
      </Grid>
    </Suspense>
  </Router>
);
