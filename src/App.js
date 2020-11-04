import React, { useState } from "react";
import HordeLogo from "./assets/horde-logo.svg";
import AllianceLogo from "./assets/alliance-logo.svg";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Drawer } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import "./App.css";
import { windowWrapperProvider } from "./components/Window/Provider";
import { windowWrapperConsumer } from "./components/Window/Consumer";
import {
  MenuBurgerDesktop,
  MenuBurgerMobile,
} from "./components/MenuBurger/MenuBurger";

const useStyles = makeStyles(() => ({
  paper: {
    textAlign: "center",
    height: "100%",
    width: "90%",
    borderRadius: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "inherit",
  },
  cover: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    margin: "auto",
    minHeight: "90vh",
  },
  gridContainer: {
    minWidth: "350px",
    maxWidth: "600px",
    minHeight: "25vh",
    maxHeight: "500px",
    background: "gray",
  },
  gridItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "50%",
  },
  listcontainer: {
    display: "flex",
    flexDirection: "column",
    flexBasis: "100%",
    height: "100vh",
    width: "50vw",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    position: "sticky",
    marginLeft: "auto",
    color: "white",
    top: 0,
    left: "95vw",
  },
  logo: {
    maxHeight: "70%",
    maxWidth: "30vw",
    height: "auto",
    width: "auto",
    filter: "brightness(0.5)",
    "&:hover": {
      filter: "brightness(1)",
    },
  },
}));

const App = ({ width, height }) => {
  const classes = useStyles();
  const [state, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState(open);
  };

  return (
    <div>
      <MenuIcon
        className={classes.icon}
        fontSize="large"
        onClick={toggleDrawer(true)}
      />

      <Drawer anchor={"right"} open={state} onClose={toggleDrawer(false)}>
        {width >= 500 ? <MenuBurgerDesktop /> : <MenuBurgerMobile />}
      </Drawer>

      <div className={classes.cover}>
        <Grid container className={classes.gridContainer} spacing={1}>
          <Grid className={classes.gridItem} height="150%" item xs={12}>
            <Paper className={classes.paper}>
              {width} - {height}
            </Paper>
          </Grid>
          <Grid className={classes.gridItem} item xs={6}>
            <img
              className={classes.logo}
              src={AllianceLogo}
              alt="Alliance Logo"
            />
          </Grid>
          <Grid className={classes.gridItem} item xs={6}>
            <img className={classes.logo} src={HordeLogo} alt="Horde Logo" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default windowWrapperProvider(windowWrapperConsumer(App));
