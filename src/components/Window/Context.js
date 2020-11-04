import React from "react";
import { withWindowProvider } from "./Provider";
import { withWindowConsumer } from "./Consumer";

export const WindowContext = React.createContext(null);
export { withWindowConsumer, withWindowProvider };
