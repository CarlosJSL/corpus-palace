import { useState, useEffect } from "react";

const SCROLL_THRESHOLD = 450;

const useScroll = () => {
  const windowObj = typeof window !== "undefined" ? window : {};
  const [isScrollAtTop, setIsScrollAtTop] = useState(
    (windowObj.scrollY || 0) <= SCROLL_THRESHOLD,
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = windowObj.scrollY || document.documentElement.scrollTop;
      setIsScrollAtTop(scrollTop <= SCROLL_THRESHOLD);
    };

    windowObj.addEventListener("scroll", handleScroll);

    return () => {
      windowObj.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isScrollAtTop;
};

export default useScroll;
