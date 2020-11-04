import React, { useState, useEffect } from "react";
import { WindowContext } from "./Context";

export const windowWrapperProvider = (Component) => {
  const WindowWrapper = (props) => {
    const getDimensions = () => {
      const w = window;
      const d = document;
      const documentElement = d.documentElement;
      const body = d.getElementsByTagName("body")[0];
      const width =
        w.innerWidth || documentElement.clientWidth || body.clientWidth;
      const height =
        w.innerHeight || documentElement.clientHeight || body.clientHeight;

      return { width, height };
    };

    const [dimension, setDimension] = useState(getDimensions());
    useEffect(() => {
      window.addEventListener("resize", updateDimensions);
      return () => {
        window.removeEventListener("resize", updateDimensions);
      };
    }, []);

    const updateDimensions = () => {
      setDimension(getDimensions());
    };
    return (
      <WindowContext.Provider value={dimension}>
        <Component {...props} />
      </WindowContext.Provider>
    );
  };
  return WindowWrapper;
};
