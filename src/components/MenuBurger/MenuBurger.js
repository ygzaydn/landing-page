import React from "react";
import {
  List,
  ListItem,
  Drawer,
  Grid,
  Typography,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { withWindowConsumer } from "../Window/Context";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import Header from "./Header/Header";
import BigMenu from "./BigMenu/BigMenu";

const useStyles = makeStyles(() => ({
  drawerMain: {
    backgroundColor: "black",
  },
  containerMain: {
    height: "100%",
  },
  button: {
    color: "white",
  },
  listItem: {
    color: "black",
    fontSize: "60px",
    WebkitTextStrokeColor: "white",
    WebkitTextStrokeWidth: "1px",
    "&:hover": {
      color: "white",
    },
  },
  listcontainerDesktop: {
    display: "flex",
    flexDirection: "column",
    width: "50vw",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
  },
  listcontainerMobile: {
    display: "flex",
    flexDirection: "column",
    width: "100vw",
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    color: "white",
  },
}));

const MenuBurger = ({ width, limit, menuOpenState, onMenuClose }) => {
  const classes = useStyles();
  const { drawerMain, containerMain } = classes;
  const items = ["Community", "Prices", "List", "Boost"];

  return (
    <Drawer
      className={classes.drawermain}
      anchor={"right"}
      open={menuOpenState}
      onClose={onMenuClose(false)}
      classes={{
        paperAnchorRight: drawerMain,
      }}
    >
      {width <= limit ? (
        <Grid
          container
          classes={{
            container: containerMain,
          }}
        >
          <Header onMenuClose={onMenuClose} />
          <BigMenu text={"Home"} clickFunction={() => console.log("Home")} />
          <BigMenu
            text={"Product"}
            clickFunction={() => console.log("Product")}
          />
          <BigMenu
            text={"Discount"}
            clickFunction={() => console.log("Discount")}
            hotDeal={true}
          />
          <BigMenu
            text={"Giveaway"}
            clickFunction={() => console.log("Giveaway")}
          />

          <Divider className={classes.button} flexItem={true} />
          <Grid item xs={6}>
            <Typography className={classes.footer}>Small</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography className={classes.footer}>Small</Typography>
          </Grid>

          <Grid item xs={3}>
            <Typography className={classes.footer}>Footer</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography className={classes.footer}>Footer</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography className={classes.footer}>Footer</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography className={classes.footer}>Footer</Typography>
          </Grid>
        </Grid>
      ) : (
        <List className={classes.listcontainerDesktop}>
          <HighlightOffIcon
            className={classes.button}
            onClick={onMenuClose(false)}
          />
          {items.map((el) => (
            <ListItem className={classes.listItem}>{el}</ListItem>
          ))}
        </List>
      )}
    </Drawer>
  );
};

export default withWindowConsumer(MenuBurger);
