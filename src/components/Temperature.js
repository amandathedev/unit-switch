import React from "react";
import { useState } from "react";
import { Input } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";

const useStyles = makeStyles(theme => ({
  button: {
    // margin: theme.spacing(1),
    width: "16em",
    fontWeight: "700",
    borderRadius: "10px"
    // height: "30px",
    // paddingBottom: "2.2em"
  },
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
    backgroundColor: "#E3534C"
  },
  Finput: {
    backgroundColor: "#FA7C5A"
  },
  Kinput: {
    backgroundColor: "#FFA874",
    marginBottom: "1em"
  },
  backButton: {
    backgroundColor: "#282828",
    color: "#ffcdaf",
    marginBottom: "0.4em"
    // paddingTop: "0",
    // paddingBottom: "5em"
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

const Temperature = props => {
  const [celsius, setCelsius] = useState();
  const [kelvin, setKelvin] = useState();
  const [fahrenheit, setFahrenheit] = useState();
  const classes = useStyles();

  const handleCelsiusChange = event => {
    let value = event.target.value;
    setCelsius(value);
    setFahrenheit(convertCelsiusToFahrenheit(value));
    setKelvin(convertCelsiusToKelvin(value));
  };

  const handleFahrenheitChange = event => {
    let value = event.target.value;
    setFahrenheit(value);
    setKelvin(convertFahrenheitToKelvin(value));
    setCelsius(convertFahrenheitToCelsius(value));
  };

  const handleKelvinChange = event => {
    let value = event.target.value;
    setKelvin(value);
    setFahrenheit(convertKelvinToFahrenheit(value));
    setCelsius(convertKelvinToCelsius(value));
  };

  return (
    <div className={classes.tempDiv}>
      <Typography variant="h4" className={classes.title}>
        <i class="fas fa-thermometer-half" style={styles.icon}></i>Temperature
      </Typography>
      {/* Celsius */}
      <Input
        id="standard-adornment-weight"
        type="number"
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
        type="number"
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
        type="number"
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
      <Button
        // variant="contained"
        className={classes.button}
        style={styles.backButton}
        onClick={() => props.setDisplaying("")}
      >
        <i class="fas fa-long-arrow-alt-left fa-3x"></i>
      </Button>
    </div>
  );
};

export default Temperature;
