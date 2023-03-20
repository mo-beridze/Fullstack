/* eslint-disable import/no-cycle */
import React, { useContext, useEffect } from 'react';
import { AppBar, Button, CssBaseline, Toolbar, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { ROUTER_KEYS } from '../common/consts/app-keys.const';
import { IsLoggedInContext } from '../app';
import { useGetUserByEmail } from '../query/queriesUser';

export default function ApplicationBar() {
  const { isLoggedIn, setIsLoggedIn } = useContext(IsLoggedInContext);
  const { mutate, data } = useGetUserByEmail();

  const userEmail = localStorage.getItem('email');
  useEffect(() => {
    mutate({ email: userEmail });
  }, [userEmail]);

  const resetToken = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    setIsLoggedIn(false);
  };

  return (
    <AppBar
      sx={{
        backgroundColor: '#EEECE3'
      }}
    >
      <CssBaseline />
      <Toolbar>
        <Grid
          container
          item
          xs={12}
          sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}
        >
          {!isLoggedIn ? (
            <>
              <Button
                component={Link}
                to={ROUTER_KEYS.LOGIN}
                sx={{
                  display: 'flex',

                  color: '#EEECE3',
                  backgroundColor: '#292A2D',
                  borderRadius: '20px',
                  '&:hover': {
                    backgroundColor: '#EEECE3',
                    color: '#292A2D'
                  }
                }}
                size="large"
              >
                LogIn
              </Button>
              <Button
                component={Link}
                to={ROUTER_KEYS.REGISTER}
                variant="contained"
                size="large"
                sx={{
                  marginLeft: 3,
                  color: '#EEECE3',
                  backgroundColor: '#292A2D',
                  borderRadius: '20px',
                  '&:hover': {
                    backgroundColor: '#EEECE3',
                    color: '#292A2D'
                  }
                }}
              >
                Register
              </Button>
            </>
          ) : (
            <>
              {data && (
                <Typography align="left" sx={{ marginRight: 3, color: '#292A2D' }} variant="h6">
                  Hello, {data.avatar}
                </Typography>
              )}
              <Button
                component={Link}
                to={ROUTER_KEYS.CHANGE_PASSWORD}
                variant="contained"
                size="large"
                sx={{
                  display: 'flex',
                  color: '#EEECE3',
                  backgroundColor: '#292A2D',
                  borderRadius: '20px',
                  '&:hover': {
                    backgroundColor: '#EEECE3',
                    color: '#292A2D'
                  }
                }}
              >
                Password
              </Button>
              <Button
                onClick={resetToken}
                variant="contained"
                size="large"
                sx={{
                  marginLeft: 3,
                  display: 'flex',
                  color: '#EEECE3',
                  backgroundColor: '#292A2D',
                  borderRadius: '20px',
                  '&:hover': {
                    backgroundColor: '#EEECE3',
                    color: '#292A2D'
                  }
                }}
              >
                LogOut
              </Button>
            </>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
