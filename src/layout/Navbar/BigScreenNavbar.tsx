"use client";

import cn from "@/helpers/cn";
// import { ButtonIcon } from "@/components";
import useHighlightAcitve from "@/helpers/useHighlightAcitve";
import links from "./navLinks";
import Logo from "./Logo";
import NavLink from "./NavLink";
import Button from "@/components/Button";
import { scroller } from "react-scroll";
import standardScroller from "@/helpers/standardScroller";
import { Phone } from "@mui/icons-material";

const BigScreenNavbar = () => {
  const activeLink = useHighlightAcitve(links.map((e) => e.path));

  return (
    <div
      className={cn(
        "hidden z-50 fixed top-0 w-full bg-white border-b-2 border-primary shadow-md",
        "lg:block"
      )}
    >
      <div
        className={cn(
          "container flex flex-column items-center justify-between z-50",
          "py-4"
        )}
      >
        <Logo />
        <div>
          <nav className="grid grid-flow-col auto-cols-auto gap-8">
            {links.map((link) => {
              if (link.path === "#contact") {
                return <></>;
              }

              return (
                <NavLink
                  key={link.label}
                  {...link}
                  className="mb-0"
                  isActive={activeLink === link.path}
                />
              );
            })}
            <div className="flex gap-x-4">
              <Button
                linkProps={{ href: "/contact" }}
                onClick={() => {
                  standardScroller("contact");
                }}
              >
                Contact
              </Button>
              <a href="tel:+17627563340">
                <Button color="secondary">
                  <Phone className="text-base mr-2" />
                  (762) 756-3340
                </Button>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default BigScreenNavbar;
