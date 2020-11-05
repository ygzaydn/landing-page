import React from "react";
import { WindowContext } from "./Context";

export const withWindowConsumer = (Component) => {
  const WithWindowConsumer = (props) => {
    return (
      <WindowContext.Consumer>
        {({ width, height, limit }) => (
          <Component {...props} width={width} height={height} limit={limit} />
        )}
      </WindowContext.Consumer>
    );
  };
  return WithWindowConsumer;
};
