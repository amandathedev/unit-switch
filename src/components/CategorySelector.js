import React from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import classNames from "classnames";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1.3)
  },
  categoryDiv: {
    backgroundColor: "#F5F5F5"
  }
}));

const styles = {
  buttonTemp: {
    backgroundColor: "#ff474c"
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
  }
};

const CategorySelector = () => {
  const classes = useStyles();
  let tempClasses = classNames("button", "buttonTemp");

  return (
    <div className={classes.categoryDiv}>
      <Typography variant="h4">
        UnitSwitch<i class="fas fa-sync"></i>
      </Typography>
      <Button
        variant="contained"
        className={classes.button}
        style={styles.buttonTemp}
      >
        Temperature
      </Button>
      <Button
        variant="contained"
        className={classes.button}
        style={styles.buttonLength}
      >
        Length
      </Button>
      <Button
        variant="contained"
        className={classes.button}
        style={styles.buttonWeight}
      >
        Weight
      </Button>
      <Button
        variant="contained"
        className={classes.button}
        style={styles.buttonSpeed}
      >
        Speed
      </Button>
      <Button
        variant="contained"
        className={classes.button}
        style={styles.buttonCook}
      >
        Cooking
      </Button>
    </div>
  );
};

export default CategorySelector;
