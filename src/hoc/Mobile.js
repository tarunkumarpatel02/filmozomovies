import React from 'react';
import { useMediaQuery } from "react-responsive";

const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    return isMobile ? children : null;
  };

  export default Mobile;