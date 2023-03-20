import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MobileStepper from '@mui/material/MobileStepper';
import img from './image.jpg';
import { useFetchTodos, useDeleteTodoById } from '../../../../query/queriesTodo';
import { ROUTER_KEYS } from '../../../consts/app-keys.const';

export function TodosContainerOnTablet() {
  const { data } = useFetchTodos();
  const deleteTodo = useDeleteTodoById();

  const buttonHandler = (id: string) => {
    deleteTodo.mutate(id);
  };
  const [activeStep, setActiveStep] = useState<number>(0);
  let maxSteps: number = 1;
  if (data) {
    maxSteps = data.todos.length;
  }
  const handleNext = () => {
    setActiveStep((prevActiveStep): number => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep): number => prevActiveStep - 1);
  };
  return (
    <Grid
      container
      spacing={1}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ height: ' 100vh ' }}
    >
      <Card
        sx={{
          maxHeight: '100%',
          overflow: 'auto',
          justifyContent: 'space-between',
          flexDirection: 'column',
          display: 'flex',
          width: 500,
          height: 475
        }}
        variant="outlined"
        key={data?.todos[activeStep]._id}
      >
        <CardContent>
          <CardMedia sx={{ height: 275 }} image={img} title="worker" />
          <Typography gutterBottom variant="h5" component="div" textAlign="center">
            {data?.todos[activeStep].topic}
          </Typography>
          <Typography variant="h6" color="text.secondary" textAlign="center">
            {data?.todos[activeStep].description}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'space-between' }}>
          <Button
            component={Link}
            to={`${ROUTER_KEYS.TODOS}/${data?.todos[activeStep]._id}`}
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
            onClick={() => buttonHandler(data?.todos[activeStep]._id || '0')}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
      {data && (
        <MobileStepper
          variant="text"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
              Next
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              Back
            </Button>
          }
        />
      )}
    </Grid>
  );
}
