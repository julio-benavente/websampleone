"use client";

import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import cn from "@/helpers/cn";

const index = () => {
  return (
    <footer className="bg-primary-900">
      <div className="container">
        <div>
          <div className="grid grid-cols-1 lg:grid-flow-col">
            <div className="grid grid-flow-col auto-cols-auto justify-start items-center gap-x-4">
              {[
                {
                  icon: YouTubeIcon,
                  path: "https://www.youtube.com/",
                },
                {
                  icon: InstagramIcon,
                  path: "https://www.instagram.com/",
                },
                {
                  icon: LinkedInIcon,
                  path: "https://www.linkedin.com/",
                },
              ].map(({ icon: Icon, path }) => {
                return (
                  <a key={path} href={path} target="_blank">
                    <Icon
                      className={cn(
                        "fill-white text-3xl",
                        "lg:hover:fill-white/80 lg:active:fill-white/70"
                      )}
                    />
                  </a>
                );
              })}
            </div>

            <p className="text-white mt-4 lg:mt-0">
              This website has been created by{" "}
              <a
                href="https://juliobenavente.com/"
                target="_blank"
                className={cn(
                  "text-white font-semibold transition-all w-fit",
                  "hover:underline hover:underline-offset-4 hover:decoration-2"
                )}
              >
                Julio Benavente
              </a>
            </p>
          </div>
        </div>
        <div className="w-full h-px bg-white my-8"></div>
        <p className="text-white">
          © {new Date().getFullYear()} Johnson Refrigeration, Inc. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default index;
