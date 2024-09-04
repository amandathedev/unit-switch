import React, { useState } from "react";
import { Input, Typography, Button, InputAdornment, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    width: "16em",
    fontWeight: "700",
    borderRadius: "10px",
  },
  tempDiv: {
    backgroundColor: "#282828",
    width: "21em",
  },
  inputBoxes: {
    color: "black",
    fontWeight: "700",
    width: "14em",
    margin: "8px",
    paddingLeft: "1em",
    borderRadius: "10px",
  },
  title: {
    color: "white",
    fontWeight: "300",
    paddingTop: "0.4em",
    marginBottom: "0.4em",
  },
  adornment: {
    marginRight: "1em",
  },
}));

// Red
const styles = {
  icon: {
    marginRight: "15px",
  },
  Cinput: {
    backgroundColor: "#E3534C",
  },
  Finput: {
    backgroundColor: "#FA7C5A",
  },
  Kinput: {
    backgroundColor: "#FFA874",
  },
  backButton: {
    backgroundColor: "#282828",
    color: "#ffcdaf",
    marginBottom: "0.4em",
  },
};

const convertFahrenheitToCelsius = (fahrenheit) => {
  let num = (fahrenheit - 32) * (5 / 9);
  return Math.round(num * 100) / 100;
};

const convertFahrenheitToKelvin = (fahrenheit) => {
  let num = (fahrenheit - 32) * (5 / 9) + 273.15;
  return Math.round(num * 100) / 100;
};

const convertCelsiusToKelvin = (celsius) => {
  let num = Number(celsius) + 273.15;
  return Math.round(num * 100) / 100;
};

const convertCelsiusToFahrenheit = (celsius) => {
  let num = celsius * (9 / 5) + 32;
  return Math.round(num * 100) / 100;
};

const convertKelvinToFahrenheit = (kelvin) => {
  let num = (kelvin - 273.15) * (9 / 5) + 32;
  return Math.round(num * 100) / 100;
};

const convertKelvinToCelsius = (kelvin) => {
  let num = kelvin - 273.15;
  return Math.round(num * 100) / 100;
};

const Temperature = ({ setDisplaying }) => {
  const [celsius, setCelsius] = useState("");
  const [kelvin, setKelvin] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");
  const classes = useStyles();

  const handleCelsiusChange = (event) => {
    let value = event.target.value;
    setCelsius(value);
    setFahrenheit(convertCelsiusToFahrenheit(value));
    setKelvin(convertCelsiusToKelvin(value));
  };

  const handleFahrenheitChange = (event) => {
    let value = event.target.value;
    setFahrenheit(value);
    setKelvin(convertFahrenheitToKelvin(value));
    setCelsius(convertFahrenheitToCelsius(value));
  };

  const handleKelvinChange = (event) => {
    let value = event.target.value;
    setKelvin(value);
    setFahrenheit(convertKelvinToFahrenheit(value));
    setCelsius(convertKelvinToCelsius(value));
  };

  return (
    <Box className={classes.tempDiv}>
      <Typography variant="h4" className={classes.title}>
        <i className="fas fa-thermometer-half" style={styles.icon}></i>Temperature
      </Typography>
      <Input
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
          "aria-label": "weight",
        }}
      />
      <Input
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
          "aria-label": "weight",
        }}
      />
      <Input
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
          "aria-label": "weight",
        }}
      />
      <Button
        className={classes.button}
        style={styles.backButton}
        onClick={() => setDisplaying("")}
      >
        <i className="fas fa-long-arrow-alt-left fa-3x"></i>
      </Button>
    </Box>
  );
};

export default Temperature;
