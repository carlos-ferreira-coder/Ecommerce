"use client";

import Link from "next/link";
import { useState } from "react";
import ArrowDownIcon from "@/components/icons/arrowDownIcon";
import ProfileIcon from "@/components/icons/profileIcon";
import OverlayHeader from "@/components/header/overlayHeader";
import { navigationHeader } from "@/components/header/navigationHeader";
import { AnimatePresence, motion } from "framer-motion";

interface MenuOverlayProps {
  onClose: () => void;
}

export default function MenuOverlay({ onClose }: MenuOverlayProps) {
  const [openMenus, setOpenMenus] = useState<string[]>([]);

  const toggleMenu = (menu: string) => {
    setOpenMenus((prev) =>
      prev.includes(menu)
        ? prev.filter((item) => item !== menu)
        : [...prev, menu],
    );
  };

  return (
    <OverlayHeader onClose={onClose}>
      <div className="flex flex-col gap-8 my-8">
        {navigationHeader.map((navigation) => {
          const isOpen = openMenus.includes(navigation.title);

          return (
            <div key={navigation.title} className="border-b border-black">
              <button
                type="button"
                onClick={() => toggleMenu(navigation.title)}
                className="flex items-center justify-between w-full"
              >
                <div className="text-mobile-body-lg text-black">
                  {navigation.title}
                </div>

                <motion.div
                  animate={{
                    rotate: isOpen ? 180 : 0,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <ArrowDownIcon />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                    }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-col gap-6 my-6">
                      {navigation.columns[0].items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-center h-8 pl-8 text-mobile-body-lg text-gray-800"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <div className="flex justify-between gap-4 py-4 border-t border-gray-400">
        <Link
          href="/login"
          className="flex items-center justify-center gap-1 h-10 w-full text-button-sm text-primary-600 border border-primary-600"
        >
          <ProfileIcon fill="var(--color-gray-900)" />
          Login
        </Link>

        <Link
          href="/register"
          className="flex items-center justify-center gap-1 h-10 w-full text-button-sm text-primary-600 border border-primary-600"
        >
          Criar conta
        </Link>
      </div>
    </OverlayHeader>
  );
}
