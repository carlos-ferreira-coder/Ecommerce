"use client";

import { useState } from "react";
import MenuIcon from "@/components/icons/menuIcon";
import ButtonOverlay from "@/components/header/overlay/button";
import OverlayHeader from "@/components/header/overlay/index";
import { navigationHeader } from "@/components/header/navigation";
import HamburgerMenu from "@/components/header/overlay/menu/hamburger";
import AuthMenu from "@/components/header/overlay/menu/auth";

interface MenuWrapperOverlayHeaderProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

export default function MenuWrapperOverlayHeader({
  isOpen,
  setIsOpen,
}: MenuWrapperOverlayHeaderProps) {
  return (
    <ButtonOverlay
      icon={<MenuIcon />}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      OverlayComponent={MenuOverlayHeader}
    />
  );
}

interface MenuOverlayHeaderProps {
  onClose: () => void;
}

export function MenuOverlayHeader({ onClose }: MenuOverlayHeaderProps) {
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
        {navigationHeader.map((navigation) => (
          <HamburgerMenu
            key={navigation.title}
            navigation={navigation}
            isOpen={openMenus.includes(navigation.title)}
            onToggle={() => toggleMenu(navigation.title)}
          />
        ))}
      </div>

      <AuthMenu />
    </OverlayHeader>
  );
}
