"use client";

import { Button, Typography } from "@/components";
import AnimationSoftwareImage from "@/../public/assets/images/32164332_animation_software.jpg";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cn from "@/helpers/cn";
import InfiniteLooper from "./InfiniteLooper";
import { motion, Variants } from "framer-motion";
import { createShowWithStaggerChildren } from "@/helpers/animations";

const MotionTypography = motion(Typography);

const headlinesAnimation = createShowWithStaggerChildren({
  viewport: {
    once: false,
  },
});

const HeroSection = () => {
  return (
    <div className={cn("container", "lg:grid lg:grid-cols-2 lg:gap-x-12")}>
      <motion.div
        className={cn("max-w-xl", "lg:mt-40")}
        {...headlinesAnimation}
      >
        <MotionTypography
          variant="h1"
          className="mb-4 font-black"
          variants={headlinesAnimation.variants}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing.
        </MotionTypography>
        <MotionTypography
          variant="body1"
          className="mb-8"
          variants={headlinesAnimation.variants}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ipsum
          sint consequatur dolore voluptatibus sunt corporis provident aperiam,
          veritatis ab in maiores, iusto labore quae ad tenetur, eum ex
          eligendi!
        </MotionTypography>
        <motion.div
          className="flex gap-x-4"
          variants={headlinesAnimation.variants}
        >
          <Button>Button One</Button>
          <Button color="secondary">Button Two</Button>
        </motion.div>
      </motion.div>

      <ImagesAnimated />
    </div>
  );
};

export default HeroSection;

interface ImagesRowPros {
  variant: "left" | "right";
}

const ImagesAnimated = () => {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-x-4 mt-8 h-[420px]",
        "sm:h-[520px]",
        "md:h-[720px]",
        "lg:mt-auto lg:grid"
      )}
    >
      <InfiniteLooper variant="drop" duration="40s">
        <ImagesRow />
      </InfiniteLooper>
      <InfiniteLooper variant="drop" direction="reverse" duration="40s">
        <ImagesRow />
      </InfiniteLooper>
    </div>
  );
};

const ImagesRow = () => {
  return Array(4)
    .fill(null)
    .map((e, i) => {
      return (
        <div className="w-full h-full p-0 m-0 border-none block mb-4" key={i}>
          <Image
            key={i}
            src={AnimationSoftwareImage}
            alt=""
            className={cn(
              "object-cover w-full h-full p-0 m-0 border-none block"
            )}
          />
        </div>
      );
    });
};
