import React, { useContext, useState } from 'react';
import { Paper, CssBaseline, makeStyles, Box, Container, Button, TextField, Typography, FormControl, Input, InputLabel, FormHelperText } from '@material-ui/core';
import SpacingDesign from './context/design.jsx';

const useStyles = makeStyles((theme) => ({

}))

const App = (props) => {
  const [initial, setInitial] = useState(0);
  const [income, setIncome] = useState(0);
  const [contribution, setContribution] = useState(0);
  const [years, setYears] = useState(0);
  const [growth, setGrowth] = useState(0);
  const [variance, setVariance] = useState(0);
  let final;

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
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    //calculate total num
    let data = {
      'income': income,
      'contribution': contribution,
      'years': years,
      'growth': growth,
      'variance': variance,
      'initial': initial
    }
    console.log(data);

    // let low = [];
    let mid = [];
    // let high = [];
    let cont = income * contribution;
    console.log(cont);
    console.log(cont + (cont * growth));

    for (let i = 0; i < years; i++) {
      let temp;
      if (i === 0) {
        mid.push(cont + (cont * growth));
      } else {
        mid.push((mid[i - 1] + cont) );
      }
    }
    console.log(mid);

  }
  return (
    <Container>
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

          {/* <TextField id="form-input" type='number' required name='currentYear' label="Current Year" onChange={handleChange} /> */}
          {/* <TextField id="form-input" type='number' required name='age' label="Current Age" onChange={handleChange} /> */}
          {/* <TextField id="form-input" type='number' required name='salaryGrowth' label="Annual Salary Growth" onChange={handleChange} helperText='The amount you expect your salary to grow annually'/> */}

          <TextField id="form-input" type='number'  required name='initial' label="Initial Savings" onChange={handleChange} helperText='The starting savings value'/>
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
    </Container>
  )
}

export default App;


//income
//percent intended to save per month
//years until retirement
//growth rate - yearly
//growth rate variance

