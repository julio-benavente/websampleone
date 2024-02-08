"use client";

import { Button, Typography } from "@/components";
import { TeamList } from "./TeamList";
import { createShowWhileInViewAnimation } from "@/helpers/animations";
import { motion } from "framer-motion";

const showWhileInViewAnimation = createShowWhileInViewAnimation();

const TeamSection = () => {
  return (
    <section className="" id="team">
      <div className="container">
        <motion.div className="max-w-lg mx-auto" {...showWhileInViewAnimation}>
          <Typography variant="h2" className="text-center">
            Our Team
          </Typography>
          <Typography className="text-center mt-2">
            Get to know the dedicated individuals who make your comfort their
            priority.
          </Typography>
        </motion.div>
        <TeamList />

        <motion.div
          className="mt-12 lg:mt-24 grid justify-center max-w-xl mx-auto"
          {...showWhileInViewAnimation}
        >
          <Typography variant="h3" className="text-center">
            We are hiring
          </Typography>
          <Typography variant="body1" className="mt-2 text-center">
            If you're looking for a dynamic work environment and opportunities
            for growth, explore our available positions and apply today!
          </Typography>

          <a
            href="https://linkedin.com"
            className="mt-8 mx-auto"
            target="_blank"
          >
            <Button>Apply Now</Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
