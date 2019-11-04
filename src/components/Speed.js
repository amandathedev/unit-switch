import React from "react";
import { useState } from "react";
import { Input } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";

const useStyles = makeStyles(theme => ({
  speedDiv: {
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

// Green
const styles = {
  icon: {
    marginRight: "15px"
  },
  mileInput: {
    backgroundColor: "#3AB270"
  },
  kmInput: {
    backgroundColor: "#67C897"
  }
};

const convertKmhToMph = kmh => {
  let num = Number(kmh) / 1.609;
  return Math.round(num * 100) / 100;
};

const convertMphToKmh = mph => {
  let num = Number(mph) * 1.609;
  return Math.round(num * 100) / 100;
};

const Speed = () => {
  const [mph, setMph] = useState();
  const [kmh, setKmh] = useState();
  const classes = useStyles();

  const handleMphChange = event => {
    let value = event.target.value;
    setMph(value);
    setKmh(convertMphToKmh(value));
  };

  const handleKmhChange = event => {
    let value = event.target.value;
    setKmh(value);
    setMph(convertKmhToMph(value));
  };

  return (
    <div className={classes.speedDiv}>
      <Typography variant="h4" className={classes.title}>
        <i class="fas fa-tachometer-alt" style={styles.icon}></i>Speed
      </Typography>
      {/* mph */}
      <Input
        id="standard-adornment-weight"
        type="number"
        className={classes.inputBoxes}
        style={styles.mileInput}
        value={mph}
        onChange={handleMphChange}
        startAdornment={
          <InputAdornment className={classes.adornment} position="start">
            mph
          </InputAdornment>
        }
        aria-describedby="standard-weight-helper-text"
        inputProps={{
          "aria-label": "weight"
        }}
      />
      {/* km/h */}
      <Input
        id="standard-adornment-weight"
        type="number"
        className={classes.inputBoxes}
        style={styles.kmInput}
        value={kmh}
        onChange={handleKmhChange}
        startAdornment={
          <InputAdornment className={classes.adornment} position="start">
            km/h
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

export default Speed;
