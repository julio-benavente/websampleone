"use client";

import { Accordion, Button, Typography } from "@/components";
import { motion } from "framer-motion";
import {
  createShowWhileInViewAnimation,
  createShowWithStaggerChildren,
} from "@/helpers/animations";
import accordionItems from "./accordionItems";
import standardScroller from "@/helpers/standardScroller";

const MotionAccordion = motion(Accordion);
const showWhileInViewAnimation = createShowWhileInViewAnimation();
const showWithStaggerChildren = createShowWithStaggerChildren();

const FAQSection = () => {
  return (
    <section className="bg-primary-900" id="faq">
      <div className="container">
        <motion.div className="max-w-xl" {...showWhileInViewAnimation}>
          <Typography className="[&]:text-white" variant="h2">
            Frequent Questions
          </Typography>
          <Typography className="mt-4 text-white">
            Curious about our HVAC services? Look no further than our FAQ
            section! We&lsquo;ve compiled a list of frequently asked questions
            to provide you with the insights you need to make informed
            decisions.
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

        <motion.div className="mt-12 lg:mt-24" {...showWhileInViewAnimation}>
          <Typography variant="h3" className="text-center [&]:text-white">
            Still questions?
          </Typography>
          <Typography className="mt-2 text-center text-white">
            Feel free to reach out to us with any additional inquiries or
            concerns.
          </Typography>

          <div className="m-auto w-fit">
            <Button
              className="mx-auto mt-4"
              color="secondary"
              onClick={() => {
                standardScroller("contact");
              }}
            >
              Contact us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
