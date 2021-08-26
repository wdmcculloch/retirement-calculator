import React, { useContext, useState } from 'react';
import { Paper, CssBaseline, makeStyles, Box, Container, Button, TextField, Typography, FormControl, Input, InputLabel, FormHelperText } from '@material-ui/core';
import { Legend, Tooltip, LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import SpacingDesign from './context/design.jsx';

const Chart = (props) => {
  let data = props.data;
  console.log(data);
  return (
    <Box style={{
      ...SpacingDesign.marginx(3),
      ...SpacingDesign.marginy(3)
      // margin
    }}>

    <LineChart width={600} height={300} data={data}>
      <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
      <XAxis dataKey="name"/>
      <YAxis />
      <Tooltip/>
      <Legend />
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
      {/* <Line type="monotone" dataKey="pv" stroke="#82ca9d" /> */}
    </LineChart>
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