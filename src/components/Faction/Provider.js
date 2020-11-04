import React, { useState } from "react";
import { FactionContext } from "./Context";

export const withFactionProvider = (Component) => {
  const WithFactionProvider = (props) => {
    const [faction, setFaction] = useState("not set");
    const changeFaction = (faction) => setFaction(faction);

    return (
      <FactionContext.Provider value={{ faction, changeFaction }}>
        <Component {...props} />
      </FactionContext.Provider>
    );
  };
  return WithFactionProvider;
};
