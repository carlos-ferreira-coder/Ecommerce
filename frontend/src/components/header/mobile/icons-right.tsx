"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import FavoriteIcon from "@/components/icons/favorite";
import CartOverlay from "@/components/header/overlay/cart/index";
import Button from "@/components/button";

export default function IconsLeftMobileHeader() {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-end gap-2">
      <Link href="/wishlist">
        <Button
          isIcon
          variant="text"
          className="text-gray-900 hover:text-gray-900 active:text-gray-900"
        >
          <FavoriteIcon active={pathname.startsWith("/wishlist")} />
        </Button>
      </Link>
      <CartOverlay />
    </div>
  );
}
