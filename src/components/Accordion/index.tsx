import cn from "@/helpers/cn";
import {
  Accordion as MUIAccordion,
  AccordionDetails as MUIAccordionDetails,
  AccordionSummary as MUIAccordionSummary,
  AccordionProps as MuiAccordionProps,
  AccordionDetailsProps,
  AccordionSummaryProps,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { HTMLAttributes, ReactNode, forwardRef } from "react";

interface AccordionProps {
  id: string;
  question: any;
  answer: any;
  accordionProps?: Omit<MuiAccordionProps, "children">;
}

const Accordion = forwardRef(
  (
    { accordionProps, id, question, answer, ...props }: AccordionProps,
    ref: any
  ) => {
    return (
      <MUIAccordion
        ref={ref}
        classes={{
          root: cn(
            "border border-black rounded-none shadow-none outline-none rounded h-fit m-0 after:hidden before:hidden max-h-fit shadow-md"
          ),
          expanded: cn("max-h-fit"),
        }}
        {...props}
        {...accordionProps}
      >
        <AccordionSummary aria-controls={id} id={id}>
          {question}
        </AccordionSummary>
        <AccordionDetails>{answer}</AccordionDetails>
      </MUIAccordion>
    );
  }
);

const AccordionSummary = ({ className, children }: AccordionSummaryProps) => {
  return (
    <MUIAccordionSummary
      classes={{
        root: cn(
          "m-0 p-0 px-4 min-h-fit text-text [&_svg]:text-text [&_svg]:text-3xl [&_svg]:hover:text-primary-700"
        ),
        content: cn("group m-0 py-3 hover:text-primary-700"),
        expanded: cn("text-primary-700 [&_svg]:text-primary-700"),
      }}
      expandIcon={<ExpandMoreIcon />}
      //   {...props}
    >
      <h3 className="h4">{children}</h3>
    </MUIAccordionSummary>
  );
};

const AccordionDetails = ({ className, children }: AccordionDetailsProps) => {
  return (
    <MUIAccordionDetails
      classes={{ root: cn("p-0 px-4 pb-4 text-lg") }}
      // {...props}
    >
      {children}
    </MUIAccordionDetails>
  );
};

Accordion.displayName = "Accordion";

export default Accordion;
