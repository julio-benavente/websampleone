import { ReactNode } from "react";
import cn from "@/helpers/cn";

export const StickyWrapper = ({
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
