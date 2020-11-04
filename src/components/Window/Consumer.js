import React from "react";
import { WindowContext } from "./Context";

export const windowWrapperConsumer = (Component) => {
  const WindowWrapperConsumer = (props) => {
    return (
      <WindowContext.Consumer>
        {({ width, height }) => (
          <Component {...props} width={width} height={height} />
        )}
      </WindowContext.Consumer>
    );
  };
  return WindowWrapperConsumer;
};
