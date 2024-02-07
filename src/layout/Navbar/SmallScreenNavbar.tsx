"use client";

import cn from "@/helpers/cn";
// import { ButtonIcon } from "@/components";
import { useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import useHighlightAcitve from "@/helpers/useHighlightAcitve";
import links from "./navLinks";
import Logo from "./Logo";
import NavLink from "./NavLink";
import { Button, IconButton } from "@/components";
import { Phone } from "@mui/icons-material";
const SmallScreenNavbar = () => {
  const activeLink = useHighlightAcitve(links.map((e) => e.path));
  const [navbarIsOpen, setNavbarIsOpen] = useState(false);

  const handleHamburgerMenu = () => {
    setNavbarIsOpen(!navbarIsOpen);
  };

  const navRef = useRef<HTMLDivElement>(null);
  const handleHamburgerMenuRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(navRef, (e) => {
    if (!handleHamburgerMenuRef?.current?.contains(e.target as Node)) {
      setNavbarIsOpen(false);
    }
  });

  return (
    <div
      className={cn(
        "z-50 fixed top-0 w-full border-b-2 border-primary",
        "lg:hidden"
      )}
    >
      <div
        className={cn(
          "container py-4 px-6 lg:px-8 flex flex-column items-center justify-between z-50 bg-white"
        )}
      >
        <Logo />
        <div className="flex gap-2 md:gap-4">
          <a href="tel:+17627563340" className="md:hidden">
            <IconButton size="small" color="secondary">
              <Phone />
            </IconButton>
          </a>
          <a href="tel:+17627563340" className="hidden md:block">
            <Button color="secondary" size="small">
              <Phone className="text-base mr-2" />
              (762) 756-3340
            </Button>
          </a>
          <div
            onClick={handleHamburgerMenu}
            className="cursor-pointer p-1 -right-1"
            ref={handleHamburgerMenuRef}
          >
            {[1, 2, 3].map((e) => (
              <span
                key={e}
                className={cn(
                  "w-6 h-[3px] bg-black block my-1 rounded-full transition-all duration-300 origin-right relative",
                  { "[&:nth-of-type(1)]:-rotate-45": navbarIsOpen },
                  {
                    "[&:nth-of-type(1)]:-translate-y-[1px] [&:nth-of-type(1)]:-translate-x-[2px]":
                      navbarIsOpen,
                  },
                  "[&:nth-of-type(2)]:origin-center",
                  {
                    "[&:nth-of-type(2)]:scale-0 [&:nth-of-type(2)]:duration-100":
                      navbarIsOpen,
                  },
                  { "[&:nth-of-type(3)]:rotate-45": navbarIsOpen },
                  {
                    "[&:nth-of-type(3)]:translate-y-[2px] [&:nth-of-type(3)]:-translate-x-[2px]":
                      navbarIsOpen,
                  }
                )}
              ></span>
            ))}
          </div>
        </div>
      </div>

      <div
        className={cn(
          "absolute px-6 w-full transition-transform duration-500 -translate-y-full -z-10",
          {
            "translate-y-0.5": navbarIsOpen,
          }
        )}
        ref={navRef}
      >
        <nav
          className={cn(
            "py-8 px-10 border-b-2 border-l-2 border-r-2 border-black rounded-b-lg bg-white"
          )}
        >
          {links.map((link) => (
            <NavLink
              key={link.label}
              {...link}
              isActive={activeLink === link.path}
              onClick={() => setNavbarIsOpen(false)}
            />
          ))}
        </nav>
      </div>
    </div>
  );
};

export default SmallScreenNavbar;
