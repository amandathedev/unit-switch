import React, { useState } from "react";
import { Input, Typography, Button, InputAdornment, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    width: "16em",
    fontWeight: "700",
    borderRadius: "10px",
  },
  speedDiv: {
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

// Green
const styles = {
  icon: {
    marginRight: "15px",
  },
  mileInput: {
    backgroundColor: "#3AB270",
  },
  kmInput: {
    backgroundColor: "#67C897",
  },
  backButton: {
    backgroundColor: "#282828",
    color: "#92d8b5",
    marginBottom: "0.4em",
  },
};

const convertKmhToMph = (kmh) => {
  let num = Number(kmh) / 1.609;
  return Math.round(num * 100) / 100;
};

const convertMphToKmh = (mph) => {
  let num = Number(mph) * 1.609;
  return Math.round(num * 100) / 100;
};

const Speed = ({ setDisplaying }) => {
  const [mph, setMph] = useState("");
  const [kmh, setKmh] = useState("");
  const classes = useStyles();

  const handleMphChange = (event) => {
    let value = event.target.value;
    setMph(value);
    setKmh(convertMphToKmh(value));
  };

  const handleKmhChange = (event) => {
    let value = event.target.value;
    setKmh(value);
    setMph(convertKmhToMph(value));
  };

  return (
    <Box className={classes.speedDiv}>
      <Typography variant="h4" className={classes.title}>
        <i className="fas fa-tachometer-alt" style={styles.icon}></i>Speed
      </Typography>
      <Input
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
          "aria-label": "weight",
        }}
      />
      <Input
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

export default Speed;
