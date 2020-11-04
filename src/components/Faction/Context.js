import React from "react";
import { withFactionConsumer } from "./Consumer";
import { withFactionProvider } from "./Provider";

export const FactionContext = React.createContext(null);
export { withFactionConsumer, withFactionProvider };
