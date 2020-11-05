import React from "react";
import { withWindowConsumer } from "../../Window/Context";
import { Grid } from "@material-ui/core";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  button: {
    position: "absolute",
    left: "5%",
    top: "3%",
    transform: "scale(1.75)",
    color: "white",
  },
}));

const Header = ({ width, limit, onMenuClose }) => {
  const classes = useStyles();
  if (width < limit) {
    return (
      <Grid item xs={12} sm={3}>
        <HighlightOffIcon
          className={classes.button}
          onClick={onMenuClose(false)}
        />
      </Grid>
    );
  } else {
    return null;
  }
};

export default withWindowConsumer(Header);
