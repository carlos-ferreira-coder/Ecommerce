import clsx from "clsx";
import { ComponentProps } from "react";

export default function ButtonInteractive({
  className,
  children,
  ...props
}: ComponentProps<"button">) {
  return (
    <button
      type="button"
      className={clsx(
        "flex items-center justify-center transition-all duration-200 active:translate-y-0.5 lg:hover:-translate-y-0.5 lg:active:translate-y-0 cursor-pointer",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
