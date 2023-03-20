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
import { Link, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik, FormikProps } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import { ROUTER_KEYS } from '../../../consts/app-keys.const';
import { useFetchTodoById, usePutTodo } from '../../../../query/queriesTodo';
import {
  boxButton,
  headerStyle,
  paperStyle,
  responsivePaperStyle,
  textField
} from './edit-todo-container.styled';
import Todo from '../../../types/todo.types';
import 'react-toastify/dist/ReactToastify.css';

export default function EditTodoContainer() {
  const putTodo = usePutTodo();
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useFetchTodoById(id);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  const showToastMessage = () => {
    toast.success('Todo changed, you can go "back"', {
      position: toast.POSITION.TOP_RIGHT
    });
  };
  if (isLoading) {
    return <div>Pls, wait couple seconds...</div>;
  }
  if (data) {
    return (
      <Formik
        initialValues={{
          topic: data.topic,
          description: data.description,
          status: data.status
        }}
        onSubmit={(values) => {
          showToastMessage();
          const response = { _id: id, ...values };
          putTodo.mutate(response);
        }}
        validationSchema={Yup.object({
          topic: Yup.string()
            .min(3, 'Must be more letter')
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          description: Yup.string()
            .min(3, 'Must be more letter')
            .max(500, 'Must be 15 characters or less')
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
                    Edit Todo
                  </Typography>
                  <Typography variant="caption" gutterBottom>
                    Please fill this form to edit todo !
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
                        Edit
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
                        Edit
                      </Button>
                    )}
                  </Box>
                </form>
              </Paper>
            ) : (
              <Paper elevation={20} style={paperStyle}>
                <Grid alignItems="center">
                  <Typography align="center" style={headerStyle} variant="h5">
                    Edit Todo
                  </Typography>
                  <Typography variant="caption" gutterBottom>
                    Please fill this form to edit todo !
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
                    helperText="This not required option"
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
                    {props.errors.topic || props.errors.description ? (
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
                        Edit
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
                        Edit
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
  return (
    <div>
      <p>Hello</p>
    </div>
  );
}
