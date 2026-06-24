"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  HeaderOverlayType,
  useHeaderOverlayStore,
} from "@/stores/header-overlay";
import CancelIcon from "@/components/icons/cancel";
import { ComponentType } from "react";
import Button from "@/components/button";

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
      <Button
        isIcon
        variant="text"
        className="text-gray-900 hover:text-gray-900 active:text-gray-900"
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
                <Icon />

                {quantity && quantity > 0 && (
                  <div className="absolute -top-2 -right-2 flex items-center justify-center h-4 w-4 text-caption-sm leading-[180%] tracking-normal">
                    {quantity > 99 ? "99+" : quantity}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Button>

      <AnimatePresence initial={false}>
        {isOpen && <OverlayComponent />}
      </AnimatePresence>
    </>
  );
}
