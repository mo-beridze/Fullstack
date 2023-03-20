/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import {
  Grid,
  Box,
  Button,
  TextField,
  Paper,
  Typography,
  CardContent,
  CardActions,
  Card,
  Pagination
} from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import InputAdornment from '@mui/material/InputAdornment';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import { responsivePaperStyle } from './todo-container-mobile.styled';
import { useDeleteTodoById, useFetchTodos } from '../../../../query/queriesTodo';
import { ROUTER_KEYS } from '../../../consts/app-keys.const';

export const TodoContainerOnMobile = () => {
  const [status, setStatus] = useState<string | undefined>();
  const [search, setSearch] = useState<string | undefined>('');
  const deleteTodo = useDeleteTodoById();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const size: number = 5;
  const { data } = useFetchTodos(status, search, String(currentPage), String(size));
  const todos = data?.todos.slice(0, 5);

  const searchFilter = (event: ChangeEvent<HTMLInputElement>): void => {
    if (data) {
      setSearch(event.currentTarget.value);
    }
  };
  const buttonHandler = (id: string) => {
    deleteTodo.mutate(id);
  };
  const changeCurrentPage = (event: React.ChangeEvent<unknown>, value: number) =>
    setCurrentPage(value);
  return (
    <Paper elevation={0} style={responsivePaperStyle}>
      <Grid
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        style={{
          width: 450,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around'
        }}
      >
        <TextField
          sx={{ width: 150, justifyContent: 'center', alignItems: 'center' }}
          value={search}
          onChange={searchFilter}
          type="text"
          size="small"
          label="Search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ZoomInIcon />
              </InputAdornment>
            )
          }}
        />
        <Button
          size="small"
          variant="contained"
          component={Link}
          to={`${ROUTER_KEYS.CREATE_TODO}`}
          endIcon={<AddBoxIcon />}
          sx={{ marginTop: 2, backgroundColor: 'green' }}
        >
          Add Todo
        </Button>
        <Box justifyContent="center" sx={{ marginTop: 2 }}>
          <Button
            size="small"
            variant="contained"
            sx={{ marginLeft: 2 }}
            onClick={() => setStatus(undefined)}
          >
            All
          </Button>
          <Button
            size="small"
            variant="contained"
            onClick={() => setStatus('pending')}
            sx={{ marginLeft: 2 }}
          >
            Pending
          </Button>
          <Button
            size="small"
            variant="contained"
            onClick={() => setStatus('completed')}
            sx={{ marginLeft: 2 }}
          >
            Completed
          </Button>
        </Box>
        {data &&
          todos?.map((todo) => (
            <Card
              key={todo._id}
              sx={{
                marginTop: 2,
                justifyContent: 'space-between',
                flexDirection: 'column',
                display: 'flex',
                width: 450
              }}
            >
              <CardContent sx={{ justifyContent: 'center', alignItems: 'center' }}>
                <Typography gutterBottom variant="h5" component="div" textAlign="center">
                  {todo.topic}
                </Typography>
                <Typography variant="h6" color="text.secondary" textAlign="center">
                  {todo.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'space-between', position: 'static' }}>
                <Button
                  component={Link}
                  to={`${ROUTER_KEYS.TODOS}/${todo._id}`}
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{ marginLeft: 3 }}
                >
                  Edit
                </Button>
                <Button
                  sx={{ marginRight: 3 }}
                  size="large"
                  variant="contained"
                  onClick={() => buttonHandler(todo._id)}
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
          ))}
        <Box justifyContent="center" alignItems="center" display="flex" sx={{ margin: '20px 0px' }}>
          {data && (
            <Pagination
              count={Math.ceil(data.count / size)}
              defaultPage={1}
              page={currentPage}
              onChange={changeCurrentPage}
            />
          )}
        </Box>
      </Grid>
    </Paper>
  );
};
