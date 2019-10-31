import React from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1.2)
  },
  buttonTemp: {
    backgroundColor: "#ED8A68"
  },
  buttonDist: {
    backgroundColor: "#669a61"
  },
  buttonWeight: {
    backgroundColor: "#e5d678"
  }
}));

const CategorySelector = () => {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h4">
        UnitSwitch<i class="fas fa-sync"></i>
      </Typography>
      <Button
        variant="contained"
        className={(classes.button, classes.buttonTemp)}
      >
        Temperature
      </Button>
      <Button
        variant="contained"
        className={(classes.button, classes.buttonDist)}
      >
        Distance
      </Button>
      <Button
        variant="contained"
        className={(classes.button, classes.buttonWeight)}
      >
        Weight
      </Button>
      <Button variant="contained" className={classes.button}>
        Speed
      </Button>
      <Button variant="contained" className={classes.button}>
        Volume
      </Button>
      <Button variant="contained" className={classes.button}>
        Cooking
      </Button>
    </div>
  );
};

export default CategorySelector;
