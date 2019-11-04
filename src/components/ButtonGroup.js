import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    width: "16em",
    fontWeight: "700",
    borderRadius: "10px",
    height: "30px",
    paddingBottom: "2.2em"
  },
  categoryDiv: {
    backgroundColor: "#282828",
    width: "21em"
  },
  title: {
    color: "white",
    fontWeight: "300",
    paddingTop: "0.4em",
    marginBottom: "0.2em"
  }
}));

const styles = {
  buttonTemp: {
    backgroundColor: "#C74BF6"
  },
  buttonLength: {
    backgroundColor: "#9A75F0"
  },
  buttonWeight: {
    backgroundColor: "#6E9EEB"
  },
  buttonSpeed: {
    backgroundColor: "#41C8E5"
  },
  buttonCook: {
    backgroundColor: "#14F2E0",
    marginBottom: "1em"
  },
  icon: {
    marginRight: "5px"
  },
  bigIcon: {
    marginRight: "15px",
    fontSize: "0.8em"
  }
};

const ButtonGroup = props => {
  const classes = useStyles();

  return (
    <div className={classes.categoryDiv}>
      <Typography variant="h4" className={classes.title}>
        <i class="fas fa-sync" style={styles.bigIcon}></i>UnitSwitch
      </Typography>
      <Button
        variant="contained"
        className={classes.button}
        style={styles.buttonTemp}
        onClick={() => props.setDisplaying("temperature")}
      >
        <i class="fas fa-thermometer-half" style={styles.icon}></i> Temperature
      </Button>
      <Button
        variant="contained"
        className={classes.button}
        style={styles.buttonLength}
        onClick={() => props.setDisplaying("length")}
      >
        <i class="fas fa-ruler" style={styles.icon}></i>
        Length
      </Button>
      <Button
        variant="contained"
        className={classes.button}
        style={styles.buttonWeight}
        onClick={() => props.setDisplaying("weight")}
      >
        <i class="fas fa-balance-scale-left" style={styles.icon}></i>
        Weight
      </Button>
      <Button
        variant="contained"
        className={classes.button}
        style={styles.buttonSpeed}
        onClick={() => props.setDisplaying("speed")}
      >
        <i class="fas fa-tachometer-alt" style={styles.icon}></i>
        Speed
      </Button>
      <Button
        variant="contained"
        className={classes.button}
        style={styles.buttonCook}
        onClick={() => props.setDisplaying("cooking")}
      >
        <i class="fas fa-utensils" style={styles.icon}></i>
        Cooking
      </Button>
    </div>
  );
};

export default ButtonGroup;
