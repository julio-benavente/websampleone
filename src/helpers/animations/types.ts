import { MotionProps, Variant } from "framer-motion";

export type CustomVariants<T extends string> = Record<T, Variant>;

export interface AnimationCreator<VariantsName extends string>
  extends Omit<MotionProps, "initial" | "whileInView" | "variants"> {
  initial?: VariantsName;
  whileInView?: VariantsName;
  variants?: Partial<CustomVariants<VariantsName>>;
}
