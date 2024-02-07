"use client";

import { Typography } from "@/components";
import { ServiceItem } from "./ServiceItem";
import { StickyWrapper } from "./StickyWrapper";
import servicesData from "./servicesData";
import cn from "@/helpers/cn";
import { blue, white } from "tailwindcss/colors";

import {
  motion,
  useInView,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

const ServicesSections = () => {
  const sectionRef = useRef(null);
  // useInView()
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.2],
    [white, blue[50]]
  );

  return (
    <motion.div
      style={{
        backgroundColor,
      }}
    >
      <div
        className="container lg:grid lg:grid-cols-2 lg:py-0 lg:gap-12"
        id="what-we-do"
        ref={sectionRef}
      >
        <div>
          <StickyWrapper className="h-auto lg:h-screen">
            <div className="max-w-lg justify-self-start lg:py-12">
              <Typography variant="h2">Discover Unmatched Expertise</Typography>
              <Typography variant="body1" className="mt-8">
                Discover a comprehensive range of HVAC services tailored to meet
                your needs at JRI Services. Specializing in installation,
                repair, and maintenance for all major HVAC brands, our team of
                highly trained technicians ensures your indoor comfort is never
                compromised. From precise installations that maximize energy
                efficiency to prompt repairs that restore functionality, we have
                the expertise to handle it all. Our services include:
              </Typography>
            </div>
          </StickyWrapper>
        </div>

        {/* <div className="h-40"></div> */}
        <div>
          <ServiceItem className="lg:hidden" {...servicesData[0]} />

          <div className="sticky top-0 lg:max-w-lg">
            {servicesData.map((item, i) => {
              return (
                <StickyWrapper
                  key={i}
                  className={cn(i === 0 && "hidden lg:grid")}
                >
                  <ServiceItem {...item} />
                </StickyWrapper>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesSections;
