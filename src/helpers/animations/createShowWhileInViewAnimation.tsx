import { MotionProps } from "framer-motion";
import { AnimationCreator, CustomVariants } from "./types";
import updateNestedObject, { DeepPartial } from "@/helpers/updateNestedObject";

type ShowWhileInViewAnimationVariantsName = "visible" | "hidden";

const showWhileInViewAnimationVariants: CustomVariants<ShowWhileInViewAnimationVariantsName> =
  {
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    hidden: {
      opacity: 0,
    },
  };

const viewportDefaultProps: Pick<MotionProps, "viewport">["viewport"] = {
  once: true,
  margin: "-100px",
};

const createShowWhileInViewAnimation = (
  props?: AnimationCreator<ShowWhileInViewAnimationVariantsName>
) => {
  const {
    initial = "hidden",
    whileInView = "visible",
    variants = {},
    viewport = {},
  } = props || {};

  console.log(
    updateNestedObject(
      viewportDefaultProps,
      viewport as DeepPartial<typeof viewportDefaultProps>
    )
  );

  return {
    initial,
    whileInView,
    variants: updateNestedObject(showWhileInViewAnimationVariants, variants),
    viewport: updateNestedObject(
      viewportDefaultProps,
      viewport as DeepPartial<typeof viewportDefaultProps>
    ),
  };
};

export default createShowWhileInViewAnimation;
