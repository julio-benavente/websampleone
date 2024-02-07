import LawyerAdvisorImage from "@/../public/assets/images/lawyer-legal-advisor.jpg";
import { Typography } from "@/components";
import {
  Email as EmailIcon,
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
} from "@mui/icons-material";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { LegacyRef, forwardRef } from "react";

interface Props {
  name: string;
  position: string;
  image: StaticImageData | string;
  description: string;
  linkedIn?: string;
  twitter?: string;
  mail?: string;
}

export const TeamItem = forwardRef(
  (props: Props, ref: LegacyRef<HTMLDivElement>) => {
    return (
      <div ref={ref}>
        <Image
          src={props.image}
          alt=""
          className="rounded w-full aspect-square object-cover object-top  lg:aspect-[4/3]"
        />

        <Typography className="text-center mt-4">{props.name}</Typography>
        <Typography variant="body2" className="text-center">
          {props.position}
        </Typography>

        <Typography
          variant="body2"
          className="text-center mt-4 max-w-md mx-auto"
        >
          {props.description}
        </Typography>

        <div className="mt-4 grid grid-flow-col auto-cols-auto justify-center gap-2">
          {props.linkedIn && (
            <Link href={props.linkedIn} className="group">
              <LinkedInIcon className="text-3xl text-gray-700 group-hover:text-gray-500" />
            </Link>
          )}
          {props.twitter && (
            <Link href={props.twitter} className="group">
              <TwitterIcon className="text-3xl text-gray-700 group-hover:text-gray-500" />
            </Link>
          )}
          {props.mail && (
            <Link href={props.mail} className="group">
              <EmailIcon className="text-3xl text-gray-700 group-hover:text-gray-500" />
            </Link>
          )}
        </div>
      </div>
    );
  }
);
