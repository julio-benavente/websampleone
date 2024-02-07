import React, { forwardRef } from "react";
import MuiTypography, { TypographyProps } from "@mui/material/Typography";
import cn from "@/helpers/cn";

const Typography = forwardRef(
  (
    { className, classes, variant = "body1", ...props }: TypographyProps,
    ref: any
  ) => {
    return (
      <MuiTypography
        ref={ref}
        variant={variant}
        classes={{
          root: cn("font-primary"),
          h1: cn(
            "text-4xl lg:text-5xl font-cabinet text-purple-900 font-black"
          ),
          h2: cn("text-3xl lg:text-4xl text-purple-900 font-bold"),
          h3: cn("text-2xl lg:text-2xl text-purple-900"),
          h4: cn("text-xl lg:text-xl font-bold text-purple-900"),
          h5: cn("text-lg lg:text-lg font-bold text-purple-900"),
          body1: cn("text-lg text-gray-700"),
          body2: cn("text-base text-gray-700"),
          subtitle1: cn("text-lg text-gray-700"),
          caption: cn("text-sm leading-snug"),
          ...classes,
        }}
        className={cn(className)}
        {...props}
      >
        {props.children}
      </MuiTypography>
    );
  }
);

Typography.displayName = "Typography";

export default Typography;
