import React from "react";
import { Input } from "@material-ui/core";
import { useState } from "react";
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
  cookingDiv: {
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

// Purple
const styles = {
  icon: {
    marginRight: "15px"
  },
  gallonInput: {
    // backgroundColor: "#953efc"
    backgroundColor: "#a64ca6"
  },
  literInput: {
    // backgroundColor: "#9f51fc"
    backgroundColor: "#b266b2"
  },
  pintInput: {
    // backgroundColor: "#b478fd"
    backgroundColor: "#bf7fbf"
  },
  quartInput: {
    // backgroundColor: "#bf8bfd"
    backgroundColor: "#cc99cc"
  },
  cupInput: {
    // backgroundColor: "#ca9efd"
    backgroundColor: "#d8b2d8"
  },
  tbspInput: {
    // backgroundColor: "#d4b2fe"
    backgroundColor: "#e5cce5"
  },
  tspInput: {
    // backgroundColor: "#dfc5fe",
    backgroundColor: "#f2e5f2"
  },
  backButton: {
    backgroundColor: "#282828",
    color: "#f9f2f9",
    marginBottom: "0.4em"
    // paddingTop: "0",
    // paddingBottom: "5em"
  }
};

const convertGallonToLiter = gallon => {
  let num = Number(gallon) * 3.785;
  return Math.round(num * 100) / 100;
};

const convertGallonToPint = gallon => {
  let num = Number(gallon) * 8;
  return Math.round(num * 100) / 100;
};

const convertGallonToQuart = gallon => {
  let num = Number(gallon) * 4;
  return Math.round(num * 100) / 100;
};

const convertGallonToCup = gallon => {
  let num = Number(gallon) * 15.773;
  return Math.round(num * 100) / 100;
};

const convertGallonToTablespoon = gallon => {
  let num = Number(gallon) * 256;
  return Math.round(num * 100) / 100;
};

const convertGallonToTeaspoon = gallon => {
  let num = Number(gallon) * 768;
  return Math.round(num * 100) / 100;
};

const convertLiterToGallon = liter => {
  let num = Number(liter) / 3.785;
  return Math.round(num * 100) / 100;
};

const convertLiterToPint = liter => {
  let num = Number(liter) * 2.113;
  return Math.round(num * 100) / 100;
};

const convertLiterToQuart = liter => {
  let num = Number(liter) * 1.05669;
  return Math.round(num * 100) / 100;
};

const convertLiterToCup = liter => {
  let num = Number(liter) * 4.16667;
  return Math.round(num * 100) / 100;
};

const convertLiterToTablespoon = liter => {
  let num = Number(liter) * 67.628;
  return Math.round(num * 100) / 100;
};

const convertLiterToTeaspoon = liter => {
  let num = Number(liter) * 202.884;
  return Math.round(num * 100) / 100;
};

const convertPintToGallon = pint => {
  let num = Number(pint) / 8;
  return Math.round(num * 100) / 100;
};

const convertPintToLiter = pint => {
  let num = Number(pint) / 2.113;
  return Math.round(num * 100) / 100;
};

const convertPintToQuart = pint => {
  let num = Number(pint) / 2;
  return Math.round(num * 100) / 100;
};

const convertPintToCup = pint => {
  let num = Number(pint) * 1.972;
  return Math.round(num * 100) / 100;
};

const convertPintToTablespoon = pint => {
  let num = Number(pint) * 32;
  return Math.round(num * 100) / 100;
};

const convertPintToTeaspoon = pint => {
  let num = Number(pint) * 96;
  return Math.round(num * 100) / 100;
};

const convertQuartToGallon = quart => {
  let num = Number(quart) / 4;
  return Math.round(num * 100) / 100;
};

const convertQuartToLiter = quart => {
  let num = Number(quart) / 1.057;
  return Math.round(num * 100) / 100;
};

const convertQuartToPint = quart => {
  let num = Number(quart) * 2;
  return Math.round(num * 100) / 100;
};

const convertQuartToCup = quart => {
  let num = Number(quart) * 3.943;
  return Math.round(num * 100) / 100;
};

const convertQuartToTablespoon = quart => {
  let num = Number(quart) * 64;
  return Math.round(num * 100) / 100;
};

const convertQuartToTeaspoon = quart => {
  let num = Number(quart) * 192;
  return Math.round(num * 100) / 100;
};

const convertCupToGallon = cup => {
  let num = Number(cup) / 15.773;
  return Math.round(num * 100) / 100;
};

const convertCupToLiter = cup => {
  let num = Number(cup) / 4.167;
  return Math.round(num * 100) / 100;
};

const convertCupToPint = cup => {
  let num = Number(cup) / 1.972;
  return Math.round(num * 100) / 100;
};

const convertCupToQuart = cup => {
  let num = Number(cup) / 3.943;
  return Math.round(num * 100) / 100;
};

const convertCupToTablespoon = cup => {
  let num = Number(cup) * 16.231;
  return Math.round(num * 100) / 100;
};

const convertCupToTeaspoon = cup => {
  let num = Number(cup) * 48.692;
  return Math.round(num * 100) / 100;
};

const convertTablespoonToGallon = tablespoon => {
  let num = Number(tablespoon) / 256;
  return Math.round(num * 100) / 100;
};

const convertTablespoonToLiter = tablespoon => {
  let num = Number(tablespoon) / 67.628;
  return Math.round(num * 100) / 100;
};

const convertTablespoonToPint = tablespoon => {
  let num = Number(tablespoon) / 32;
  return Math.round(num * 100) / 100;
};

const convertTablespoonToQuart = tablespoon => {
  let num = Number(tablespoon) / 64;
  return Math.round(num * 100) / 100;
};

const convertTablespoonToCup = tablespoon => {
  let num = Number(tablespoon) / 16.231;
  return Math.round(num * 100) / 100;
};

const convertTablespoonToTeaspoon = tablespoon => {
  let num = Number(tablespoon) * 3;
  return Math.round(num * 100) / 100;
};

const convertTeaspoonToGallon = teaspoon => {
  let num = Number(teaspoon) / 768;
  return Math.round(num * 100) / 100;
};

const convertTeaspoonToLiter = teaspoon => {
  let num = Number(teaspoon) / 202.884;
  return Math.round(num * 100) / 100;
};

const convertTeaspoonToPint = teaspoon => {
  let num = Number(teaspoon) / 96;
  return Math.round(num * 100) / 100;
};

const convertTeaspoonToQuart = teaspoon => {
  let num = Number(teaspoon) / 192;
  return Math.round(num * 100) / 100;
};

const convertTeaspoonToCup = teaspoon => {
  let num = Number(teaspoon) / 48.692;
  return Math.round(num * 100) / 100;
};

const convertTeaspoonToTablespoon = teaspoon => {
  let num = Number(teaspoon) / 3;
  return Math.round(num * 100) / 100;
};

const Cooking = props => {
  const [gallon, setGallon] = useState("");
  const [liter, setLiter] = useState("");
  const [pint, setPint] = useState("");
  const [quart, setQuart] = useState("");
  const [cup, setCup] = useState("");
  const [tablespoon, setTablespoon] = useState("");
  const [teaspoon, setTeaspoon] = useState("");
  const classes = useStyles();

  const handleGallonChange = event => {
    let value = event.target.value;
    setGallon(value);
    setLiter(convertGallonToLiter(value));
    setPint(convertGallonToPint(value));
    setQuart(convertGallonToQuart(value));
    setCup(convertGallonToCup(value));
    setTablespoon(convertGallonToTablespoon(value));
    setTeaspoon(convertGallonToTeaspoon(value));
  };

  const handleLiterChange = event => {
    let value = event.target.value;
    setLiter(value);
    setGallon(convertLiterToGallon(value));
    setPint(convertLiterToPint(value));
    setQuart(convertLiterToQuart(value));
    setCup(convertLiterToCup(value));
    setTablespoon(convertLiterToTablespoon(value));
    setTeaspoon(convertLiterToTeaspoon(value));
  };

  const handlePintChange = event => {
    let value = event.target.value;
    setPint(value);
    setLiter(convertPintToLiter(value));
    setGallon(convertPintToGallon(value));
    setQuart(convertPintToQuart(value));
    setCup(convertPintToCup(value));
    setTablespoon(convertPintToTablespoon(value));
    setTeaspoon(convertPintToTeaspoon(value));
  };

  const handleQuartChange = event => {
    let value = event.target.value;
    setQuart(value);
    setLiter(convertQuartToLiter(value));
    setPint(convertQuartToPint(value));
    setGallon(convertQuartToGallon(value));
    setCup(convertQuartToCup(value));
    setTablespoon(convertQuartToTablespoon(value));
    setTeaspoon(convertQuartToTeaspoon(value));
  };

  const handleCupChange = event => {
    let value = event.target.value;
    setCup(value);
    setLiter(convertCupToLiter(value));
    setPint(convertCupToPint(value));
    setQuart(convertCupToQuart(value));
    setGallon(convertCupToGallon(value));
    setTablespoon(convertCupToTablespoon(value));
    setTeaspoon(convertCupToTeaspoon(value));
  };

  const handleTablespoonChange = event => {
    let value = event.target.value;
    setTablespoon(value);
    setLiter(convertTablespoonToLiter(value));
    setPint(convertTablespoonToPint(value));
    setQuart(convertTablespoonToQuart(value));
    setCup(convertTablespoonToCup(value));
    setGallon(convertTablespoonToGallon(value));
    setTeaspoon(convertTablespoonToTeaspoon(value));
  };

  const handleTeaspoonChange = event => {
    let value = event.target.value;
    setTeaspoon(value);
    setLiter(convertTeaspoonToLiter(value));
    setPint(convertTeaspoonToPint(value));
    setQuart(convertTeaspoonToQuart(value));
    setCup(convertTeaspoonToCup(value));
    setTablespoon(convertTeaspoonToTablespoon(value));
    setGallon(convertTeaspoonToGallon(value));
  };

  return (
    <div className={classes.cookingDiv}>
      <Typography variant="h4" className={classes.title}>
        <i class="fas fa-utensils" style={styles.icon}></i>Cooking
      </Typography>
      {/* gallon */}
      <Input
        id="standard-adornment-weight"
        type="number"
        className={classes.inputBoxes}
        style={styles.gallonInput}
        value={gallon}
        onChange={handleGallonChange}
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
        type="number"
        className={classes.inputBoxes}
        style={styles.literInput}
        value={liter}
        onChange={handleLiterChange}
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
      {/* pint */}
      <Input
        id="standard-adornment-weight"
        type="number"
        className={classes.inputBoxes}
        style={styles.pintInput}
        value={pint}
        onChange={handlePintChange}
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
        type="number"
        className={classes.inputBoxes}
        style={styles.quartInput}
        value={quart}
        onChange={handleQuartChange}
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
        type="number"
        className={classes.inputBoxes}
        style={styles.cupInput}
        value={cup}
        onChange={handleCupChange}
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
        type="number"
        className={classes.inputBoxes}
        style={styles.tbspInput}
        value={tablespoon}
        onChange={handleTablespoonChange}
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
        type="number"
        className={classes.inputBoxes}
        style={styles.tspInput}
        value={teaspoon}
        onChange={handleTeaspoonChange}
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

export default Cooking;
