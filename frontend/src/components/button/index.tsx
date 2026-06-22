import clsx from "clsx";
import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  variant?: "fill" | "stroke" | "text";
  selected?: boolean;
}

export default function Button({
  variant = "fill",
  selected = false,
  disabled = false,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "flex items-center justify-center h-10 lg:h-12 px-6 gap-1 text-button-sm lg:text-button-lg transition-colors duration-200",
        {
          // Fill
          "bg-primary-600 text-white hover:bg-primary-700":
            variant === "fill" && !selected,

          "bg-primary-750 text-white": variant === "fill" && selected,

          // Stroke
          "border border-primary-600 hover:border-primary-700 text-primary-600 hover:text-primary-700":
            variant === "stroke" && !selected,

          "border border-primary-750 text-primary-750":
            variant === "stroke" && selected,

          // Text
          "text-primary-600 hover:text-primary-700":
            variant === "text" && !selected,

          "text-primary-750": variant === "text" && selected,

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
