import cn from "@/helpers/cn";
import React, { ReactNode } from "react";

// .carousel-container {
//   overflow: hidden;
//   position: relative;
//   height: 100%;
//   border-color: #4b5563;
//   width: 100%;
// }

// .carousel-track {
//   display: flex;
//   position: absolute;
//   left: 0;
//   justify-content: center;
//   align-items: center;
//   height: 80px;
//   gap: 16px;
//   width: 200%;
//   height: 100%;
// }

interface InfiniteLooperProps {
  variant?: "slide" | "drop";
  direction?: "normal" | "reverse";
  duration?: string;
  children?: ReactNode;
}

const InfiniteLooper = (props: InfiniteLooperProps) => {
  const { variant = "slide", direction = "normal", duration = "8s" } = props;
  return (
    <div
      className={cn(
        "relative grid",
        "overflow-hidden relative",
        variant === "slide" && ["w-full"],
        variant === "drop" && ["w-full h-full"]
      )}
    >
      <div
        className={cn(
          "flex absolute content-center items-center relative",
          variant === "slide" && ["flex-row w-[calc(200%)]"],
          variant === "drop" && ["flex-col h-[calc(200%)]"]
        )}
        style={{
          animationName: variant,
          animationDuration: duration,
          animationDirection: direction,
          animationIterationCount: "infinite",
          animationTimingFunction: "linear",
        }}
      >
        {props.children}
        {props.children}
      </div>
    </div>
  );
};

export default InfiniteLooper;

const Squares = () => {
  const isSlide = true;

  return Array(4)
    .fill(null)
    .map((e, i) => {
      const bgColors: Record<string, string> = {
        "1": "bg-red-300",
        "2": "bg-yellow-300",
        "3": "bg-green-300",
        "4": "bg-purple-300",
        "5": "bg-slate-300",
        "6": "bg-sky-300",
        "7": "bg-orange-300",
        "8": "bg-pink-300",
        "9": "bg-emerald-300",
      };

      const colorSelected = bgColors[i + 1];

      return (
        <div
          key={i}
          className={cn(
            colorSelected,
            "flex-1 aspect-[12/16]"

            // "ml-12 "
          )}
        >
          {i}
        </div>
      );
    });
};
