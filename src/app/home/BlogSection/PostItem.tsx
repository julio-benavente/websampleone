import React, { forwardRef } from "react";
import LawyerImage from "@/../public/assets/images/lawyer-legal-advisor.jpg";
import Image from "next/image";
import { Link, Typography } from "@/components";
import cn from "@/helpers/cn";

export const transition = "duration-500 ease-out";

export const PostItem = forwardRef(
  (props, ref: React.LegacyRef<HTMLDivElement>) => {
    return (
      <div
        className={cn(
          "flex-1 hover:flex-grow-[1.4] transition-[flex-grow]",
          transition
        )}
        ref={ref}
      >
        <div className="min-h-96 relative grid group">
          <Image
            src={LawyerImage}
            alt=""
            className="rounded absolute object-cover w-full h-full z-0"
          />
          <div className="rounded absolute w-full h-full z-10 bg-black/70"></div>

          <div className="z-20 relative p-6 self-end">
            <div
              className={cn(
                "transition-[opacity] opacity-0 group-hover:opacity-100"
              )}
            >
              <Typography className="text-white/80">Jan, 23 2023</Typography>
              <Typography className="text-white/80">
                Well being, Finalcial freedom
              </Typography>
            </div>
            <Typography
              variant="h2"
              component="h4"
              className="mt-4 text-white transition-all"
            >
              Blog title
            </Typography>

            <div
              className={cn(
                "grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] [&>*]:overflow-hidden",
                transition
              )}
            >
              <div
                className={cn(
                  "transition-[opacity] opacity-0 group-hover:opacity-100",
                  transition
                )}
              >
                <Typography variant="body2" className={cn("mt-4 text-white")}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  voluptatibus consectetur iure minus molestias ut quas id
                  impedit veniam corrupti?
                </Typography>

                <Link type="action">Learn more</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
