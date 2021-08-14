import React, { useContext, useState } from 'react';
import { Paper, CssBaseline, makeStyles, Box, Container, Button, TextField, Typography, FormControl, Input, InputLabel, FormHelperText } from '@material-ui/core';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import SpacingDesign from './context/design.jsx';
import Chart from './Chart.jsx';

const App = (props) => {
  const [initial, setInitial] = useState(0);
  const [income, setIncome] = useState(0);
  const [contribution, setContribution] = useState(0);
  const [years, setYears] = useState(0);
  const [growth, setGrowth] = useState(0);
  const [variance, setVariance] = useState(0);
  const [currentYear, setcurrentYear] = useState(2021);
  const [data, setData] = useState({});

  const handleChange = (e) => {
    e.preventDefault();

    if (e.target.name === 'income') {
      setIncome(Number(e.target.value));
    } else if (e.target.name === 'contribution') {
      setContribution(Number(e.target.value)/100);
    } else if (e.target.name === 'years') {
      setYears(Number(e.target.value));
    } else if (e.target.name === 'growth') {
      setGrowth(Number(e.target.value)/100);
    } else if (e.target.name === 'variance') {
      setVariance(Number(e.target.value)/100);
    } else if (e.target.name === 'initial') {
      setInitial(Number(e.target.value));
    } else if (e.target.name === 'currentYear') {
      setcurrentYear(Number(e.target.value));
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = [];
    let tempCont = income * contribution;
    let sum = tempCont;
    //iterate for input years - counting up from starting years
    for (let i = currentYear; i < (currentYear + years); i++) {
        let obj = {};
        let tempGrowth
        if(data.length === 0) {
            obj.name = i;
            tempGrowth = sum * growth;
            sum += tempGrowth;
            obj.value = sum;
            data.push(obj);
        } else {
            obj.name = i;
            sum += tempCont;
            tempGrowth = sum * growth;
            sum += tempGrowth;
            obj.value = sum;
            data.push(obj);
        }
    }
    console.log(data);
    setData(data);
  }
  return (
    <Container display='flex'>
      <CssBaseline />
      <Paper style={{
        marginTop: '3vh',
        flexBasis: '40%',
        flexGrow: 0.5,
        overflow: 'hidden',
        borderRadius: '0',
        width: '40vh'
      }}>

        {/* <Typography variant='h5' align='center' style={{
          marginTop: '1vh',
        }}>Retirement Calculator</Typography> */}

        <Box display='flex' flexDirection='column' align='center' style={{
          marginBottom: '1vh',
          marginLeft: '1vh',
          marginRight: '1vh',
          fontSize: '1em'
        }}>

          <TextField id="form-input" type='number'  required name='initial' label="Initial Savings" onChange={handleChange} helperText='The starting savings value'/>
          <TextField id="form-input" type='number'  required name='currentYear' label="Current Year" onChange={handleChange} helperText='The current year of the year you want to start saving'/>
          <TextField id="form-input" type='number' required name='income' label="Salary" onChange={handleChange} helperText='Your annual salary'/>
          <TextField id="form-input" type='number' required name='years' label="Years Until Retirement"  onChange={handleChange}
          helperText='Roughly how many more years do you expect to work before you retire?'/>
          <TextField id="form-input" type='number' required name='contribution' label="Monthly Contribution"  onChange={handleChange}
          helperText='Percentage or you Monthy pay you wish to contribute.'/>
          <TextField id="form-input" type='number' required name='growth' label="Estimated Growth Rate"  onChange={handleChange}
          helperText='How much do you expect your savings to grow each year? (percentage)'/>
          <TextField id="form-input" type='number' required name='variance' label="Growth Rate Variance"  onChange={handleChange}
          helperText='Range of interest rates (above and below the rate set above) that you desire to see results for.'/>
        </Box>

        <Button display='flex' justifycontent='flex-end' color='primary' style={{
          marginBottom: '2vh',
          marginLeft: '2vh',
          marginRight: '1vh',
        }} onClick={handleSubmit}>Submit</Button>
      </Paper>

      <Chart data={data} />
    </Container>


  )
}

export default App;


//income
//percent intended to save per month
//years until retirement
//growth rate - yearly
//growth rate variance

