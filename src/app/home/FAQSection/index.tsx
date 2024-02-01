"use client";

import { Accordion, Button, Typography } from "@/components";
import { motion } from "framer-motion";
import {
  createShowWhileInViewAnimation,
  createShowWithStaggerChildren,
} from "@/helpers/animations";
import accordionItems from "./accordionItems";

const MotionAccordion = motion(Accordion);
const showWhileInViewAnimation = createShowWhileInViewAnimation();
const showWithStaggerChildren = createShowWithStaggerChildren();

const FAQSection = () => {
  return (
    <section className="container">
      <motion.div className="max-w-xl" {...showWhileInViewAnimation}>
        <Typography variant="h2">FAQs</Typography>
        <Typography className="mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
          repellat? Odio in non quidem officiis alias! Quisquam unde dolore
          explicabo.
        </Typography>
      </motion.div>

      <motion.div
        className="mt-8 grid gap-4 lg:hidden"
        {...showWithStaggerChildren}
      >
        {accordionItems.length > 0 &&
          accordionItems.map((item) => (
            <MotionAccordion
              key={item.id}
              {...item}
              variants={showWithStaggerChildren.variants}
            />
          ))}
      </motion.div>
      <div className="hidden grid-cols-2 items-start gap-4 lg:grid lg:gap-8">
        <motion.div className="mt-8 grid gap-4 " {...showWithStaggerChildren}>
          {accordionItems.length > 0 &&
            accordionItems
              .slice(0, Math.floor(accordionItems.length / 2))
              .map((item) => (
                <MotionAccordion
                  key={item.id}
                  {...item}
                  variants={showWithStaggerChildren.variants}
                />
              ))}
        </motion.div>
        <motion.div className="mt-8 grid gap-4 " {...showWithStaggerChildren}>
          {accordionItems.length > 0 &&
            accordionItems
              .slice(Math.floor(accordionItems.length / 2))
              .map((item) => (
                <MotionAccordion
                  key={item.id}
                  {...item}
                  variants={showWithStaggerChildren.variants}
                />
              ))}
        </motion.div>
      </div>

      <motion.div className="mt-12" {...showWhileInViewAnimation}>
        <Typography variant="h3" className="text-center">
          Still questions?
        </Typography>
        <Typography className="mt-2 text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </Typography>

        <div className="m-auto w-fit">
          <Button className="mx-auto mt-4">Contact us</Button>
        </div>
      </motion.div>
    </section>
  );
};

export default FAQSection;
