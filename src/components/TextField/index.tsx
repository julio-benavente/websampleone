"use client";

import cn from "@/helpers/cn";
import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
  TextFieldVariants,
} from "@mui/material";
import React from "react";
import { useFormContext, RegisterOptions } from "react-hook-form";

interface TextFieldProps
  extends Omit<MuiTextFieldProps<"outlined">, "variant"> {
  name: string;
  registerOptions?: RegisterOptions;
  variant?: TextFieldVariants;
}

const TextField = ({
  variant = "outlined",
  className,
  name,
  registerOptions,
  InputProps,
  ...props
}: TextFieldProps) => {
  return (
    <MuiTextField
      className={className}
      InputProps={{
        classes: {
          root: cn("group bg-white rounded-md"),
          input: cn("h-12 py-2 box-border"),
          notchedOutline: cn(
            "border-2 border-gray-400",
            "group-focus-within:ring-input group-focus-within:border-primary"
          ),
          error: cn(
            "border-red-500 focus:border-red-500 group-focus-within:ring-4 group-focus-within:ring-red-500/50"
          ),
          ...InputProps?.classes,
        },
        ...InputProps,
      }}
      {...props}
    />
  );
};

export default TextField;
