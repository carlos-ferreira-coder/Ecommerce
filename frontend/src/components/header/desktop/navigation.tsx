"use client";

import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { navigationHeader } from "@/components/header/navigation";
import { useHeaderOverlayStore } from "@/stores/header-overlay";
import MenuOverlayHeader from "@/components/header/overlay/menu/desktop/index";
import ButtonInteractive from "@/components/button/interactive";

export default function NavigationDesktopHeader() {
  const { headerOverlay, toggleHeaderOverlay } = useHeaderOverlayStore();

  return (
    <nav className="flex items-center justify-center col-span-8">
      <ul className="flex items-center gap-8">
        {navigationHeader.map((item) =>
          !(item.list || item.banners) ? (
            <li key={item.title}>
              <Link href={item.href}>
                <ButtonInteractive className="text-body-lg text-gray-800 hover:text-black active:text-black">
                  {item.title}
                </ButtonInteractive>
              </Link>
            </li>
          ) : (
            <li key={item.title}>
              <ButtonInteractive
                onClick={() => toggleHeaderOverlay(item.title)}
                className="text-body-lg text-gray-800 hover:text-black active:text-black"
              >
                {item.title}
              </ButtonInteractive>

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
