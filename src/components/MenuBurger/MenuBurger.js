import React from "react";
import { List, ListItem, Drawer, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { withWindowConsumer } from "../Window/Context";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const useStyles = makeStyles(() => ({
  drawerMain: {
    backgroundColor: "black",
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
}));

const MenuBurger = ({ width, limit, menuOpenState, onMenuClose }) => {
  const classes = useStyles();
  const { drawerMain } = classes;
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
      <Container>
        {width <= limit ? (
          <List className={classes.listcontainerMobile}>
            <HighlightOffIcon
              className={classes.listItem}
              onClick={onMenuClose(false)}
            />
            {items.map((el) => (
              <ListItem className={classes.listItem}>{el}</ListItem>
            ))}
          </List>
        ) : (
          <List className={classes.listcontainerDesktop}>
            <HighlightOffIcon onClick={onMenuClose(false)} />
            {items.map((el) => (
              <ListItem className={classes.listItem}>{el}</ListItem>
            ))}
          </List>
        )}
      </Container>
    </Drawer>
  );
};

export default withWindowConsumer(MenuBurger);
