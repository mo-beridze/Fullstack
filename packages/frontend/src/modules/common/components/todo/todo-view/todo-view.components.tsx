import React from 'react';
import { useTheme, useMediaQuery } from '@mui/material';
import { TodoContainerOnDesktop } from '../todo-сontainer-on-desktop';
import { TodosContainerOnTablet } from '../todo-container-on-tablet/todos-container-tablet';
import { TodoContainerOnMobile } from '../todo-container-on-mobile';

export default function TodoView() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
  if (isTablet && isMobile) {
    return <TodoContainerOnMobile />;
  }
  return (
    <>
      {isDesktop && <TodoContainerOnDesktop />}
      {isTablet && <TodosContainerOnTablet />}
    </>
  );
}
