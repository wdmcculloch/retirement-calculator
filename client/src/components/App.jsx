import React, { useContext, useState } from 'react';
import { Paper, CssBaseline, makeStyles, Box, Container, Button, TextField, Typography, FormControl, Input, InputLabel, FormHelperText } from '@material-ui/core';
import SpacingDesign from './context/design.jsx';

const useStyles = makeStyles((theme) => ({

}))

const App = (props) => {
  const [income, setIncome] = useState(0);
  const [contribution, setContribution] = useState(0);
  const [years, setYears] = useState(0);
  const [growth, setGrowth] = useState(0);
  const [variance, setVariance] = useState(0);

  const handleChange = (e) => {
    e.preventDefault();
  }

  const handleSubmit = (e) => {

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

        <Typography variant='h5' align='center' style={{
          marginTop: '1vh',
        }}>Retirement Calculator</Typography>

        <Box display='flex' flexDirection='column' align='center' style={{
          marginBottom: '1vh',
          marginLeft: '1vh',
          marginRight: '1vh',
          fontSize: '1em'
        }}>
          <TextField id="form-input" type='number' required name='income' label="Yearly Income" onChange={handleChange}/>
          <TextField id="form-input" type='number' required name='contribution' label="Monthly Contribution"  onChange={handleChange}/>
          <TextField id="form-input" type='number' required name='years' label="Years Until Retirement"  onChange={handleChange}/>
          <TextField id="form-input" type='number' required name='growth' label="Estimated Growth Rate"  onChange={handleChange}/>
          <TextField id="form-input" type='number' required name='variance' label="Growth Rate Variance"  onChange={handleChange}/>
        </Box>
        <Button display='flex' justifycontent='flex-end' color='primary' style={{
          marginBottom: '2vh',
          marginLeft: '2vh',
          marginRight: '1vh',
        }}>Submit</Button>
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

