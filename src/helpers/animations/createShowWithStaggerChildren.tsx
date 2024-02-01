import { MotionProps, VariantLabels } from "framer-motion";
import { AnimationCreator, CustomVariants } from "./types";
import updateNestedObject, { DeepPartial } from "../updateNestedObject";

type CreateShowWithStaggerChildrenVariantsName = "visible" | "hidden";

const showWhileInViewAnimationVariants: CustomVariants<CreateShowWithStaggerChildrenVariantsName> =
  {
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
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
  props?: AnimationCreator<CreateShowWithStaggerChildrenVariantsName>
) => {
  const {
    initial = "hidden",
    whileInView = "visible",
    variants = {},
    viewport = {},
  } = props || {};

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
