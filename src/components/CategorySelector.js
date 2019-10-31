import React from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import classNames from "classnames";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    width: "16em",
    fontWeight: "700"
  },
  categoryDiv: {
    backgroundColor: "#282828",
    width: "20em"
  },
  title: {
    color: "white"
  }
}));

const styles = {
  buttonTemp: {
    backgroundColor: "#ff5b5f"
  },
  buttonLength: {
    backgroundColor: "#3eaf76"
  },
  buttonWeight: {
    backgroundColor: "#F6E481"
  },
  buttonSpeed: {
    backgroundColor: "#448ee4"
  },
  buttonCook: {
    backgroundColor: "#dfc5fe"
  },
  icon: {
    marginRight: "5px"
  }
};

const CategorySelector = () => {
  const classes = useStyles();
  let tempClasses = classNames("button", "buttonTemp");

  return (
    <div className={classes.categoryDiv}>
      <Typography variant="h4" className={classes.title}>
        UnitSwitch<i class="fas fa-sync"></i>
      </Typography>
      <Button
        variant="contained"
        className={classes.button}
        style={styles.buttonTemp}
      >
        <i class="fas fa-thermometer-half" style={styles.icon}></i> Temperature
      </Button>
      <Button
        variant="contained"
        className={classes.button}
        style={styles.buttonLength}
      >
        <i class="fas fa-ruler" style={styles.icon}></i>
        Length
      </Button>
      <Button
        variant="contained"
        className={classes.button}
        style={styles.buttonWeight}
      >
        <i class="fas fa-balance-scale-left" style={styles.icon}></i>
        Weight
      </Button>
      <Button
        variant="contained"
        className={classes.button}
        style={styles.buttonSpeed}
      >
        <i class="fas fa-tachometer-alt" style={styles.icon}></i>
        Speed
      </Button>
      <Button
        variant="contained"
        className={classes.button}
        style={styles.buttonCook}
      >
        <i class="fas fa-utensils" style={styles.icon}></i>
        Cooking
      </Button>
    </div>
  );
};

export default CategorySelector;
