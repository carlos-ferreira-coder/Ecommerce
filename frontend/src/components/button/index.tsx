import clsx from "clsx";
import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  variant?: "fill" | "stroke" | "text";
}

export default function Button({
  variant = "fill",
  disabled,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "flex items-center justify-center h-10 lg:h-12 px-6 gap-1 text-button-sm lg:text-button-lg cursor-pointer transition-all duration-200 shadow-md active:shadow-sm active:translate-y-0.5 lg:hover:-translate-y-0.5 lg:active:translate-y-0",
        {
          // Fill
          "bg-primary-600 active:bg-primary-750 text-white hover:bg-primary-700":
            variant === "fill",
          // Stroke
          "border border-primary-600 hover:border-primary-700 active:border-primary-750 text-primary-600 hover:text-primary-700 active:text-primary-750":
            variant === "stroke",
          // Text
          "text-primary-600 hover:text-primary-700 active:text-primary-750":
            variant === "text",
          // Disabled
          "bg-gray-400 text-gray-500 cursor-not-allowed": disabled,
        },
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
