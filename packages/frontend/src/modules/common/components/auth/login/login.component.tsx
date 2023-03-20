/* eslint-disable import/no-cycle */
import React, { useEffect } from 'react';
import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik, FormikProps } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import { ROUTER_KEYS } from '../../../consts/app-keys.const';
import {
  responsivePaperStyle,
  headerStyle,
  textField,
  boxButton,
  paperStyle
} from './login.styled';
import { useLogin } from '../../../../query/queriesUser';
import 'react-toastify/dist/ReactToastify.css';
import { IUserSignIn } from '../../../types/auth.types';

export default function LoginPageContainer() {
  const { mutate, data } = useLogin();
  const showToastMessage = (text: string) => {
    toast.error(text, {
      position: toast.POSITION.TOP_RIGHT
    });
  };
  useEffect(() => {
    if (data === 'Wrong password') {
      showToastMessage('Wrong password');
    }
    if (data === 'No user found with this email') {
      showToastMessage('No user found with this email');
    }
  }, [data]);

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      onSubmit={(values, { resetForm }) => {
        mutate(values);
        localStorage.setItem('email', values.email);
        resetForm();
      }}
      validationSchema={Yup.object({
        email: Yup.string().email().required('Required'),
        password: Yup.string().min(4).required('Required')
      })}
    >
      {(props: FormikProps<IUserSignIn>) => (
        <Grid>
          {isMatch ? (
            <Paper elevation={20} style={responsivePaperStyle}>
              <Grid alignItems="center">
                <Typography align="center" style={headerStyle} variant="h5">
                  Sign In
                </Typography>
                <Typography variant="caption" gutterBottom>
                  Please fill this form to LogIn in your account !
                </Typography>
              </Grid>
              <form onSubmit={props.handleSubmit}>
                <TextField
                  type="email"
                  style={textField}
                  fullWidth
                  label="Email"
                  id="email"
                  placeholder="Enter your name"
                  value={props.values.email}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                />
                {props.errors.email && <div id="email">{props.errors.email}</div>}
                <TextField
                  type="password"
                  style={textField}
                  fullWidth
                  label="Password"
                  id="password"
                  placeholder="Enter your password"
                  value={props.values.password}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                />
                {props.errors.password && <div id="password">{props.errors.password}</div>}
                <Box style={boxButton} justifyContent="space-between" alignItems="center">
                  <Button
                    component={Link}
                    to={ROUTER_KEYS.ROOT}
                    type="submit"
                    variant="contained"
                    sx={{
                      backgroundColor: '#427AA1',
                      '&:hover': {
                        backgroundColor: '#EBF2FA',
                        color: 'black'
                      }
                    }}
                  >
                    Back
                  </Button>
                  <Button
                    disabled={!props.isValid}
                    type="submit"
                    variant="contained"
                    sx={{
                      backgroundColor: '#427AA1',
                      '&:hover': {
                        backgroundColor: '#EBF2FA',
                        color: 'black'
                      }
                    }}
                  >
                    Sign In
                  </Button>
                </Box>
              </form>
            </Paper>
          ) : (
            <Paper elevation={20} style={paperStyle}>
              <Grid alignItems="center">
                <Typography align="center" style={headerStyle} variant="h5">
                  Sign In
                </Typography>
              </Grid>
              <Grid>
                <Typography align="center" variant="body1" gutterBottom>
                  Please fill this form to LogIn in your account !
                </Typography>
              </Grid>
              <form onSubmit={props.handleSubmit}>
                <TextField
                  type="email"
                  style={textField}
                  fullWidth
                  label="Email"
                  id="email"
                  placeholder="Enter your email"
                  value={props.values.email}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                />
                {props.errors.email && <div id="email">{props.errors.email}</div>}
                <TextField
                  type="password"
                  style={textField}
                  fullWidth
                  label="Password"
                  id="password"
                  placeholder="Enter your password"
                  value={props.values.password}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                />
                {props.errors.password && <div id="password">{props.errors.password}</div>}
                <Box style={boxButton} justifyContent="space-between" alignItems="center">
                  <Button
                    component={Link}
                    to={ROUTER_KEYS.ROOT}
                    type="submit"
                    variant="contained"
                    sx={{
                      backgroundColor: '#427AA1',
                      '&:hover': {
                        backgroundColor: '#EBF2FA',
                        color: 'black'
                      }
                    }}
                  >
                    Back
                  </Button>
                  <Button
                    disabled={!props.isValid}
                    type="submit"
                    variant="contained"
                    sx={{
                      backgroundColor: '#427AA1',
                      '&:hover': {
                        backgroundColor: '#EBF2FA',
                        color: 'black'
                      }
                    }}
                  >
                    Sign In
                  </Button>
                </Box>
              </form>
              <ToastContainer />
            </Paper>
          )}
        </Grid>
      )}
    </Formik>
  );
}
