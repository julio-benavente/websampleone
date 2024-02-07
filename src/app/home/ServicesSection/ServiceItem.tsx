"use client";

import { Typography } from "@/components";
import cn from "@/helpers/cn";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { createShowWhileInViewAnimation } from "@/helpers/animations";

const animation = createShowWhileInViewAnimation({
  viewport: {
    once: false,
    margin: "0px",
    amount: 0.5,
  },
});

export const ServiceItem = ({
  className,
  ...props
}: {
  className?: string;
  title: string;
  description: string;
  image: StaticImageData | string;
}) => {
  return (
    <motion.div
      className={cn("bg-blue-50 py-8", "lg:py-12", className)}
      {...animation}
    >
      <Image
        src={props.image}
        alt=""
        className="w-full aspect-video object-cover rounded-md mb-8"
      />

      <Typography variant="h3" component="h2" className="font-semibold">
        {props.title}
      </Typography>
      <Typography variant="body1" className="mt-4">
        {props.description}
      </Typography>
    </motion.div>
  );
};
