"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ProfileIcon from "@/components/icons/profileIcon";
import FavoriteIcon from "@/components/icons/favoriteIcon";
import SearchOverlay from "@/components/header/overlay/search/index";
import ShoppingBagOverlay from "@/components/header/overlay/shoppingBag/index";
import clsx from "clsx";

export default function IconsDesktopHeader() {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-center col-span-2 gap-6">
      <SearchOverlay />
      <Link href="/profile">
        <ProfileIcon
          active={false}
          className={clsx(
            "hover:bg-gray-200",
            pathname.startsWith("/profile") && "bg-gray-400",
          )}
        />
      </Link>
      <Link href="/favorite">
        <FavoriteIcon
          active={pathname.startsWith("/favorite")}
          className="hover:bg-gray-200"
        />
      </Link>
      <ShoppingBagOverlay />
    </div>
  );
}
