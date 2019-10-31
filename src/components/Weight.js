import React from "react";
import { Input } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";

const useStyles = makeStyles(theme => ({
  weightDiv: {
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

// Yellow
const styles = {
  icon: {
    marginRight: "15px"
  },
  poundInput: {
    backgroundColor: "#ffed19"
  },
  kgInput: {
    backgroundColor: "#fff154"
  },
  ozInput: {
    backgroundColor: "#FFF68F"
  },
  gramInput: {
    backgroundColor: "#fff9b6"
  },
  tonInput: {
    backgroundColor: "#fffcdd",
    marginBottom: "1em"
  }
};

const Weight = () => {
  const classes = useStyles();
  return (
    <div className={classes.weightDiv}>
      <Typography variant="h4" className={classes.title}>
        <i class="fas fa-balance-scale-left" style={styles.icon}></i>Weight
      </Typography>
      {/* Pound */}
      <Input
        id="standard-adornment-weight"
        className={classes.inputBoxes}
        style={styles.poundInput}
        startAdornment={
          <InputAdornment className={classes.adornment} position="start">
            lb
          </InputAdornment>
        }
        aria-describedby="standard-weight-helper-text"
        inputProps={{
          "aria-label": "weight"
        }}
      />
      {/* Kilogram */}
      <Input
        id="standard-adornment-weight"
        className={classes.inputBoxes}
        style={styles.kgInput}
        startAdornment={
          <InputAdornment className={classes.adornment} position="start">
            kg
          </InputAdornment>
        }
        aria-describedby="standard-weight-helper-text"
        inputProps={{
          "aria-label": "weight"
        }}
      />
      {/* Ounce */}
      <Input
        id="standard-adornment-weight"
        className={classes.inputBoxes}
        style={styles.ozInput}
        startAdornment={
          <InputAdornment className={classes.adornment} position="start">
            oz
          </InputAdornment>
        }
        aria-describedby="standard-weight-helper-text"
        inputProps={{
          "aria-label": "weight"
        }}
      />
      {/* Gram */}
      <Input
        id="standard-adornment-weight"
        className={classes.inputBoxes}
        style={styles.gramInput}
        startAdornment={
          <InputAdornment className={classes.adornment} position="start">
            g
          </InputAdornment>
        }
        aria-describedby="standard-weight-helper-text"
        inputProps={{
          "aria-label": "weight"
        }}
      />
      {/* Ton */}
      <Input
        id="standard-adornment-weight"
        className={classes.inputBoxes}
        style={styles.tonInput}
        startAdornment={
          <InputAdornment className={classes.adornment} position="start">
            ton
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

export default Weight;
