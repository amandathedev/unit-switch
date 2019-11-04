import React from "react";
import { useState } from "react";
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

const convertPoundToKilogram = pound => {
  let num = Number(pound) / 2.205
  return Math.round(num * 100) / 100;
}

const convertPoundToGram = pound => {
  let num = Number(pound) * 453.592
  return Math.round(num * 100) / 100;
}

const convertPoundToOunce = pound => {
  let num = Number(pound) * 16
  return Math.round(num * 100) / 100;
}

const convertPoundToTon = pound => {
  let num = Number(pound) / 2000
  return Math.round(num * 100) / 100;
}

const convertKilogramToGram = kilogram => {
  let num = Number(kilogram) * 1000
  return Math.round(num * 100) / 100;
}

const convertKilogramToOunce = kilogram => {
  let num = Number(kilogram) * 35.274
  return Math.round(num * 100) / 100;
}

const convertKilogramToTon = kilogram => {
  let num = Number(kilogram) / 907.185
  return Math.round(num * 100) / 100;
}

const convertKilogramToPound = kilogram => {
  let num = Number(kilogram) * 2.205
  return Math.round(num * 100) / 100;
}

const convertGramToOunce = gram => {
  let num = Number(gram) / 28.35
  return Math.round(num * 100) / 100;
}

const convertGramToTon = gram => {
  let num = Number(gram) / 907184.74
  return Math.round(num * 100) / 100;
}

const convertGramToKilogram = gram => {
  let num = Number(gram) / 1000
  return Math.round(num * 100) / 100;
}

const convertGramToPound = gram => {
  let num = Number(gram) / 453.592
  return Math.round(num * 100) / 100;
}

const convertOunceToTon = ounce => {
  let num = Number(ounce) / 32000
  return Math.round(num * 100) / 100;
}

const convertOunceToGram = ounce => {
  let num = Number(ounce) * 28.35
  return Math.round(num * 100) / 100;
}

const convertOunceToKilogram = ounce => {
  let num = Number(ounce) / 35.274
  return Math.round(num * 100) / 100;
}

const convertOunceToPound = ounce => {
  let num = Number(ounce) / 16
  return Math.round(num * 100) / 100;
}

const convertTonToGram = ton => {
  let num = Number(ton) * 907184.74
  return Math.round(num * 100) / 100;
}

const convertTonToPound = ton => {
  let num = Number(ton) * 2000
  return Math.round(num * 100) / 100;
}

const convertTonToKilogram = ton => {
  let num = Number(ton) * 907.185
  return Math.round(num * 100) / 100;
}

const convertTonToOunce = ton => {
  let num = Number(ton) * 32000
  return Math.round(num * 100) / 100;
}


const Weight = () => {
  const[pound, setPound] = useState()
  const[ounce, setOunce] = useState()
  const[ton, setTon] = useState()
  const[gram, setGram] = useState()
  const[kilogram, setKilogram] = useState()
  const classes = useStyles();

  const handlePoundChange = event => {
    let x = event.target.value
    setPound(x)
    setKilogram(convertPoundToKilogram(x))
    setOunce(convertPoundToOunce(x))
    setGram(convertPoundToGram(x))
    setTon(convertPoundToTon(x))
  }

  const handleKilogramChange = event => {
    let value = event.target.value
    setKilogram(value)
    setPound(convertKilogramToPound(value))
    setGram(convertKilogramToGram(value))
    setOunce(convertKilogramToOunce(value))
    setTon(convertKilogramToTon(value))
  }

  const handleGramChange = event => {
    let value = event.target.value
    setGram(value)
    setPound(convertGramToPound(value))
    setKilogram(convertGramToKilogram(value))
    setOunce(convertGramToOunce(value))
    setTon(convertGramToTon(value))
  }

  const handleOunceChange = event => {
    let value = event.target.value
    setOunce(value)
    setPound(convertOunceToPound(value))
    setTon(convertOunceToTon(value))
    setGram(convertOunceToGram(value))
    setKilogram(convertOunceToKilogram(value))
  }

  const handleTonChange = event => {
    let value = event.target.value
    setTon(value)
    setPound(convertTonToPound(value))
    setGram(convertTonToGram(value))
    setOunce(convertTonToOunce(value))
    setKilogram(convertTonToKilogram(value))
  }

  return (
    <div className={classes.weightDiv}>
      <Typography variant="h4" className={classes.title}>
        <i class="fas fa-balance-scale-left" style={styles.icon}></i>Weight
      </Typography>
      {/* Pound */}
      <Input
        id="standard-adornment-weight"
        type="number"
        className={classes.inputBoxes}
        style={styles.poundInput}
        value={pound}
        onChange={handlePoundChange}
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
        type="number"
        className={classes.inputBoxes}
        style={styles.kgInput}
        value={kilogram}
        onChange={handleKilogramChange}
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
        type="number"
        className={classes.inputBoxes}
        style={styles.ozInput}
        value={ounce}
        onChange={handleOunceChange}
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
        type="number"
        className={classes.inputBoxes}
        style={styles.gramInput}
        value={gram}
        onChange={handleGramChange}
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
        type="number"
        className={classes.inputBoxes}
        style={styles.tonInput}
        value={ton}
        onChange={handleTonChange}
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
