"use client";

import { useState } from "react";
import MenuIcon from "@/components/icons/menuIcon";
import CancelIcon from "@/components/icons/cancelIcon";
import MenuOverlay from "@/components/header/menu/MenuOverlay";
import { AnimatePresence, motion } from "framer-motion";

interface MenuButtonProps {
  className?: string;
}

export default function MenuButton({ className }: MenuButtonProps) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <>
      <button
        type="button"
        className={className}
        aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isMenuOpen ? (
            <motion.div
              key="cancel"
              initial={{
                scale: 0,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0,
                opacity: 0,
              }}
              transition={{
                duration: 0.1,
              }}
            >
              <CancelIcon />
            </motion.div>
          ) : (
            <motion.div
              key="search"
              initial={{
                scale: 0,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0,
                opacity: 0,
              }}
              transition={{
                duration: 0.1,
              }}
            >
              <MenuIcon />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      <AnimatePresence initial={false}>
        {isMenuOpen && <MenuOverlay onClose={() => setIsMenuOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
