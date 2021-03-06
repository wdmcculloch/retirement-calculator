import React, { useContext, useState } from 'react';
import { Paper, CssBaseline, makeStyles, Box, Container, Button, TextField, Typography, FormControl, Input, InputLabel, FormHelperText } from '@material-ui/core';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import SpacingDesign from './context/design.jsx';
import Chart from './Chart.jsx';

const Form = (props) => {

  return (
    <Box id='form'>
      <Paper style={{
        ...SpacingDesign.marginy(3),
        flexBasis: '40%',
        flexGrow: 0.5,
        overflow: 'hidden',
        borderRadius: '0',
        width: '100%'

      }}>
        <Box display='flex' flexDirection='column' align='center' style={{
          marginBottom: '1vh',
          fontSize: '1rem'
        }} >

          <TextField id="form-input" type='number' required name='initial' label="Initial Savings" onChange={props.change} helperText='The starting savings value' />
          <TextField id="form-input" type='number' required name='currentYear' label="Current Year" onChange={props.change} helperText='The current year of the year you want to start saving' />
          <TextField id="form-input" type='number' required name='income' label="Salary" onChange={props.change} helperText='Your annual salary' />
          <TextField id="form-input" type='number' required name='years' label="Years Until Retirement" onChange={props.change}
            helperText='Roughly how many more years do you expect to work before you retire?' />
          <TextField id="form-input" type='number' required name='contribution' label="Monthly Contribution" onChange={props.change}
            helperText='Percentage or you Monthy pay you wish to contribute.' />
          <TextField id="form-input" type='number' required name='growth' label="Estimated Growth Rate" onChange={props.change}
            helperText='How much do you expect your savings to grow each year? (percentage)' />
        </Box>

        <div id='form-button'>
          <Button variant='contained'style={{
            marginBottom: '2vh',
            marginLeft: '2vh',
            marginRight: '3vh',
          }} onClick={props.submit}>Submit
          </Button>
        </div>
      </Paper>
    </Box>

  )
}

export default Form;