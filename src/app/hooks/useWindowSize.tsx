import { useState, useEffect } from "react";

const useWindowSize = (window) => {
  const [windowSize, setWindowSize] = useState({
    width: window?.innerWidth,
    height: window?.innerHeight,
    isMobile: window?.innerWidth < 768,
    isTablet: window?.innerWidth < 1024 && window?.innerWidth >= 768,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window?.innerWidth,
        height: window?.innerHeight,
        isMobile: window?.innerWidth < 768,
        isTablet: window?.innerWidth < 1024 && window?.innerWidth >= 768,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
};

export default useWindowSize;
