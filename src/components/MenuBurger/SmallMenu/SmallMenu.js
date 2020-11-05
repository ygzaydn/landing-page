import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import { withWindowConsumer } from "../../Window/Context";

const useStyles = makeStyles(() => ({
  smallMenuItem: {
    color: "lightgray",
    fontSize: "3vw",
    alignSelf: "center",
    "&:hover": {
      color: "white",
    },
  },
  smallGrid: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
}));

const SmallMenu = ({ width, limit, text }) => {
  const classes = useStyles();
  if (width < limit) {
    return (
      <Grid item xs={3} className={classes.smallGrid}>
        <Typography className={classes.smallMenuItem}>{text}</Typography>
      </Grid>
    );
  } else {
    return null;
  }
};

export default withWindowConsumer(SmallMenu);
