"use client";
import { motion } from "framer-motion";
import { TeamItem } from "./TeamItem";
import { createShowWhileInViewAnimation } from "@/helpers/animations";
import { v4 } from "uuid";

const showhowWhileInViewAnimation = createShowWhileInViewAnimation({
  viewport: { margin: "-300px" },
});
export const MotionTeamItem = motion(TeamItem);

export const TeamList = () => {
  return (
    <div className="grid gap-8 mt-8 md:grid-cols-2 lg:gap-12 xl:grid-cols-3">
      <MotionTeamItem key={v4()} {...showhowWhileInViewAnimation} />
      <MotionTeamItem key={v4()} {...showhowWhileInViewAnimation} />
      <MotionTeamItem key={v4()} {...showhowWhileInViewAnimation} />
      <MotionTeamItem key={v4()} {...showhowWhileInViewAnimation} />
      <MotionTeamItem key={v4()} {...showhowWhileInViewAnimation} />
      <MotionTeamItem key={v4()} {...showhowWhileInViewAnimation} />
      <MotionTeamItem key={v4()} {...showhowWhileInViewAnimation} />
    </div>
  );
};