import React from "react";
import {
  Drawer,
  Grid,
  Divider,
  GridList,
  GridListTile,
  Typography,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { withWindowConsumer } from "../Window/Context";
import Header from "./Header/Header";
import BigMenu from "./BigMenu/BigMenu";
import MediumMenu from "./MediumMenu/MediumMenu";
import SmallMenu from "./SmallMenu/SmallMenu";
import RightBar from "./RightBar/RightBar";

const useStyles = makeStyles(() => ({
  drawerMain: {
    backgroundColor: "black",
    WebkitOverflowScrolling: "touch",
  },
  containerMain: {
    height: "100%",
  },
  button: {
    color: "white",
  },
  divider: {
    border: "1px gray solid",
    height: "0px",
  },
  dividerContainer: {
    margin: "auto",
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
  gridTileDesktop: {
    color: "black",
    minWidth: "50vw",
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
  const { drawerMain, containerMain, divider, dividerContainer } = classes;
  return (
    <Drawer
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
          <MediumMenu text={"Contacts"} />
          <MediumMenu text={"Recruitment"} />
          <Grid
            item
            xs={12}
            sm={1}
            classes={{
              root: dividerContainer,
            }}
          >
            <Divider
              classes={{
                middle: divider,
              }}
              variant="middle"
            />{" "}
          </Grid>
          <SmallMenu text={"YOUTUBE"} />
          <SmallMenu text={"INSTAGRAM"} />
          <SmallMenu text={"FACEBOOK"} />
          <SmallMenu text={"TWITTER"} />
        </Grid>
      ) : (
        <Container className={classes.gridTileDesktop}>
          <GridList cellHeight={"(100 / 7)vh"} cols={5} rows={7}>
            <GridListTile cols={4} rows={7}>
              <Header />
              <GridList cellHeight={"(100 / 5)vh"} cols={4} rows={5}>
                <GridListTile cols={2} rows={5}>
                  <GridList cellHeight={"(100 / 5)vh"} cols={1} rows={5}>
                    <GridListTile cols={1} rows={1}>
                      <Typography className={classes.button}>Search</Typography>
                    </GridListTile>
                    <GridListTile cols={1} rows={1}>
                      <Typography className={classes.button}>b1</Typography>
                    </GridListTile>
                    <GridListTile cols={1} rows={1}>
                      <Typography className={classes.button}>b2</Typography>
                    </GridListTile>
                    <GridListTile cols={1} rows={1}>
                      <Typography className={classes.button}>b3</Typography>
                    </GridListTile>
                    <GridListTile cols={1} rows={1}>
                      <Typography className={classes.button}>b4</Typography>
                    </GridListTile>
                  </GridList>
                </GridListTile>
                <GridListTile cols={2} rows={5}>
                  <Typography className={classes.button}>Menu Image</Typography>
                </GridListTile>
              </GridList>
              <GridList rows={1} cols={4}>
                <GridListTile rows={1} cols={2}>
                  <Typography className={classes.button}>m1</Typography>
                </GridListTile>
                <GridListTile rows={1} cols={2}>
                  <Typography className={classes.button}>m2</Typography>
                </GridListTile>
              </GridList>
            </GridListTile>
            <GridListTile cols={1} rows={7}>
              <RightBar />
            </GridListTile>
          </GridList>
        </Container>
      )}
    </Drawer>
  );
};

export default withWindowConsumer(MenuBurger);
