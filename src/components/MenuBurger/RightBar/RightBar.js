import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  rightBarContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    height: "100%",
  },
  rightBarTypography: {
    color: "white",
    transform: "rotate(90deg)",
  },
}));
const RightBar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.rightBarContainer}>
      <Typography className={classes.rightBarTypography}> YOUTUBE </Typography>
      <Typography className={classes.rightBarTypography}>
        {" "}
        INSTAGRAM{" "}
      </Typography>
      <Typography className={classes.rightBarTypography}> FACEBOOK </Typography>
      <Typography className={classes.rightBarTypography}> TWITTER </Typography>
    </Container>
  );
};

export default RightBar;
