"use client";

import Link from "next/link";
import FavoriteIcon from "@/components/icons/favoriteIcon";
import ShoppingBagIcon from "@/components/icons/shoppingBagIcon";

export default function IconsLeftMobileHeader() {
  return (
    <div className="flex items-center justify-end gap-2">
      <Link href="/favorites">
        <FavoriteIcon />
      </Link>
      <Link href="/cart">
        <ShoppingBagIcon />
      </Link>
    </div>
  );
}
