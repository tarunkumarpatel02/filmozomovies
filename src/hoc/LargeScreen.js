import React from 'react';
import { useMediaQuery } from "react-responsive";

const LargeScreen = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1600});
    return isDesktop ? children : null;
  };

  export default LargeScreen;