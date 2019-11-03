import React from "react";
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
    paddingLeft: "1em"
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
    backgroundColor: "#4ce44c"
  },
  kmInput: {
    backgroundColor: "#90EE90"
  }
};

const Speed = () => {
  const classes = useStyles();
  return (
    <div className={classes.speedDiv}>
      <Typography variant="h4" className={classes.title}>
        <i class="fas fa-tachometer-alt" style={styles.icon}></i>Speed
      </Typography>
      {/* mph */}
      <Input
        id="standard-adornment-weight"
        className={classes.inputBoxes}
        style={styles.mileInput}
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
        className={classes.inputBoxes}
        style={styles.kmInput}
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
