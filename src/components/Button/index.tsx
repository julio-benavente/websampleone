"use client";
import MuiButton, { ButtonProps } from "@mui/material/Button";
import cn from "@/helpers/cn";
// import { createTheme, ThemeProvider } from "@mui/material";
import {
  PaletteColorOptions,
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";
import Link from "next/link";

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    appointment: true;
  }
}

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor: string) =>
  augmentColor({ color: { main: mainColor } });
const theme = createTheme({
  palette: {
    appointment: createColor("#F40B27"),
  },
});

declare module "@mui/material/styles" {
  interface CustomPalette {
    appointment: PaletteColorOptions;
  }
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
}

const Button = ({ ...props }: ButtonProps) => {
  const CustomComponent = props.href ? Link : "span";

  return (
    <ThemeProvider theme={theme}>
      {props.href && (
        <CustomComponent href={props.href!} tabIndex={-1}>
          <BaseButtom {...props} />
        </CustomComponent>
      )}
      {!props.href && <BaseButtom {...props} />}
    </ThemeProvider>
  );
};

export default Button;

const BaseButtom = ({
  className,
  href,
  variant = "contained",
  ...props
}: ButtonProps) => {
  return (
    <MuiButton
      variant={variant}
      color="primary"
      disableRipple
      className={cn(
        "relative w-fit after:hidden hover:after:block after:w-full after:h-full  after:absolute after:left-0 after:top-0",
        props.color === "appointment" &&
          variant === "contained" &&
          "bg-amber-500 text-text hover:bg-appointment/80 active:bg-appointment/70 focus:ring-4 focus:ring-appointment/50",
        className
      )}
      classes={{
        root: cn(
          "font-semibold rounded-md shadow-none normal-case transition-none border font-primary"
        ),
        contained: cn(""),
        containedPrimary: cn(
          "text-text-light border-primary-700 bg-primary-700 hover:bg-primary-700/90 focus:ring-4 focus:ring-primary/50"
        ),
        containedSecondary: cn(
          "bg-secondary-400 text-text hover:bg-secondary-400/70 active:bg-secondary-400/50 focus:ring-4 focus:ring-input focus:ring-secondary-300 active:ring-0"
        ),
        outlinedPrimary: cn(
          "border-primary-600 text-primary-600 active:bg-primary-400/50 focus:ring-4 focus:ring-input focus:ring-primary-300 active:ring-0"
        ),
        outlinedSecondary: cn(
          "border-secondary-500 text-secondary-500 active:bg-secondary-400/50 focus:ring-4 focus:ring-input focus:ring-secondary-300 active:ring-0"
        ),
        sizeSmall: cn("px-3 py-2 text-sm"),
        sizeMedium: cn("px-5 py-3 text-sm"),
        sizeLarge: cn("px-8 py-4 text-lg"),
        disabled: cn("bg-gray-100 text-text-disabled"),
      }}
      {...props}
    />
  );
};
