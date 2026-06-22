import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { ComponentProps } from "react";

const styles = {
  default:
    "flex items-center justify-center h-10 lg:h-12 px-6 gap-1 text-button-sm lg:text-button-lg shadow-md",
  interactive:
    "cursor-pointer transition-all duration-200 active:shadow-sm active:translate-y-0.5 lg:hover:-translate-y-0.5 lg:active:translate-y-0",
  light: {
    fill: "bg-primary-600 hover:bg-primary-700 active:bg-primary-750 text-white",
    stroke:
      "border border-primary-600 hover:border-primary-700 active:border-primary-750 text-primary-600 hover:text-primary-700 active:text-primary-750",
    text: "text-primary-600 hover:text-primary-700 active:text-primary-750",
    disabled: "bg-gray-400 text-gray-500 cursor-not-allowed",
  },
  dark: {
    fill: "bg-white hover:bg-gray-200 active:bg-gray-300 text-black",
    stroke:
      "border border-white hover:border-gray-200 active:border-gray-300 text-white hover:text-gray-200 active:text-gray-300",
    text: "text-white hover:text-gray-200 active:text-gray-300",
    disabled: "bg-gray-700 text-gray-500 cursor-not-allowed",
  },
} as const;

interface ButtonProps extends ComponentProps<"button"> {
  variant?: "fill" | "stroke" | "text";
  background?: "light" | "dark";
}

export default function Button({
  variant = "fill",
  background = "light",
  disabled,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className={twMerge(
        clsx(
          styles["default"],
          !disabled && styles["interactive"],
          disabled ? styles[background].disabled : styles[background][variant],
          className,
        ),
      )}
      {...props}
    >
      {children}
    </button>
  );
}
