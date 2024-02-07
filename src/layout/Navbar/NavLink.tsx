import cn from "@/helpers/cn";
import standardScroller from "@/helpers/standardScroller";
import { scroller } from "react-scroll";

export interface NavLinkProps {
  label: string;
  path: string;
  className?: string;
  linkClassName?: string;
  isActive: boolean;
  onClick?: () => any;
}

const NavLink = (props: NavLinkProps) => {
  return (
    <div
      className={cn("py-2 mb-1 cursor-pointer", props.className)}
      tabIndex={1}
      onClick={() => {
        standardScroller(props.path.replace("#", ""));
        props.onClick && props.onClick();
      }}
    >
      <a
        // href=""
        className={cn(
          "text-lg text-black/50 hover:text-black transition-all duration-300 lg:text-lg",
          { "font-semibold text-black": props.isActive },
          props.linkClassName
        )}
      >
        {props.label}
      </a>
    </div>
  );
};

export default NavLink;
