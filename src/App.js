import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Drawer, Button } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import "./App.css";
import {
  withWindowProvider,
  withWindowConsumer,
} from "./components/Window/Context";

import MenuBurger from "./components/MenuBurger/MenuBurger";
import Landing from "./components/Landing/Landing";
import {
  withFactionConsumer,
  withFactionProvider,
} from "./components/Faction/Context";

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

const App = ({ width, height, faction }) => {
  const classes = useStyles();
  const [state, setState] = useState(false);
  const [openLanding, setOpenLanding] = useState(true);

  const handleLandingOpen = () => {
    setOpenLanding(true);
  };
  const handleLandingClose = () => {
    setOpenLanding(false);
  };

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
      <Landing onClose={handleLandingClose} open={openLanding} />
      <Drawer anchor={"right"} open={state} onClose={toggleDrawer(false)}>
        <MenuBurger onClose={toggleDrawer} />
      </Drawer>

      <div className={classes.cover}>
        <Grid container className={classes.gridContainer} spacing={1}>
          <Grid className={classes.gridItem} height="150%" item xs={12}>
            <Paper className={classes.paper}>
              Width: {width} - Height: {height}
            </Paper>
          </Grid>
          <Grid className={classes.gridItem} height="150%" item xs={12}>
            <Paper className={classes.paper}>Current Faction: {faction}</Paper>
          </Grid>
          <Grid className={classes.gridItem} height="150%" item xs={12}>
            <Button onClick={handleLandingOpen}>Change Faction</Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default withFactionProvider(
  withFactionConsumer(withWindowProvider(withWindowConsumer(App)))
);
