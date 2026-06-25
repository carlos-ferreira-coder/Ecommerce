"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import FavoriteIcon from "@/components/icons/favorite";
import CartOverlay from "@/components/header/overlay/cart/index";
import ButtonInteractive from "@/components/button/interactive";

export default function IconsLeftMobileHeader() {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-end gap-2">
      <Link href="/wishlist">
        <ButtonInteractive className="text-gray-900">
          <FavoriteIcon active={pathname.startsWith("/wishlist")} />
        </ButtonInteractive>
      </Link>
      <CartOverlay />
    </div>
  );
}
