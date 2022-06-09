import { useState } from "react";

export const useScroll = () => {
  const [scroll, setScroll] = useState(false);
  const onScroll = () => {
    const scrollValue = window.scrollY;
    if (scrollValue > 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  document.addEventListener("scroll", onScroll);
  return { scroll };
};
