import React from "react";
import { Dialog, Grid, Paper } from "@material-ui/core";
import HordeLogo from "../../assets/horde-logo.svg";
import AllianceLogo from "../../assets/alliance-logo.svg";
import { makeStyles } from "@material-ui/core/styles";
import { withFactionConsumer } from "../Faction/Context";
import { withWindowConsumer } from "../Window/Context";

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
    maxHeight: "90vh",
  },
  gridContainer: {
    margin: 0,
    background: "gray",
  },
  gridItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "50%",
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

const Landing = ({ changeFaction, onClose, open, width, limit }) => {
  const classes = useStyles();
  const handleClose = () => {
    onClose();
  };
  return (
    <Dialog onClose={handleClose} open={open}>
      {width >= limit ? (
        <div className={classes.cover}>
          <Grid container className={classes.gridContainer} spacing={1}>
            <Grid className={classes.gridItem} height="150%" item xs={12}>
              <Paper className={classes.paper}>Choose your faction</Paper>
            </Grid>
            <Grid className={classes.gridItem} item xs={6}>
              <img
                className={classes.logo}
                onClick={() => {
                  changeFaction("Alliance");
                  handleClose();
                }}
                src={AllianceLogo}
                alt="Alliance Logo"
              />
            </Grid>
            <Grid className={classes.gridItem} item xs={6}>
              <img
                className={classes.logo}
                src={HordeLogo}
                alt="Horde Logo"
                onClick={() => {
                  changeFaction("Horde");
                  handleClose();
                }}
              />
            </Grid>
          </Grid>
        </div>
      ) : (
        <div className={classes.cover}>
          <Grid container className={classes.gridContainer} spacing={1}>
            <Grid className={classes.gridItem} height="150%" item xs={12}>
              <Paper className={classes.paper}>Choose your faction</Paper>
            </Grid>
            <Grid className={classes.gridItem} item xs={12}>
              <img
                className={classes.logo}
                onClick={() => {
                  changeFaction("Alliance");
                  handleClose();
                }}
                src={AllianceLogo}
                alt="Alliance Logo"
              />
            </Grid>
            <Grid className={classes.gridItem} item xs={12}>
              <img
                className={classes.logo}
                src={HordeLogo}
                alt="Horde Logo"
                onClick={() => {
                  changeFaction("Horde");
                  handleClose();
                }}
              />
            </Grid>
          </Grid>
        </div>
      )}
    </Dialog>
  );
};

export default withWindowConsumer(withFactionConsumer(Landing));
