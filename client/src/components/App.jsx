import React, { useContext, useState } from "react";
import {
  useMediaQuery,
  ThemeProvider,
  Paper,
  CssBaseline,
  makeStyles,
  Box,
  Container,
  Button,
  TextField,
  Typography,
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
} from "@material-ui/core";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import SpacingDesign from "./context/design.jsx";
import ChartContext from './context/ChartContext.jsx';
import Chart from "./Chart.jsx";
import Form from "./Form.jsx";


const App = (props) => {
  const [initial, setInitial] = useState(5000);
  const [income, setIncome] = useState(100000);
  const [contribution, setContribution] = useState(0.2);
  const [years, setYears] = useState(30);
  const [growth, setGrowth] = useState(0.08);
  const [variance, setVariance] = useState(2);
  const [currentYear, setcurrentYear] = useState(2021);
  const [data, setData] = useState({});
  const [displayChart, setDisplayChart] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.name === "income") {
      setIncome(Number(e.target.value));
    } else if (e.target.name === "contribution") {
      setContribution(Number(e.target.value) / 100);
    } else if (e.target.name === "years") {
      setYears(Number(e.target.value));
    } else if (e.target.name === "growth") {
      setGrowth(Number(e.target.value) / 100);
    } else if (e.target.name === "variance") {
      setVariance(Number(e.target.value) / 100);
    } else if (e.target.name === "initial") {
      setInitial(Number(e.target.value));
    } else if (e.target.name === "currentYear") {
      setcurrentYear(Number(e.target.value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = [];
    let mid = growth;
    let amount;
    for (let i = currentYear; i < currentYear + years; i++) {
      let obj = {};
      if (data.length === 0) {
        amount = initial * (1 + mid);
        amount += income * contribution;
        obj.name = i;
        obj.value = Number(amount.toFixed(2));
        data.push(obj);
      } else {
        amount = amount * (1 + mid);
        amount += income * contribution;
        obj.name = i;
        obj.value = Number(amount.toFixed(2));
        data.push(obj);
      }
    }
    setData(data);
    setDisplayChart(true);
  };
  return (
    <ChartContext.Provider value={[data, setData]}>
      <Container id="container">
        <CssBaseline />
        <div id="title">
          <Typography
            variant="h2"
            style={{
              ...SpacingDesign.marginTop(1),
            }}
          >
            Retirement Calculator
          </Typography>

          <Typography
            variant="subtitle1"
            style={{
              ...SpacingDesign.marginx(1),
            }}
          >
            Determine how much your money could grow using the power of compound
            interest.
          </Typography>
        </div>

        <div id="form-chart-container">
          <Form id="form-main" submit={handleSubmit} change={handleChange} />
          <div id="chart">
            <Paper>
              {/* <Chart data={data} /> */}
              {displayChart ? <Chart data={data} /> : undefined}
            </Paper>
          </div>
        </div>
      </Container>
    </ChartContext.Provider>
  );
};

export default App;
