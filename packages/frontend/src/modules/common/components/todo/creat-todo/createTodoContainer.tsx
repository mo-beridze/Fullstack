import React from 'react';
import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  MenuItem,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { useQueryClient } from 'react-query';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { FormikProps, Formik } from 'formik';
import { toast, ToastContainer } from 'react-toastify';
import Todo from '../../../types/todo.types';
import { ROUTER_KEYS, QUERY_KEYS } from '../../../consts/app-keys.const';
import { usePostTodo } from '../../../../query/queriesTodo';
import {
  boxButton,
  headerStyle,
  paperStyle,
  responsivePaperStyle,
  textField
} from './create-todo-container.styled';
import 'react-toastify/dist/ReactToastify.css';

export default function CreateTodoContainer() {
  const queryClient = useQueryClient();
  const updateQuery = () => {
    queryClient.invalidateQueries(QUERY_KEYS.TODOS);
  };
  const showToastMessage = () => {
    toast.success('Todo created, you can go "back"', {
      position: toast.POSITION.TOP_RIGHT
    });
  };
  const { mutate } = usePostTodo();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Formik
      initialValues={{
        topic: '',
        description: '',
        status: ''
      }}
      onSubmit={(values, { resetForm }) => {
        showToastMessage();
        mutate(values);
        resetForm();
      }}
      validationSchema={Yup.object({
        topic: Yup.string()
          .min(3, 'Must be more letter')
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        description: Yup.string()
          .min(3, 'Must be more letter')
          .max(500, 'Must be 300 characters or less')
          .required('Required'),
        status: Yup.string().required()
      })}
    >
      {(props: FormikProps<Omit<Todo, '_id'>>) => (
        <Grid>
          {isMatch ? (
            <Paper elevation={20} style={responsivePaperStyle}>
              <Grid alignItems="center">
                <Typography align="center" style={headerStyle} variant="h5">
                  Create Todo
                </Typography>
                <Typography variant="caption" gutterBottom>
                  Please fill this form to create todo !
                </Typography>
              </Grid>
              <form onSubmit={props.handleSubmit}>
                <TextField
                  type="text"
                  style={textField}
                  fullWidth
                  label="Topic"
                  id="topic"
                  placeholder="Enter the topic"
                  value={props.values.topic}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                />
                {props.errors.topic && <div id="feedback">{props.errors.topic}</div>}
                <TextField
                  type="text"
                  style={textField}
                  fullWidth
                  label="Description"
                  id="description"
                  placeholder="Enter description"
                  value={props.values.description}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                />
                {props.errors.description && <div id="feedback">{props.errors.description}</div>}
                <TextField
                  type="text"
                  fullWidth
                  id="status"
                  name="status"
                  select
                  label="Status"
                  value={props.values.status}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  defaultValue=""
                >
                  <MenuItem value="pending">Pending</MenuItem>
                  <MenuItem value="completed">Completed</MenuItem>
                </TextField>
                {props.errors.status && <div id="feedback">{props.errors.status}</div>}
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
                  {props.errors.topic ? (
                    <Button
                      disabled
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
                      Create
                    </Button>
                  ) : (
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
                      Create
                    </Button>
                  )}
                </Box>
              </form>
            </Paper>
          ) : (
            <Paper elevation={20} style={paperStyle}>
              <Grid alignItems="center">
                <Typography align="center" style={headerStyle} variant="h5">
                  Create Todo
                </Typography>
                <Typography variant="caption" gutterBottom>
                  Please fill this form to create todo !
                </Typography>
              </Grid>
              <form onSubmit={props.handleSubmit}>
                <TextField
                  type="text"
                  style={textField}
                  fullWidth
                  label="Topic"
                  id="topic"
                  placeholder="Enter the topic"
                  value={props.values.topic}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                />
                {props.errors.topic && <div id="feedback">{props.errors.topic}</div>}
                <TextField
                  rows={3}
                  multiline
                  type="text"
                  style={textField}
                  fullWidth
                  label="Description"
                  id="description"
                  placeholder="Enter description"
                  value={props.values.description}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                />
                {props.errors.description && <div id="feedback">{props.errors.description}</div>}
                <TextField
                  type="text"
                  fullWidth
                  id="status"
                  name="status"
                  select
                  label="Status"
                  value={props.values.status}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  defaultValue=""
                >
                  <MenuItem value="pending">Pending</MenuItem>
                  <MenuItem value="completed">Completed</MenuItem>
                </TextField>
                {props.errors.status && <div id="feedback">{props.errors.status}</div>}
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
                  {props.errors.topic ? (
                    <Button
                      disabled
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
                      Create
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      variant="contained"
                      onClick={updateQuery}
                      sx={{
                        backgroundColor: '#427AA1',
                        '&:hover': {
                          backgroundColor: '#EBF2FA',
                          color: 'black'
                        }
                      }}
                    >
                      Create
                    </Button>
                  )}
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
