"use client";

import { Button, Typography } from "@/components";
import { TeamList } from "./TeamList";
import { createShowWhileInViewAnimation } from "@/helpers/animations";
import { motion } from "framer-motion";

const showWhileInViewAnimation = createShowWhileInViewAnimation();

const TeamSection = () => {
  return (
    <section className="bg-secondary-50/50" id="team">
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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
            cupiditate numquam provident blanditiis aspernatur!
          </Typography>

          <Button className="mt-8 mx-auto">Apply Now</Button>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
