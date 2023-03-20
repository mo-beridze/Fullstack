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
  boxButton,
  headerStyle,
  paperStyle,
  responsivePaperStyle,
  textField
} from './register.styled';
import { useRegister } from '../../../../query/queriesUser';
import { IUserSignUp } from '../../../types/auth.types';
import 'react-toastify/dist/ReactToastify.css';

export default function RegisterPageContainer() {
  const { data, mutate } = useRegister();
  const showToastMessage = (text: string) => {
    toast.error(text, {
      position: toast.POSITION.TOP_RIGHT
    });
  };
  useEffect(() => {
    if (data === 'This email is already in use') {
      showToastMessage('This email is already in use');
    }
  }, [data]);

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        avatar: ''
      }}
      onSubmit={(values, { resetForm }) => {
        mutate(values);
        localStorage.setItem('email', values.email);
        resetForm();
      }}
      validationSchema={Yup.object({
        email: Yup.string().email().required('Required'),
        password: Yup.string().required('Required'),
        avatar: Yup.string().min(3).required('Required')
      })}
    >
      {(props: FormikProps<IUserSignUp>) => (
        <Grid>
          {isMatch ? (
            <Paper elevation={20} style={responsivePaperStyle}>
              <Grid alignItems="center">
                <Typography align="center" style={headerStyle} variant="h5">
                  Sign Up
                </Typography>
                <Typography variant="caption" gutterBottom>
                  Please fill this form to create an account !
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
                <TextField
                  type="text"
                  style={textField}
                  fullWidth
                  label="Avatar"
                  id="avatar"
                  placeholder="Confirm your password"
                  value={props.values.avatar}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                />
                {props.errors.avatar && <div id="avatar">{props.errors.avatar}</div>}
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
                    Sign up
                  </Button>
                </Box>
              </form>
            </Paper>
          ) : (
            <Paper elevation={20} style={paperStyle}>
              <Grid alignItems="center">
                <Typography align="center" style={headerStyle} variant="h5">
                  Sign Up
                </Typography>
                <Typography variant="caption" gutterBottom>
                  Please fill this form to create an account !
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
                <TextField
                  type="text"
                  style={textField}
                  fullWidth
                  label="Confirm Avatar"
                  id="avatar"
                  placeholder="Confirm your avatar"
                  value={props.values.avatar}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                />
                {props.errors.avatar && <div id="avatar">{props.errors.avatar}</div>}
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
                    Sign up
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
