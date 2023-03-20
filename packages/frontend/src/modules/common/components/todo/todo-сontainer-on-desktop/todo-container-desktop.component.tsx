/* eslint-disable react/react-in-jsx-scope */
import React, { useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import InputAdornment from '@mui/material/InputAdornment';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Box, Grid, Button, TextField, Pagination } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { RotatingLines } from 'react-loader-spinner';
import { useDeleteTodoById, useFetchTodos } from '../../../../query/queriesTodo';
import { ROUTER_KEYS } from '../../../consts/app-keys.const';

export const TodoContainerOnDesktop = () => {
  const [status, setStatus] = useState<string | undefined>();
  const [search, setSearch] = useState<string | undefined>('');
  const deleteTodo = useDeleteTodoById();
  const [currentPage, setCurrentPage] = useState<number | undefined>(1);
  const size: number = 5;

  const { data, isLoading } = useFetchTodos(status, search, String(currentPage), String(size));

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
    <Grid
      container
      spacing={1}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ marginTop: '30px' }}
    >
      <Box justifyContent="center">
        <Button variant="contained" sx={{ marginLeft: 2 }} onClick={() => setStatus(undefined)}>
          All
        </Button>
        <Button variant="contained" onClick={() => setStatus('pending')} sx={{ marginLeft: 2 }}>
          Pending
        </Button>
        <Button variant="contained" onClick={() => setStatus('completed')} sx={{ marginLeft: 2 }}>
          Completed
        </Button>
        <Button
          variant="contained"
          component={Link}
          to={`${ROUTER_KEYS.CREATE_TODO}`}
          endIcon={<AddBoxIcon />}
          sx={{ marginLeft: 5, backgroundColor: 'green' }}
        >
          Add Todo
        </Button>
        <TextField
          helperText="Enter at least one word"
          value={search}
          onChange={searchFilter}
          id="search"
          type="text"
          size="medium"
          label="Search"
          sx={{ marginLeft: 60 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ZoomInIcon />
              </InputAdornment>
            )
          }}
        />
      </Box>
      {isLoading && (
        <RotatingLines
          strokeColor="grey"
          strokeWidth="4"
          animationDuration="0.75"
          width="96"
          visible
        />
      )}
      <TableContainer component={Paper} sx={{ maxWidth: 1200, marginTop: 5 }}>
        <Table sx={{ minWidth: 450 }}>
          <TableHead>
            <TableRow>
              <TableCell width="30%" sx={{ fontWeight: 'bold' }}>
                Topic
              </TableCell>
              <TableCell width="30%" align="right" sx={{ fontWeight: 'bold' }}>
                Description
              </TableCell>
              <TableCell width="80%" align="right" sx={{ fontWeight: 'bold' }}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.todos.map((row) => (
                <TableRow key={row._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {row.topic}
                  </TableCell>
                  <TableCell align="right">{row.description}</TableCell>
                  <TableCell align="right">
                    <Button
                      sx={{ marginRight: 2 }}
                      type="submit"
                      variant="contained"
                      onClick={() => buttonHandler(row._id)}
                      startIcon={<DeleteIcon />}
                    >
                      Delete
                    </Button>
                    <Link to={`${ROUTER_KEYS.TODOS}/${row._id}`}>Edit</Link>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
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
  );
};
