"use client";

import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { navigationHeader } from "@/components/header/navigation";
import { useHeaderOverlayStore } from "@/stores/header-overlay";
import MenuOverlayHeader from "@/components/header/overlay/menu/desktop/index";

export default function NavigationDesktopHeader() {
  const { headerOverlay, toggleHeaderOverlay } = useHeaderOverlayStore();

  return (
    <nav className="flex items-center justify-center col-span-8">
      <ul className="flex items-center gap-8">
        {navigationHeader.map((item) =>
          !(item.list || item.banners) ? (
            <li key={item.title}>
              <Link
                href={item.href}
                className="text-body-lg text-gray-800 hover:text-black"
              >
                {item.title}
              </Link>
            </li>
          ) : (
            <li key={item.title}>
              <button
                type="button"
                onClick={() => toggleHeaderOverlay(item.title)}
                className="text-body-lg text-gray-800 hover:text-black"
              >
                {item.title}
              </button>

              <AnimatePresence initial={false}>
                {headerOverlay === item.title && (
                  <MenuOverlayHeader navigation={item} />
                )}
              </AnimatePresence>
            </li>
          ),
        )}
      </ul>
    </nav>
  );
}
