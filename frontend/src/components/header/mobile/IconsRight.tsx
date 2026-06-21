"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import FavoriteIcon from "@/components/icons/favoriteIcon";
import ShoppingBagOverlay from "@/components/header/overlay/shoppingBag/index";

export default function IconsLeftMobileHeader() {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-end gap-2">
      <Link href="/favorite">
        <FavoriteIcon active={pathname.startsWith("/favorite")} />
      </Link>
      <ShoppingBagOverlay />
    </div>
  );
}
