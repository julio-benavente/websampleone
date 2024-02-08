"use client";

import { Button, Typography } from "@/components";
import React from "react";
import AnimationSoftwareImage from "@/../public/assets/images/32164332_animation_software.jpg";
import LawyerLegalAdvisorImage from "@/../public/assets/images/lawyer-legal-advisor.jpg";
import ACInstallation from "@/../public/assets/images/maintance-service.jpg";
import Image from "next/image";
import cn from "@/helpers/cn";
import { Variants, motion } from "framer-motion";
import standardScroller from "@/helpers/standardScroller";

const MotionTypography = motion(Typography);

const variants: Variants = {
  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.5,
      staggerChildren: 0.3,
      ease: "easeInOut",
    },
  },
  hidden: {
    y: -10,
    opacity: 0,
  },
};

const CallToAction = () => {
  return (
    <section className="container">
      <div className="relative w-full rounded-lg">
        <div>
          <div className="absolute w-full h-full object-cover object-center z-0 rounded-lg bg-purple-950"></div>
          <Image
            src={ACInstallation}
            alt=""
            className="absolute w-full h-full object-cover object-center z-0 rounded-lg mix-blend-multiply"
          />
        </div>

        <motion.div
          className={cn(
            "relative z-10 w-full h-full px-8 py-8 max-w-lg",
            "md:px-12 md:py-12",
            "lg:px-20 lg:py-16 lg:max-w-xl"
          )}
          initial="hidden"
          whileInView="visible"
          variants={variants}
          viewport={{ once: false }}
        >
          <MotionTypography
            variant="h2"
            className="[&]:text-gray-200"
            variants={variants}
          >
            Don&lsquo;t Sweat It - Reach Out to Us Today for Reliable HVAC
            Solutions
          </MotionTypography>
          <MotionTypography
            variant="body1"
            className="[&]:text-gray-200 mt-4"
            variants={variants}
          >
            Beat the heat with ease! Our seasoned HVAC team guarantees
            year-round comfort. From repairs to installations and maintenance,
            we&lsquo;ve got you covered. Say farewell to sweltering summers and
            chilly winters - contact us now for top-notch HVAC services!
          </MotionTypography>

          <motion.div className="mt-8" variants={variants}>
            <Button
              size="large"
              color="secondary"
              onClick={() => {
                standardScroller("contact");
              }}
            >
              Get more information
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
