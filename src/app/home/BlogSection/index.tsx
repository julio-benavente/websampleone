"use client";

import React from "react";
import { Typography } from "@/components";
import cn from "@/helpers/cn";
import { PostItem } from "./PostItem";
import { motion } from "framer-motion";
import { createShowWithStaggerChildren } from "@/helpers/animations";

const BlogSection = () => {
  return (
    <section className="container">
      <div className="max-w-lg">
        <Typography variant="h2">Recent news</Typography>
        <Typography className="mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ad
          non aliquid repellat? Enim, cupiditate vitae ullam est temporibus
          modi.
        </Typography>
      </div>
      <PostList />
    </section>
  );
};

export default BlogSection;

const MotionPostItem = motion(PostItem);

const showWithStaggerChildren = createShowWithStaggerChildren();

const PostList = () => {
  return (
    <motion.div
      className={cn("grid gap-y-8 mt-12 lg:flex gap-x-8")}
      {...showWithStaggerChildren}
    >
      <MotionPostItem variants={showWithStaggerChildren.variants} />
      <MotionPostItem variants={showWithStaggerChildren.variants} />
      <MotionPostItem variants={showWithStaggerChildren.variants} />
    </motion.div>
  );
};
