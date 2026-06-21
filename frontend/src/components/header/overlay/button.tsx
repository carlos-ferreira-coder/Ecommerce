"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  HeaderOverlayType,
  useHeaderOverlayStore,
} from "@/store/headerOverlay";
import CancelIcon from "@/components/icons/cancelIcon";

interface ButtonOverlayHeaderProps {
  icon: React.ReactNode;
  overlayType: HeaderOverlayType;
  OverlayComponent: React.ComponentType;
  showCloseIcon?: boolean;
}

export default function ButtonOverlayHeader({
  icon,
  overlayType,
  OverlayComponent,
  showCloseIcon = true,
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
              {icon}
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
