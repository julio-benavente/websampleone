"use client";

import cn from "@/helpers/cn";
import { TextField as MuiTextField } from "@mui/material";
import { BaseTextFieldProps } from "@mui/material/TextField";
import React from "react";
import {
  useFormContext,
  RegisterOptions,
  UseFormStateProps,
} from "react-hook-form";

interface TextFieldProps extends BaseTextFieldProps {}

const TextField = ({ classes, name, ...props }: TextFieldProps) => {
  return (
    <MuiTextField
      InputProps={{
        classes: {
          root: cn("group bg-white p-0"),
          input: cn("py-2 px-4 box-border h-auto"),
          // focused: cn("border-emerald-300/80"),
          notchedOutline: cn(
            "border-2 border-primary-400",
            "group-focus-within:ring-input group-focus-within:border-primary"
          ),
          error: cn(
            "border-red-500 focus:border-red-500 group-focus-within:ring-4 group-focus-within:ring-red-500/50"
          ),
          ...classes,
        },
      }}
      multiline
      rows={4}
      {...props}
    />
  );
};

export default TextField;
