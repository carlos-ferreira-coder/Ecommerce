"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ProfileIcon from "@/components/icons/profile";
import FavoriteIcon from "@/components/icons/favorite";
import SearchOverlay from "@/components/header/overlay/search/index";
import CartOverlay from "@/components/header/overlay/cart/index";
import { useAuth } from "@/hooks/use-auth";
import ButtonInteractive from "@/components/button/interactive";

export default function IconsDesktopHeader() {
  const pathname = usePathname();
  const userRes = useAuth();

  return (
    <div className="flex items-center justify-center col-span-2 gap-6">
      <SearchOverlay />
      <Link href="/profile">
        <ButtonInteractive className="text-gray-900">
          <ProfileIcon active={userRes.isSuccess} />
        </ButtonInteractive>
      </Link>
      <Link href="/wishlist">
        <ButtonInteractive className="text-gray-900">
          <FavoriteIcon active={pathname.startsWith("/wishlist")} />
        </ButtonInteractive>
      </Link>
      <CartOverlay />
    </div>
  );
}
