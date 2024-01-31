import { Button, Typography } from "@/components";
import React from "react";
import LawyerAdvisorImage from "@/../public/assets/images/lawyer-legal-advisor.jpg";
import Image from "next/image";
import {
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
  Email as EmailIcon,
  Email,
} from "@mui/icons-material";
import Link from "next/link";

const TeamSection = () => {
  return (
    <section className="container">
      <div className="max-w-lg mx-auto">
        <Typography variant="h2" className="text-center">
          Our Team
        </Typography>
        <Typography className="text-center mt-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit debitis
          illo ducimus!
        </Typography>
      </div>
      <TeamList />

      <div className="mt-12 grid justify-center max-w-xl mx-auto lg:mt-16">
        <Typography variant="h3" className="text-center">
          We are hiring
        </Typography>
        <Typography variant="body1" className="mt-2 text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
          cupiditate numquam provident blanditiis aspernatur!
        </Typography>

        <Button className="mt-8 mx-auto">Apply Now</Button>
      </div>
    </section>
  );
};

export default TeamSection;

const TeamList = () => {
  return (
    <div className="grid gap-8 mt-8 md:grid-cols-2 lg:gap-12 xl:grid-cols-3 xl:">
      <TeamItem />
      <TeamItem />
      <TeamItem />
      <TeamItem />
      <TeamItem />
      <TeamItem />
      <TeamItem />
    </div>
  );
};

const TeamItem = () => {
  return (
    <div>
      <Image
        src={LawyerAdvisorImage}
        alt=""
        className="rounded w-full aspect-square object-cover lg:aspect-[4/3]"
      />

      <Typography className="text-center mt-4">Employee Name</Typography>
      <Typography variant="body2" className="text-center">
        Employee Position
      </Typography>

      <Typography variant="body2" className="text-center mt-4 max-w-md mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatibus
        consectetur iure minus molestias ut quas id impedit veniam corrupti?
      </Typography>

      <div className="mt-4 grid grid-flow-col auto-cols-auto justify-center gap-2">
        {[LinkedInIcon, TwitterIcon, Email].map((Icon) => {
          return (
            <Link href="https://google.com/" className="group">
              <Icon className="text-3xl text-gray-700 group-hover:text-primary" />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
