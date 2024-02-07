"use client";
import { Typography } from "@/components";
import standardScroller from "@/helpers/standardScroller";

const Logo = () => {
  return (
    <Typography
      className="text-md lg:text-xl font-bold cursor-pointer leading-none font-black"
      tabIndex={1}
      onClick={() => standardScroller("home")}
    >
      <span className="block">Johnson</span>
      <span className="block">Refrigeration</span>
    </Typography>
  );
};

export default Logo;
