"use client";

import { useState } from "react";
import CancelIcon from "@/components/icons/cancelIcon";
import SearchIcon from "@/components/icons/searchIcon";
import SearchOverlay from "@/components/header/search/SearchOverlay";
import { AnimatePresence, motion } from "framer-motion";

interface SearchButtonProps {
  className?: string;
}

export default function SearchButton({ className }: SearchButtonProps) {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  return (
    <>
      <button
        type="button"
        className={className}
        aria-label={isSearchOpen ? "Fechar pesquisa" : "Abrir pesquisa"}
        onClick={() => setIsSearchOpen((prev) => !prev)}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isSearchOpen ? (
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
              <SearchIcon />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      <AnimatePresence initial={false}>
        {isSearchOpen && (
          <SearchOverlay onClose={() => setIsSearchOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}
