"use client";

import { AnimatePresence, motion } from "framer-motion";
import CancelIcon from "@/components/icons/cancelIcon";

interface ButtonOverlayHeaderProps {
  icon: React.ReactNode;
  isOpen: boolean;
  setIsOpen: () => void;
  OverlayComponent: React.ComponentType<{
    onClose: () => void;
  }>;
}

export default function ButtonOverlayHeader({
  icon,
  isOpen,
  setIsOpen,
  OverlayComponent,
}: ButtonOverlayHeaderProps) {
  return (
    <>
      <button
        type="button"
        className="cursor-pointer"
        aria-label={isOpen ? "Fechar" : "Abrir"}
        onClick={setIsOpen} //() => setIsOpen((prev) => !prev)
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
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
        {
          isOpen && <OverlayComponent onClose={setIsOpen} />
          //() => setIsOpen(false)
        }
      </AnimatePresence>
    </>
  );
}
