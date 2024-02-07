import { scroller } from "react-scroll";

const standardScroller = (path: string) =>
  scroller.scrollTo(path, {
    duration: 1000,
    delay: 100,
    smooth: "easeOutCubic",
    offset: -75, // Scrolls to element + 50 pixels down the page
  });

export default standardScroller;
