"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ProfileIcon from "@/components/icons/profile";
import FavoriteIcon from "@/components/icons/favorite";
import SearchOverlay from "@/components/header/overlay/search/index";
import CartOverlay from "@/components/header/overlay/cart/index";
import { useAuth } from "@/hooks/use-auth";
import Button from "@/components/button";

export default function IconsDesktopHeader() {
  const pathname = usePathname();
  const userRes = useAuth();

  return (
    <div className="flex items-center justify-center col-span-2 gap-6">
      <SearchOverlay />
      <Link href="/profile">
        <Button
          isIcon
          variant="text"
          className="text-gray-900 hover:text-gray-900 active:text-gray-900"
        >
          <ProfileIcon active={userRes.isSuccess} />
        </Button>
      </Link>
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
