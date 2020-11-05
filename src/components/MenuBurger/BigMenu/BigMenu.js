import React from "react";
import { withWindowConsumer } from "../../Window/Context";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Badge } from "@material-ui/core";
import HotDealIcon from "../../../assets/hot-deal.svg";

const useStyles = makeStyles(() => ({
  bigItem: {
    color: "black",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    fontSize: "60px",
    WebkitTextStrokeColor: "white",
    WebkitTextStrokeWidth: "1px",
    "&:hover": {
      color: "white",
    },
  },
  hotDealIcon: {
    width: "20%",
    height: "auto",
  },
}));

const BigMenu = ({ limit, width, text, clickFunction, hotDeal }) => {
  const classes = useStyles();

  if (width < limit) {
    console.log(hotDeal);
    return (
      <Grid item xs={12}>
        <Typography
          className={classes.bigItem}
          onClick={() => {
            clickFunction();
          }}
        >
          {hotDeal === true ? (
            <Badge
              badgeContent={
                <img
                  className={classes.hotDealIcon}
                  src={HotDealIcon}
                  alt="HotDealIcon"
                />
              }
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
            >
              <Typography
                className={classes.bigItem}
                onClick={() => {
                  clickFunction();
                }}
              >
                {text}
              </Typography>
            </Badge>
          ) : (
            <Typography
              className={classes.bigItem}
              onClick={() => {
                clickFunction();
              }}
            >
              {text}
            </Typography>
          )}
        </Typography>
      </Grid>
    );
  } else {
    return null;
  }
};

export default withWindowConsumer(BigMenu);
