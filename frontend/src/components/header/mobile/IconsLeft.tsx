"use client";

import { useState } from "react";
import MenuOverlay from "@/components/header/overlay/menu/index";
import SearchOverlay from "@/components/header/overlay/search/index";

type openOverlayType = "menu" | "search" | null;

export default function IconsLeftMobileHeader() {
  const [openOverlay, setOpenOverlay] = useState<openOverlayType>(null);

  function onToggle(overlay: openOverlayType) {
    setOpenOverlay((prev) => (prev === overlay ? null : overlay));
  }

  return (
    <div className="flex items-center justify-start gap-2">
      <MenuOverlay
        isOpen={openOverlay === "menu"}
        setIsOpen={() => onToggle("menu")}
      />
      <SearchOverlay
        isOpen={openOverlay === "search"}
        setIsOpen={() => onToggle("search")}
      />
    </div>
  );
}
