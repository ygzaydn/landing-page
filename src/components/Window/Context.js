import React from "react";
import { windowWrapperProvider } from "./Provider";
import { windowWrapperConsumer } from "./Consumer";

export const WindowContext = React.createContext(null);
export { windowWrapperConsumer, windowWrapperProvider };
