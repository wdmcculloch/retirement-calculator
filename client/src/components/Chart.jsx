import React, { useContext, useState } from 'react';
import { Paper, CssBaseline, makeStyles, Box, Container, Button, TextField, Typography, FormControl, Input, InputLabel, FormHelperText } from '@material-ui/core';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import SpacingDesign from './context/design.jsx';

const Chart = (props) => {
  let data = props.data;
  return (
    <Box style={{
      ...SpacingDesign.marginx(3),
      ...SpacingDesign.marginy(3)
      // margin
    }}>

    <LineChart width={500} height={300} data={data}>
      <XAxis dataKey="name"/>
      <YAxis />
      <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
      {/* <Line type="monotone" dataKey="pv" stroke="#82ca9d" /> */}
    </LineChart>
    </Box>
  )
}

export default Chart;