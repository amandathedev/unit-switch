import React, { useState } from 'react';
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

// Blue
const styles = {
  icon: {
    marginRight: "15px",
  },
  mileInput: {
    backgroundColor: "#1ba3b1",
  },
  footInput: {
    backgroundColor: "#20c2d3",
  },
  inchInput: {
    backgroundColor: "#39d1e1",
  },
  kmInput: {
    backgroundColor: "#6cdde9",
  },
  meterInput: {
    backgroundColor: "#8ee5ee",
  },
  cmInput: {
    backgroundColor: "#b0edf3",
  },
  backButton: {
    backgroundColor: "#282828",
    color: "#d2f5f8",
    marginBottom: "0.4em",
  },
};

const convertMileToFoot = (mile) => {
  let num = Number(mile) * 5280;
  return Math.round(num * 100) / 100;
};

const convertMileToInch = (mile) => {
  let num = Number(mile) * 63360;
  return Math.round(num * 100) / 100;
};

const convertMileToKilometer = (mile) => {
  let num = Number(mile) * 1.609;
  return Math.round(num * 100) / 100;
};

const convertMileToMeter = (mile) => {
  let num = Number(mile) * 1609.344;
  return Math.round(num * 100) / 100;
};

const convertMileToCentimeter = (mile) => {
  let num = Number(mile) * 160934.4;
  return Math.round(num * 100) / 100;
};

const convertFootToMile = (foot) => {
  let num = Number(foot) / 5280;
  return Math.round(num * 100) / 100;
};

const convertFootToInch = (foot) => {
  let num = Number(foot) * 12;
  return Math.round(num * 100) / 100;
};

const convertFootToKilometer = (foot) => {
  let num = Number(foot) / 3280.84;
  return Math.round(num * 100) / 100;
};

const convertFootToMeter = (foot) => {
  let num = Number(foot) / 3.281;
  return Math.round(num * 100) / 100;
};

const convertFootToCentimeter = (foot) => {
  let num = Number(foot) * 30.48;
  return Math.round(num * 100) / 100;
};

const convertInchToMile = (inch) => {
  let num = Number(inch) / 63360;
  return Math.round(num * 100) / 100;
};

const convertInchToFoot = (inch) => {
  let num = Number(inch) / 12;
  return Math.round(num * 100) / 100;
};

const convertInchToKilometer = (inch) => {
  let num = Number(inch) / 39370.079;
  return Math.round(num * 100) / 100;
};

const convertInchToMeter = (inch) => {
  let num = Number(inch) / 39.37;
  return Math.round(num * 100) / 100;
};

const convertInchToCentimeter = (inch) => {
  let num = Number(inch) * 2.54;
  return Math.round(num * 100) / 100;
};

const convertKilometerToMile = (kilometer) => {
  let num = Number(kilometer) / 1.609;
  return Math.round(num * 100) / 100;
};

const convertKilometerToFoot = (kilometer) => {
  let num = Number(kilometer) * 3280.84;
  return Math.round(num * 100) / 100;
};

const convertKilometerToInch = (kilometer) => {
  let num = Number(kilometer) * 39370.079;
  return Math.round(num * 100) / 100;
};

const convertKilometerToMeter = (kilometer) => {
  let num = Number(kilometer) * 1000;
  return Math.round(num * 100) / 100;
};

const convertKilometerToCentimeter = (kilometer) => {
  let num = Number(kilometer) * 100000;
  return Math.round(num * 100) / 100;
};

const convertMeterToMile = (meter) => {
  let num = Number(meter) / 1609.344;
  return Math.round(num * 100) / 100;
};

const convertMeterToFoot = (meter) => {
  let num = Number(meter) * 3.281;
  return Math.round(num * 100) / 100;
};

const convertMeterToInch = (meter) => {
  let num = Number(meter) * 39.37;
  return Math.round(num * 100) / 100;
};

const convertMeterToKilometer = (meter) => {
  let num = Number(meter) / 1000;
  return Math.round(num * 100) / 100;
};

const convertMeterToCentimeter = (meter) => {
  let num = Number(meter) * 100;
  return Math.round(num * 100) / 100;
};

const convertCentimeterToMile = (centimeter) => {
  let num = Number(centimeter) / 160934.4;
  return Math.round(num * 100) / 100;
};

const convertCentimeterToFoot = (centimeter) => {
  let num = Number(centimeter) / 30.48;
  return Math.round(num * 100) / 100;
};

const convertCentimeterToInch = (centimeter) => {
  let num = Number(centimeter) / 2.54;
  return Math.round(num * 100) / 100;
};

const convertCentimeterToKilometer = (centimeter) => {
  let num = Number(centimeter) / 100000;
  return Math.round(num * 100) / 100;
};

const convertCentimeterToMeter = (centimeter) => {
  let num = Number(centimeter) / 100;
  return Math.round(num * 100) / 100;
};

const Length = ({ setDisplaying }) => {
  const [mile, setMile] = useState("");
  const [foot, setFoot] = useState("");
  const [inch, setInch] = useState("");
  const [kilometer, setKilometer] = useState("");
  const [meter, setMeter] = useState("");
  const [centimeter, setCentimeter] = useState("");
  const classes = useStyles();

  const handleMileChange = (event) => {
    let value = event.target.value;
    setMile(value);
    setFoot(convertMileToFoot(value));
    setInch(convertMileToInch(value));
    setKilometer(convertMileToKilometer(value));
    setMeter(convertMileToMeter(value));
    setCentimeter(convertMileToCentimeter(value));
  };

  const handleFootChange = (event) => {
    let value = event.target.value;
    setFoot(value);
    setMile(convertFootToMile(value));
    setInch(convertFootToInch(value));
    setKilometer(convertFootToKilometer(value));
    setMeter(convertFootToMeter(value));
    setCentimeter(convertFootToCentimeter(value));
  };

  const handleInchChange = (event) => {
    let value = event.target.value;
    setInch(value);
    setMile(convertInchToMile(value));
    setFoot(convertInchToFoot(value));
    setKilometer(convertInchToKilometer(value));
    setMeter(convertInchToMeter(value));
    setCentimeter(convertInchToCentimeter(value));
  };

  const handleKilometerChange = (event) => {
    let value = event.target.value;
    setKilometer(value);
    setMile(convertKilometerToMile(value));
    setFoot(convertKilometerToFoot(value));
    setInch(convertKilometerToInch(value));
    setMeter(convertKilometerToMeter(value));
    setCentimeter(convertKilometerToCentimeter(value));
  };

  const handleMeterChange = (event) => {
    let value = event.target.value;
    setMeter(value);
    setMile(convertMeterToMile(value));
    setFoot(convertMeterToFoot(value));
    setInch(convertMeterToInch(value));
    setKilometer(convertMeterToKilometer(value));
    setCentimeter(convertMeterToCentimeter(value));
  };

  const handleCentimeterChange = (event) => {
    let value = event.target.value;
    setCentimeter(value);
    setMile(convertCentimeterToMile(value));
    setFoot(convertCentimeterToFoot(value));
    setInch(convertCentimeterToInch(value));
    setKilometer(convertCentimeterToKilometer(value));
    setMeter(convertCentimeterToMeter(value));
  };

  return (
    <Box className={classes.tempDiv}>
      <Typography variant="h4" className={classes.title}>
        <i className="fas fa-ruler" style={styles.icon}></i>Length
      </Typography>
      <Input
        type="number"
        className={classes.inputBoxes}
        style={styles.mileInput}
        value={mile}
        onChange={handleMileChange}
        startAdornment={
          <InputAdornment className={classes.adornment} position="start">
            mi
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
        style={styles.footInput}
        value={foot}
        onChange={handleFootChange}
        startAdornment={
          <InputAdornment className={classes.adornment} position="start">
            ft
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
        style={styles.inchInput}
        value={inch}
        onChange={handleInchChange}
        startAdornment={
          <InputAdornment className={classes.adornment} position="start">
            in
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
        style={styles.kmInput}
        value={kilometer}
        onChange={handleKilometerChange}
        startAdornment={
          <InputAdornment className={classes.adornment} position="start">
            km
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
        style={styles.meterInput}
        value={meter}
        onChange={handleMeterChange}
        startAdornment={
          <InputAdornment className={classes.adornment} position="start">
            m
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
        style={styles.cmInput}
        value={centimeter}
        onChange={handleCentimeterChange}
        startAdornment={
          <InputAdornment className={classes.adornment} position="start">
            cm
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

export default Length;
