"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  HeaderOverlayType,
  useHeaderOverlayStore,
} from "@/store/header-overlay";
import CancelIcon from "@/components/icons/cancel";
import { ComponentType } from "react";
import clsx from "clsx";

interface ButtonOverlayHeaderProps {
  Icon: ComponentType<{ className?: string }>;
  overlayType: HeaderOverlayType;
  OverlayComponent: React.ComponentType;
  showCloseIcon?: boolean;
  quantity?: number;
}

export default function ButtonOverlayHeader({
  Icon,
  overlayType,
  OverlayComponent,
  showCloseIcon = true,
  quantity,
}: ButtonOverlayHeaderProps) {
  const { headerOverlay, toggleHeaderOverlay } = useHeaderOverlayStore();
  const isOpen = headerOverlay === overlayType;

  return (
    <>
      <button
        type="button"
        className="cursor-pointer"
        aria-label={isOpen ? "Fechar" : "Abrir"}
        onClick={() => toggleHeaderOverlay(overlayType)}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen && showCloseIcon ? (
            <motion.div
              key="cancel"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              <CancelIcon />
            </motion.div>
          ) : (
            <motion.div
              key="default"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              <div className="relative">
                <Icon
                  className={clsx("hover:bg-gray-200", isOpen && "bg-gray-400")}
                />

                {quantity && quantity > 0 && (
                  <div className="absolute -top-2 -right-2 flex items-center justify-center h-4 w-4 text-caption-sm leading-[180%] tracking-normal">
                    {quantity > 99 ? "99+" : quantity}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && <OverlayComponent />}
      </AnimatePresence>
    </>
  );
}
