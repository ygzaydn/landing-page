import React from "react";
import { withWindowConsumer } from "../../Window/Context";
import { withFactionConsumer } from "../../Faction/Context";
import { Grid, Container } from "@material-ui/core";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { makeStyles } from "@material-ui/core/styles";
import HordeLogo from "../../../assets/horde-logo.svg";
import AllianceLogo from "../../../assets/alliance-logo.svg";

const useStyles = makeStyles(() => ({
  button: {
    position: "absolute",
    left: "5%",
    top: "3%",
    transform: "scale(1.75)",
    color: "white",
  },
  shoppingCard: {
    color: "white",
  },
  logo: {
    width: "20px",
    height: "auto",
  },
  bigMenuContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));

const Header = ({ width, limit, onMenuClose, faction }) => {
  const classes = useStyles();
  console.log(faction);
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
    return (
      <Container className={classes.bigMenuContainer}>
        {faction === "Horde" ? (
          <img className={classes.logo} src={HordeLogo} alt="Horde Logo" />
        ) : (
          <img
            className={classes.logo}
            src={AllianceLogo}
            alt="Alliance Logo"
          />
        )}
        <ShoppingCartIcon className={classes.shoppingCard} />;
      </Container>
    );
  }
};

export default withFactionConsumer(withWindowConsumer(Header));
