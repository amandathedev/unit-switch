import React from "react";
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

// Blue
const styles = {
  icon: {
    marginRight: "15px"
  },
  mileInput: {
    backgroundColor: "#1ba3b1"
  },
  footInput: {
    backgroundColor: "#20c2d3"
  },
  inchInput: {
    backgroundColor: "#39d1e1"
  },
  kmInput: {
    backgroundColor: "#6cdde9"
  },
  meterInput: {
    backgroundColor: "#8ee5ee"
  },
  cmInput: {
    backgroundColor: "#b0edf3",
    marginBottom: "1em"
  }
};

const Length = () => {
  const classes = useStyles();
  return (
    <div className={classes.tempDiv}>
      <Typography variant="h4" className={classes.title}>
        <i class="fas fa-ruler" style={styles.icon}></i>Length
      </Typography>
      {/* Mile */}
      <Input
        id="standard-adornment-weight"
        className={classes.inputBoxes}
        style={styles.mileInput}
        startAdornment={
          <InputAdornment className={classes.adornment} position="start">
            mi
          </InputAdornment>
        }
        aria-describedby="standard-weight-helper-text"
        inputProps={{
          "aria-label": "weight"
        }}
      />
      {/* Foot */}
      <Input
        id="standard-adornment-weight"
        className={classes.inputBoxes}
        style={styles.footInput}
        startAdornment={
          <InputAdornment className={classes.adornment} position="start">
            ft
          </InputAdornment>
        }
        aria-describedby="standard-weight-helper-text"
        inputProps={{
          "aria-label": "weight"
        }}
      />
      {/* Inch */}
      <Input
        id="standard-adornment-weight"
        className={classes.inputBoxes}
        style={styles.inchInput}
        startAdornment={
          <InputAdornment className={classes.adornment} position="start">
            in
          </InputAdornment>
        }
        aria-describedby="standard-weight-helper-text"
        inputProps={{
          "aria-label": "weight"
        }}
      />
      {/* Kilometer */}
      <Input
        id="standard-adornment-weight"
        className={classes.inputBoxes}
        style={styles.kmInput}
        startAdornment={
          <InputAdornment className={classes.adornment} position="start">
            km
          </InputAdornment>
        }
        aria-describedby="standard-weight-helper-text"
        inputProps={{
          "aria-label": "weight"
        }}
      />
      {/* Meter */}
      <Input
        id="standard-adornment-weight"
        className={classes.inputBoxes}
        style={styles.meterInput}
        startAdornment={
          <InputAdornment className={classes.adornment} position="start">
            m
          </InputAdornment>
        }
        aria-describedby="standard-weight-helper-text"
        inputProps={{
          "aria-label": "weight"
        }}
      />
      {/* Centimeter */}
      <Input
        id="standard-adornment-weight"
        className={classes.inputBoxes}
        style={styles.cmInput}
        startAdornment={
          <InputAdornment className={classes.adornment} position="start">
            cm
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

export default Length;
