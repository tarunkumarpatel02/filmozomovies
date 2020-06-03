import React from 'react';
import { useMediaQuery } from "react-responsive";

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1200,maxWidth: 1600 });
    return isDesktop ? children : null;
  };

  export default Desktop;