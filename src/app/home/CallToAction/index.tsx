import { Button, Typography } from "@/components";
import React from "react";
import AnimationSoftwareImage from "@/../public/assets/images/32164332_animation_software.jpg";
import LawyerLegalAdvisorImage from "@/../public/assets/images/lawyer-legal-advisor.jpg";
import Image from "next/image";
import cn from "@/helpers/cn";

const CallToAction = () => {
  return (
    <section className="container py-0">
      <div className="relative w-full rounded-lg">
        <div>
          <div className="absolute w-full h-full object-cover object-center z-0 rounded-lg bg-purple-950"></div>
          <Image
            src={LawyerLegalAdvisorImage}
            alt=""
            className="absolute w-full h-full object-cover object-center z-0 rounded-lg mix-blend-multiply"
          />
        </div>

        <div
          className={cn(
            "relative z-10 w-full h-full px-8 py-8 max-w-lg",
            "md:px-12 md:py-12",
            "lg:px-20 lg:py-16 lg:max-w-xl"
          )}
        >
          <Typography variant="h2" className="text-gray-200">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Distinctio, earum?
          </Typography>
          <Typography variant="body1" className="text-gray-200 mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
            eius veritatis ratione reprehenderit numquam quasi quisquam
            molestias possimus hic officiis?
          </Typography>

          <div className="mt-8">
            <Button>Get more information</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
