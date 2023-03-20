import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import { ROUTER_KEYS } from '../common/consts/app-keys.const';
import { buttonStyled } from './home.styled';

export default function HomePageContainer() {
  return (
    <Grid
      container
      spacing={1}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}
    >
      <Box display="flex">
        <Button
          size="large"
          component={Link}
          to={ROUTER_KEYS.REGISTER}
          style={buttonStyled}
          variant="contained"
        >
          Register
        </Button>
      </Box>
      <Box display="flex">
        <Button
          size="large"
          component={Link}
          to={ROUTER_KEYS.LOGIN}
          style={buttonStyled}
          variant="contained"
        >
          Account
        </Button>
      </Box>
    </Grid>
  );
}
