import React from "react";
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  listcontainerDesktop: {
    display: "flex",
    flexDirection: "column",
    width: "50vw",
    justifyContent: "center",
    alignItems: "center",
  },
  listcontainerMobile: {
    display: "flex",
    flexDirection: "column",
    width: "100vw",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export const MenuBurgerDesktop = () => {
  const classes = useStyles();
  return (
    <div>
      <List className={classes.listcontainerDesktop}>
        <ListItem>Community</ListItem>
        <ListItem>Prices</ListItem>
        <ListItem>List</ListItem>
        <ListItem>Boost</ListItem>
      </List>
    </div>
  );
};

export const MenuBurgerMobile = () => {
  const classes = useStyles();
  return (
    <div>
      <List className={classes.listcontainerMobile}>
        <ListItem>Community</ListItem>
        <ListItem>Prices</ListItem>
        <ListItem>List</ListItem>
        <ListItem>Boost</ListItem>
      </List>
    </div>
  );
};
