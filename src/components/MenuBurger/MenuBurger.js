import React from "react";
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { windowWrapperConsumer } from "../Window/Consumer";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

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

const MenuBurger = ({ width, onClose }) => {
  console.log(width);
  const classes = useStyles();
  return (
    <div>
      {width < 500 ? (
        <List className={classes.listcontainerMobile}>
          <HighlightOffIcon onClick={onClose(false)} />
          <ListItem>Community</ListItem>
          <ListItem>Prices</ListItem>
          <ListItem>List</ListItem>
          <ListItem>Boost</ListItem>
        </List>
      ) : (
        <List className={classes.listcontainerDesktop}>
          <HighlightOffIcon onClick={onClose(false)} />
          <ListItem>Community</ListItem>
          <ListItem>Prices</ListItem>
          <ListItem>List</ListItem>
          <ListItem>Boost</ListItem>
        </List>
      )}
    </div>
  );
};

export default windowWrapperConsumer(MenuBurger);
