"use client";

import Link from "next/link";
import { useState } from "react";
import ProfileIcon from "@/components/icons/profileIcon";
import FavoriteIcon from "@/components/icons/favoriteIcon";
import ShoppingBagIcon from "@/components/icons/shoppingBagIcon";
import SearchOverlay from "@/components/header/overlay/search/index";

type openOverlayType = "search" | null;

export default function IconsDesktopHeader() {
  const [openOverlay, setOpenOverlay] = useState<openOverlayType>(null);

  function onToggle(overlay: openOverlayType) {
    setOpenOverlay((prev) => (prev === overlay ? null : overlay));
  }

  return (
    <div className="flex items-center justify-center col-span-2 gap-6">
      <SearchOverlay
        isOpen={openOverlay === "search"}
        setIsOpen={() => onToggle("search")}
      />
      <Link href="/profile">
        <ProfileIcon />
      </Link>
      <Link href="/favorites">
        <FavoriteIcon />
      </Link>
      <Link href="/cart">
        <ShoppingBagIcon />
      </Link>
    </div>
  );
}
