import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { ComponentProps } from "react";

const styles = {
  base: "flex items-center justify-center text-button-sm lg:text-button-lg transition-all duration-200",
  size: "h-10 lg:h-12 px-6 gap-1",
  interactive:
    "cursor-pointer active:translate-y-0.5 lg:hover:-translate-y-0.5 lg:active:translate-y-0",
  light: {
    fill: "bg-primary-600 hover:bg-primary-700 active:bg-primary-750 text-white shadow-md active:shadow-sm",
    stroke:
      "border border-primary-600 hover:border-primary-700 active:border-primary-750 text-primary-600 hover:text-primary-700 active:text-primary-750 shadow-md active:shadow-sm",
    text: "text-primary-600 hover:text-primary-700 active:text-primary-750",
    disabled: "bg-gray-400 text-gray-500 cursor-not-allowed",
  },
  dark: {
    fill: "bg-white hover:bg-gray-200 active:bg-gray-300 text-black shadow-md active:shadow-sm",
    stroke:
      "border border-white hover:border-gray-200 active:border-gray-300 text-white hover:text-gray-200 active:text-gray-300 shadow-md active:shadow-sm",
    text: "text-white hover:text-gray-200 active:text-gray-300",
    disabled: "bg-gray-700 text-gray-500 cursor-not-allowed",
  },
} as const;

interface ButtonProps extends ComponentProps<"button"> {
  isIcon?: boolean;
  variant?: "fill" | "stroke" | "text";
  background?: "light" | "dark";
}

export default function Button({
  isIcon = false,
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
          styles["base"],
          !isIcon && styles["size"],
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
