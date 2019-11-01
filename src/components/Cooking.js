import React from "react";
import { Input } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";

const useStyles = makeStyles(theme => ({
  cookingDiv: {
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

// Purple
const styles = {
  icon: {
    marginRight: "15px"
  },
  gallonInput: {
    backgroundColor: "#953efc"
  },
  literInput: {
    backgroundColor: "#9f51fc"
  },
  flOunceInput: {
    backgroundColor: "#aa65fc"
  },
  pintInput: {
    backgroundColor: "#b478fd"
  },
  quartInput: {
    backgroundColor: "#bf8bfd"
  },
  cupInput: {
    backgroundColor: "#ca9efd"
  },
  tbspInput: {
    backgroundColor: "#d4b2fe"
  },
  tspInput: {
    backgroundColor: "#dfc5fe",
    marginBottom: "1em"
  }
};

const Cooking = () => {
  const classes = useStyles();
  return (
    <div className={classes.cookingDiv}>
      <Typography variant="h4" className={classes.title}>
        <i class="fas fa-utensils" style={styles.icon}></i>Cooking
      </Typography>
      {/* gallon */}
      <Input
        id="standard-adornment-weight"
        className={classes.inputBoxes}
        style={styles.gallonInput}
        startAdornment={
          <InputAdornment className={classes.adornment} position="start">
            gal
          </InputAdornment>
        }
        aria-describedby="standard-weight-helper-text"
        inputProps={{
          "aria-label": "weight"
        }}
      />
      {/* liter */}
      <Input
        id="standard-adornment-weight"
        className={classes.inputBoxes}
        style={styles.literInput}
        startAdornment={
          <InputAdornment className={classes.adornment} position="start">
            L
          </InputAdornment>
        }
        aria-describedby="standard-weight-helper-text"
        inputProps={{
          "aria-label": "weight"
        }}
      />
      {/* fl Ounce */}
      {/* <Input
        id="standard-adornment-weight"
        className={classes.inputBoxes}
        style={styles.flOunceInput}
        startAdornment={
          <InputAdornment className={classes.adornment} position="start">
            fLoz
          </InputAdornment>
        }
        aria-describedby="standard-weight-helper-text"
        inputProps={{
          "aria-label": "weight"
        }}
      /> */}
      {/* pint */}
      <Input
        id="standard-adornment-weight"
        className={classes.inputBoxes}
        style={styles.pintInput}
        startAdornment={
          <InputAdornment className={classes.adornment} position="start">
            pint
          </InputAdornment>
        }
        aria-describedby="standard-weight-helper-text"
        inputProps={{
          "aria-label": "weight"
        }}
      />
      {/* quart */}
      <Input
        id="standard-adornment-weight"
        className={classes.inputBoxes}
        style={styles.quartInput}
        startAdornment={
          <InputAdornment className={classes.adornment} position="start">
            qt
          </InputAdornment>
        }
        aria-describedby="standard-weight-helper-text"
        inputProps={{
          "aria-label": "weight"
        }}
      />
      {/* Cup */}
      <Input
        id="standard-adornment-weight"
        className={classes.inputBoxes}
        style={styles.cupInput}
        startAdornment={
          <InputAdornment className={classes.adornment} position="start">
            cup
          </InputAdornment>
        }
        aria-describedby="standard-weight-helper-text"
        inputProps={{
          "aria-label": "weight"
        }}
      />
      {/* Tablespoon */}
      <Input
        id="standard-adornment-weight"
        className={classes.inputBoxes}
        style={styles.tbspInput}
        startAdornment={
          <InputAdornment className={classes.adornment} position="start">
            Tbsp
          </InputAdornment>
        }
        aria-describedby="standard-weight-helper-text"
        inputProps={{
          "aria-label": "weight"
        }}
      />
      {/* Teaspoon */}
      <Input
        id="standard-adornment-weight"
        className={classes.inputBoxes}
        style={styles.tspInput}
        startAdornment={
          <InputAdornment className={classes.adornment} position="start">
            tsp
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

export default Cooking;
