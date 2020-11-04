import React from "react";
import { WindowContext } from "./Context";

export const withWindowConsumer = (Component) => {
  const WithWindowConsumer = (props) => {
    return (
      <WindowContext.Consumer>
        {({ width, height }) => (
          <Component {...props} width={width} height={height} />
        )}
      </WindowContext.Consumer>
    );
  };
  return WithWindowConsumer;
};
