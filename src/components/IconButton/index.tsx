import React, { Children } from "react";
import MuiIconButton, { IconButtonProps } from "@mui/material/IconButton";
import cn from "@/helpers/cn";

const IconButton = ({ color = "primary", ...props }: IconButtonProps) => {
  return (
    <MuiIconButton
      disableRipple
      color={color}
      classes={{
        root: cn(
          "rounded",
          props.disabled &&
            cn("bg-gray-100 hover:bg-gray-100 text-text-disabled")
        ),
        colorPrimary: cn(
          "bg-primary hover:bg-primary/90 focus:ring-4 focus:ring-primary/50"
        ),
        colorSecondary: cn(
          "text-gray-800 bg-secondary-400 hover:bg-secondary-400/90 focus:ring-4 focus:ring-secondary-400/50"
        ),
        sizeSmall: cn("[&>svg]:text-xl p-2"),
        sizeMedium: cn("[&>svg]:text-2xl p-3"),
        sizeLarge: cn("[&>svg]:text-3xl p-3"),
      }}
      {...props}
    >
      {props.children}
    </MuiIconButton>
  );
};

export default IconButton;
