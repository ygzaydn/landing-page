import React from "react";
import { withWindowConsumer } from "../../Window/Context";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  bigItem: {
    color: "black",
    fontSize: "60px",
    WebkitTextStrokeColor: "white",
    WebkitTextStrokeWidth: "1px",
    "&:hover": {
      color: "white",
    },
  },
}));

const BigMenu = ({ limit, width, text, clickFunction }) => {
  const classes = useStyles();

  if (width < limit) {
    return (
      <Grid item xs={12}>
        <Typography
          className={classes.bigItem}
          onClick={() => {
            clickFunction();
          }}
        >
          {text}
        </Typography>
      </Grid>
    );
  } else {
    return null;
  }
};

export default withWindowConsumer(BigMenu);
