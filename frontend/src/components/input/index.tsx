"use client";

import { useRef, ComponentProps, ComponentType } from "react";
import CancelIcon from "@/components/icons/cancelIcon";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import AlertIcon from "../icons/alertIcon";

const styles = {
  base: "relative flex items-center justify-center h-10 gap-1 px-4 text-body-xs border",
  disabled:
    "text-gray-400 border-gray-400 cursor-not-allowed [&_*]:cursor-not-allowed",
  error: "text-error border-error",
  success: "text-success border-success",
  background: {
    light:
      "text-gray-700 border-gray-700 hover:text-gray-800 hover:border-gray-800 focus:text-primary-400 focus:border-primary-400 focus-within:text-primary-400 focus-within:border-primary-400 active:text-gray-900 active:text-gray-900",
    dark: "text-primary-50 border-primary-50 hover:text-primary-200 hover:border-primary-200 focus:text-primary-400 focus:border-primary-400 focus-within:text-primary-400 focus-within:border-primary-400 active:text-primary-300 active:text-primary-300",
  },
} as const;

interface InputProps extends ComponentProps<"input"> {
  Icon: ComponentType<{ className?: string }>;
  label: string;
  error?: string;
  success?: string;
  background?: "light" | "dark";
}

export default function Input({
  Icon,
  label,
  error,
  success,
  disabled,
  background = "light",
  className,
  ...props
}: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClear() {
    if (!inputRef.current) return;

    inputRef.current.value = "";
    inputRef.current.dispatchEvent(new Event("input", { bubbles: true }));

    inputRef.current.focus();
  }

  const variant = disabled
    ? styles.disabled
    : error
      ? styles.error
      : success
        ? styles.success
        : styles.background[background];

  return (
    <div className={twMerge(clsx(styles["base"], variant, className))}>
      <Icon className="h-4 w-4" />

      <input
        ref={inputRef}
        disabled={disabled}
        placeholder=" "
        className="peer flex-1 border-none outline-none"
        {...props}
      />

      <label
        className={clsx(
          "absolute left-12 top-1/2 -translate-y-1/2 transition-all duration-200 peer-focus:top-0 peer-focus:left-4 peer-focus:px-1 peer-focus:text-caption-sm peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:left-4 peer-not-placeholder-shown:px-1 peer-not-placeholder-shown:text-caption-sm",
          background === "light"
            ? "peer-focus:bg-white peer-not-placeholder-shown:bg-white"
            : "peer-focus:bg-gray-800 peer-not-placeholder-shown:bg-gray-800",
        )}
      >
        {label}
      </label>

      <button
        type="button"
        className="
          opacity-0 pointer-events-none transition-all duration-200
          
          peer-not-placeholder-shown:opacity-100
          peer-not-placeholder-shown:cursor-pointer
          peer-not-placeholder-shown:pointer-events-auto
        "
        onClick={handleClear}
        disabled={disabled}
      >
        {error ? (
          <AlertIcon className="h-4 w-4" />
        ) : (
          <CancelIcon className="h-4 w-4" />
        )}
      </button>

      {error && (
        <div className="absolute top-10 left-0 text-caption-md">{error}</div>
      )}
    </div>
  );
}
