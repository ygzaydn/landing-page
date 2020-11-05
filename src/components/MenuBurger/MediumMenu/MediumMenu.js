import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withWindowConsumer } from "../../Window/Context";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  mediumGrid: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  mediumItem: {
    color: "gray",
    fontSize: "6vw",
    alignSelf: "center",
    "&:hover": {
      color: "white",
    },
  },
}));

const MediumMenu = ({ width, limit, text }) => {
  const classes = useStyles();
  if (width < limit) {
    return (
      <Grid item xs={6} className={classes.mediumGrid}>
        <Typography alignItems={"center"} className={classes.mediumItem}>
          {text}
        </Typography>
      </Grid>
    );
  } else {
    return null;
  }
};

export default withWindowConsumer(MediumMenu);
