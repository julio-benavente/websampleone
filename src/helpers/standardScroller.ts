import { scroller, ScrollElementProps, LinkProps } from "react-scroll";

const standardScroller = (path: string, linkProps?: Omit<LinkProps, "to">) =>
  scroller.scrollTo(path, {
    duration: 1000,
    delay: 100,
    smooth: "easeOutCubic",
    offset: -75, // Scrolls to element + 50 pixels down the page
    ...linkProps,
  });

export default standardScroller;
