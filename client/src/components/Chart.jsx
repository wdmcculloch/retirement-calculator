import React, { useContext, useState } from 'react';
import { Paper, CssBaseline, makeStyles, Box, Container, Button, TextField, Typography, FormControl, Input, InputLabel, FormHelperText } from '@material-ui/core';
import { ResponsiveContainer, Legend, Tooltip, LineChart, Line, CartesianGrid, XAxis, YAxis, Label } from 'recharts';
import SpacingDesign from './context/design.jsx';

const Chart = (props) => {
  let data = props.data;
  console.log(data);
  return (
    <Box style={{
      ...SpacingDesign.marginx(3),
      ...SpacingDesign.marginy(3)
    }}>

    <Typography variant='h6'>
      {`you made a lot of money!!`}
    </Typography>
        {/* <ResponsiveContainer width="80%" height='100%'> */}
          <LineChart data={data} width={700} height={500}>

            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />

            <XAxis dataKey="name" />
            <YAxis  />

            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        {/* </ResponsiveContainer> */}
    </Box>
  )
}

export default Chart;

/*
<LineChart width={730} height={250} data={data}
  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Line type="monotone" dataKey="pv" stroke="#8884d8" />
  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
</LineChart>
*/