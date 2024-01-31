import { Typography } from "@/components";
import React, { ReactNode } from "react";
import { GraphicEq } from "@mui/icons-material";
import cn from "@/helpers/cn";
import AnimationSoftwareImage from "@/../public/assets/images/32164332_animation_software.jpg";
import Image from "next/image";

const ServicesSections = () => {
  return (
    <div className="container lg:grid lg:grid-cols-2 lg:py-0 lg:gap-12">
      <div>
        <StickyWrapper className="h-auto lg:h-screen">
          <div className="max-w-lg justify-self-start lg:py-12">
            <Typography variant="h2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde,
              dolorem.
            </Typography>
            <Typography variant="body1" className="mt-8">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem voluptatem perferendis magnam? Totam, illum eius, a
              ipsum ullam quos autem doloribus esse quibusdam necessitatibus
              earum ipsam dolores, quo quia amet.
            </Typography>
          </div>
        </StickyWrapper>
      </div>

      {/* <div className="h-40"></div> */}
      <div>
        <ServiceItem className="lg:hidden" />

        <div className="sticky top-0 lg:max-w-lg">
          <StickyWrapper className="hidden lg:grid">
            <ServiceItem />
          </StickyWrapper>

          <StickyWrapper>
            <ServiceItem />
          </StickyWrapper>
          <StickyWrapper>
            <ServiceItem />
          </StickyWrapper>
        </div>
      </div>
    </div>
  );
};

export default ServicesSections;

const StickyWrapper = ({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn("h-screen sticky top-0 grid place-items-center", className)}
    >
      {children}
    </div>
  );
};

const ServiceItem = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "bg-white py-8",
        "lg:py-12",
        className
        // "p-4 border border-black rounded-sm mb-8"
      )}
    >
      {/* <div className="w-16 aspect-square rounded grid place-items-center bg-gray-100">
      <GraphicEq />
    </div> */}

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
    </div>
  );
};
