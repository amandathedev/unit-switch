import React from "react";
import { useState } from "react";
import { Input } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";

const useStyles = makeStyles(theme => ({
  tempDiv: {
    backgroundColor: "#282828",
    width: "21em"
  },
  inputBoxes: {
    color: "black",
    fontWeight: "700",
    width: "14em",
    margin: theme.spacing(1),
    paddingLeft: "1em",
    borderRadius: "10px"
  },
  title: {
    color: "white",
    fontWeight: "300",
    paddingTop: "0.4em",
    marginBottom: "0.4em"
  },
  adornment: {
    marginRight: "1em"
  }
}));

// Red
const styles = {
  icon: {
    marginRight: "15px"
  },
  Cinput: {
    backgroundColor: "#ff7a7a"
  },
  Finput: {
    backgroundColor: "#ffa1a1"
  },
  Kinput: {
    backgroundColor: "#ffc8c8",
    marginBottom: "1em"
  }
};

const convertFahrenheitToCelsius = fahrenheit => {
  let num = (fahrenheit - 32) * (5 / 9);
  return Math.round(num * 100) / 100;
};

const convertFahrenheitToKelvin = fahrenheit => {
  let num = (fahrenheit - 32) * (5 / 9) + 273.15;
  return Math.round(num * 100) / 100;
};

const convertCelsiusToKelvin = celsius => {
  let num = Number(celsius) + 273.15;
  return Math.round(num * 100) / 100;
};

const convertCelsiusToFahrenheit = celsius => {
  let num = celsius * (9 / 5) + 32;
  return Math.round(num * 100) / 100;
};

const convertKelvinToFahrenheit = kelvin => {
  let num = (kelvin - 273.15) * (9 / 5) + 32;
  return Math.round(num * 100) / 100;
};

const convertKelvinToCelsius = kelvin => {
  let num = kelvin - 273.15;
  return Math.round(num * 100) / 100;
};

const Temperature = () => {
  const [celsius, setCelsius] = useState("");
  const [kelvin, setKelvin] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");
  const classes = useStyles();

  const handleCelsiusChange = event => {
    setCelsius(event.target.value);
    setFahrenheit(convertCelsiusToFahrenheit(event.target.value));
    setKelvin(convertCelsiusToKelvin(event.target.value));
  };

  const handleFahrenheitChange = event => {
    setFahrenheit(event.target.value);
    setKelvin(convertFahrenheitToKelvin(event.target.value));
    setCelsius(convertFahrenheitToCelsius(event.target.value));
  };

  const handleKelvinChange = event => {
    setKelvin(event.target.value);
    setFahrenheit(convertKelvinToFahrenheit(event.target.value));
    setCelsius(convertKelvinToCelsius(event.target.value));
  };

  return (
    <div className={classes.tempDiv}>
      <Typography variant="h4" className={classes.title}>
        <i class="fas fa-thermometer-half" style={styles.icon}></i>Temperature
      </Typography>
      {/* Celsius */}
      <Input
        id="standard-adornment-weight"
        className={classes.inputBoxes}
        style={styles.Cinput}
        value={celsius}
        onChange={handleCelsiusChange}
        startAdornment={
          <InputAdornment className={classes.adornment} position="start">
            °C
          </InputAdornment>
        }
        aria-describedby="standard-weight-helper-text"
        inputProps={{
          "aria-label": "weight"
        }}
      />
      {/* Fahrenheit */}
      <Input
        id="standard-adornment-weight"
        className={classes.inputBoxes}
        style={styles.Finput}
        value={fahrenheit}
        onChange={handleFahrenheitChange}
        startAdornment={
          <InputAdornment className={classes.adornment} position="start">
            °F
          </InputAdornment>
        }
        aria-describedby="standard-weight-helper-text"
        inputProps={{
          "aria-label": "weight"
        }}
      />
      {/* Kelvin */}
      <Input
        id="standard-adornment-weight"
        className={classes.inputBoxes}
        style={styles.Kinput}
        value={kelvin}
        onChange={handleKelvinChange}
        startAdornment={
          <InputAdornment className={classes.adornment} position="start">
            °K
          </InputAdornment>
        }
        aria-describedby="standard-weight-helper-text"
        inputProps={{
          "aria-label": "weight"
        }}
      />
    </div>
  );
};

export default Temperature;
