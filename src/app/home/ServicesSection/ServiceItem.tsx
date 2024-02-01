"use client";

import { Typography } from "@/components";
import cn from "@/helpers/cn";
import AnimationSoftwareImage from "@/../public/assets/images/32164332_animation_software.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import { createShowWhileInViewAnimation } from "@/helpers/animations";

const animation = createShowWhileInViewAnimation({
  viewport: {
    once: false,
    margin: "0px",
    amount: 0.5,
  },
});

export const ServiceItem = ({ className }: { className?: string }) => {
  return (
    <motion.div
      className={cn("bg-white py-8", "lg:py-12", className)}
      {...animation}
    >
      <Image
        src={AnimationSoftwareImage}
        alt=""
        className="w-full aspect-video object-cover rounded-md mb-8"
      />

      <Typography variant="h3" component="h2" className="font-semibold">
        Lorem ipsum dolor sit amet consectetur dolorem.
      </Typography>
      <Typography variant="body1" className="mt-4">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem
        voluptatem perferendis magnam? Totam, illum eius, a ipsum ullam quos
        autem doloribus esse quibusdam necessitatibus earum ipsam dolores, quo
        quia amet.
      </Typography>
    </motion.div>
  );
};
