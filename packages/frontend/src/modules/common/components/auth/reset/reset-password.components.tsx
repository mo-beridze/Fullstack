/* eslint-disable import/no-cycle */
import React from 'react';
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
import { ROUTER_KEYS } from '../../../consts/app-keys.const';
import {
  textField,
  responsivePaperStyle,
  headerStyle,
  boxButton,
  paperStyle
} from './reset-password.styled';
import { IUserResetPassword } from '../../../types/auth.types';
import { useResetPassword } from '../../../../query/queriesUser';

export default function ResetPasswordPageContainer() {
  const { mutate } = useResetPassword();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Formik
      initialValues={{
        email: '',
        oldPassword: '',
        newPassword: ''
      }}
      onSubmit={(values, { resetForm }) => {
        mutate(values);
        resetForm();
      }}
      validationSchema={Yup.object({
        email: Yup.string().email().required('Required'),
        oldPassword: Yup.string().required('Required'),
        newPassword: Yup.string().required('Required')
      })}
    >
      {(props: FormikProps<IUserResetPassword>) => (
        <Grid>
          {isMatch ? (
            <Paper elevation={20} style={responsivePaperStyle}>
              <Grid alignItems="center">
                <Typography align="center" style={headerStyle} variant="h5">
                  Reset password
                </Typography>
                <Typography variant="caption" gutterBottom>
                  Please fill this form to reset your password!
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
                  label="Old password"
                  id="oldPassword"
                  placeholder="Enter your old password"
                  value={props.values.oldPassword}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                />
                {props.errors.oldPassword && (
                  <div id="old-password">{props.errors.oldPassword}</div>
                )}
                <TextField
                  type="password"
                  style={textField}
                  fullWidth
                  label="New password"
                  id="newPassword"
                  placeholder="Enter your new password"
                  value={props.values.newPassword}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                />
                {props.errors.newPassword && (
                  <div id="new-password">{props.errors.newPassword}</div>
                )}
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
                    Confirm
                  </Button>
                </Box>
              </form>
            </Paper>
          ) : (
            <Paper elevation={20} style={paperStyle}>
              <Grid alignItems="center">
                <Typography align="center" style={headerStyle} variant="h5">
                  Reset password
                </Typography>
                <Typography variant="caption" gutterBottom>
                  Please fill this form to reset your password !
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
                  label="Old password"
                  id="oldPassword"
                  placeholder="Enter your old password"
                  value={props.values.oldPassword}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                />
                {props.errors.oldPassword && (
                  <div id="old-password">{props.errors.oldPassword}</div>
                )}
                <TextField
                  type="password"
                  style={textField}
                  fullWidth
                  label="New password"
                  id="newPassword"
                  placeholder="Enter your new password"
                  value={props.values.newPassword}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                />
                {props.errors.newPassword && (
                  <div id="new-password">{props.errors.newPassword}</div>
                )}
                <Box style={boxButton} justifyContent="space-between" alignItems="center">
                  <Button
                    component={Link}
                    to={ROUTER_KEYS.TODOS}
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
                    Confirm
                  </Button>
                </Box>
              </form>
            </Paper>
          )}
        </Grid>
      )}
    </Formik>
  );
}
