import React, { useContext, useState } from 'react';
import { Paper, CssBaseline, makeStyles, Box, Container, Button, TextField, Typography, FormControl, Input, InputLabel, FormHelperText } from '@material-ui/core';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import SpacingDesign from './context/design.jsx';
import Chart from './Chart.jsx';
import Form from './Form.jsx';

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
      setContribution(Number(e.target.value) / 100);
    } else if (e.target.name === 'years') {
      setYears(Number(e.target.value));
    } else if (e.target.name === 'growth') {
      setGrowth(Number(e.target.value) / 100);
    } else if (e.target.name === 'variance') {
      setVariance(Number(e.target.value) / 100);
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
      if (data.length === 0) {
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
    setData(data);
  }
  return (

    <Container>
      <CssBaseline />

      <Box display='flex'>
        <Form submit={handleSubmit} change={handleChange}/>
        <Chart data={data} />
      </Box>

    </Container>
  )
}

export default App;


//income
//percent intended to save per month
//years until retirement
//growth rate - yearly
//growth rate variance

