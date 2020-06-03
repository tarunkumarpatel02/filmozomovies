import React from 'react';
import { useMediaQuery } from "react-responsive";

const SmallLaptopTabs = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992,maxWidth: 1199 });
    return isDesktop ? children : null;
  };

  export default SmallLaptopTabs;