import React, { useContext, useState } from 'react';
import { Paper, CssBaseline, makeStyles, Box, Container, Button, TextField, Typography, FormControl, Input, InputLabel, FormHelperText } from '@material-ui/core';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import SpacingDesign from './context/design.jsx';
import Chart from './Chart.jsx';

const Form = (props) => {

  return (
    <Box>
      <Paper style={{
        ...SpacingDesign.marginy(3),
        flexBasis: '40%',
        flexGrow: 0.5,
        overflow: 'hidden',
        borderRadius: '0',
        width: '40vh'
      }}>
        <Box display='flex' flexDirection='column' align='center' style={{
          marginBottom: '1vh',
          marginLeft: '1vh',
          marginRight: '1vh',
          fontSize: '1em'
        }}>

          <TextField id="form-input" type='number' required name='initial' label="Initial Savings" onChange={props.change} helperText='The starting savings value' />
          <TextField id="form-input" type='number' required name='currentYear' label="Current Year" onChange={props.change} helperText='The current year of the year you want to start saving' />
          <TextField id="form-input" type='number' required name='income' label="Salary" onChange={props.change} helperText='Your annual salary' />
          <TextField id="form-input" type='number' required name='years' label="Years Until Retirement" onChange={props.change}
            helperText='Roughly how many more years do you expect to work before you retire?' />
          <TextField id="form-input" type='number' required name='contribution' label="Monthly Contribution" onChange={props.change}
            helperText='Percentage or you Monthy pay you wish to contribute.' />
          <TextField id="form-input" type='number' required name='growth' label="Estimated Growth Rate" onChange={props.change}
            helperText='How much do you expect your savings to grow each year? (percentage)' />
          <TextField id="form-input" type='number' required name='variance' label="Growth Rate Variance" onChange={props.change}
            helperText='Range of interest rates (above and below the rate set above) that you desire to see results for.' />
        </Box>

        <Button display='flex' justifycontent='flex-end' color='primary' style={{
          marginBottom: '2vh',
          marginLeft: '2vh',
          marginRight: '1vh',
        }} onClick={props.submit}>Submit</Button>
      </Paper>
    </Box>

  )
}

export default Form;