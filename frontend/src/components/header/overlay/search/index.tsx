"use client";

import clsx from "clsx";
import { useState } from "react";
import { motion } from "framer-motion";
import SearchIcon from "@/components/icons/searchIcon";
import CancelIcon from "@/components/icons/cancelIcon";
import ButtonOverlay from "@/components/header/overlay/button";
import OverlayHeader from "@/components/header/overlay/index";

export default function SearchWrapperOverlayHeader() {
  return (
    <ButtonOverlay
      Icon={SearchIcon}
      overlayType={"search"}
      OverlayComponent={SearchOverlayHeader}
    />
  );
}

export function SearchOverlayHeader() {
  const [search, setSearch] = useState<string>("");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <OverlayHeader>
      <div className="flex h-22 lg:h-38 items-center">
        <div
          className={clsx(
            "group flex items-center gap-2 w-full h-10 lg:h-14 px-4 border-b",
            isFocused
              ? "border-primary-500 text-primary-500"
              : "border-gray-500 text-gray-500",
          )}
        >
          <SearchIcon />

          <input
            autoFocus
            type="text"
            name="search"
            placeholder="Pesquisar"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="flex-1 outline-none bg-transparent text-mobile-body-sm lg:text-body-xl"
          />

          <motion.button
            type="button"
            className="cursor-pointer"
            onClick={() => setSearch("")}
            initial={false}
            animate={{
              opacity: search ? 1 : 0,
              pointerEvents: search ? "auto" : "none",
            }}
            transition={{ duration: 0.2 }}
          >
            <CancelIcon />
          </motion.button>
        </div>
      </div>
    </OverlayHeader>
  );
}
