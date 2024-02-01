import LawyerAdvisorImage from "@/../public/assets/images/lawyer-legal-advisor.jpg";
import { Typography } from "@/components";
import {
  Email as EmailIcon,
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
} from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { LegacyRef, forwardRef } from "react";

export const TeamItem = forwardRef((props, ref: LegacyRef<HTMLDivElement>) => {
  return (
    <div ref={ref}>
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
        {[LinkedInIcon, TwitterIcon, EmailIcon].map((Icon) => {
          return (
            <Link href="https://google.com/" className="group">
              <Icon className="text-3xl text-gray-700 group-hover:text-gray-500" />
            </Link>
          );
        })}
      </div>
    </div>
  );
});
