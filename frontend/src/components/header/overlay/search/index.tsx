"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SearchIcon from "@/components/icons/searchIcon";
import CancelIcon from "@/components/icons/cancelIcon";
import ButtonOverlay from "@/components/header/overlay/button";
import OverlayHeader from "@/components/header/overlay/index";

export default function SearchWrapperOverlayHeader() {
  return (
    <ButtonOverlay
      icon={<SearchIcon />}
      overlayType={"search"}
      OverlayComponent={SearchOverlayHeader}
    />
  );
}

export function SearchOverlayHeader() {
  const [search, setSearch] = useState<string>("");

  return (
    <OverlayHeader>
      <div className="flex h-22 lg:h-38 items-center">
        <div className="flex items-center gap-2 w-full h-10 lg:h-14 px-4 border-b border-gray-500 focus-within:border-primary-500">
          <SearchIcon fill="var(--color-gray-500)" />

          <input
            autoFocus
            type="text"
            name="search"
            placeholder="Pesquisar"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="flex-1 outline-none bg-transparent text-gray-500 text-mobile-body-sm lg:text-body-xl"
          />

          <motion.button
            type="button"
            aria-label="Limpar"
            onClick={() => setSearch("")}
            initial={false}
            animate={{
              opacity: search ? 1 : 0,
              pointerEvents: search ? "auto" : "none",
            }}
            transition={{ duration: 0.2 }}
          >
            <CancelIcon fill="var(--color-gray-500)" />
          </motion.button>
        </div>
      </div>
    </OverlayHeader>
  );
}
