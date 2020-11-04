import React from "react";
import { FactionContext } from "./Context";

export const withFactionConsumer = (Component) => {
  const WithFactionConsumer = (props) => {
    return (
      <FactionContext.Consumer>
        {({ faction, changeFaction }) => (
          <Component
            {...props}
            faction={faction}
            changeFaction={changeFaction}
          />
        )}
      </FactionContext.Consumer>
    );
  };
  return WithFactionConsumer;
};
