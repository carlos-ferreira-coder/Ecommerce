"use client";

import { useState } from "react";
import MenuIcon from "@/components/icons/menuIcon";
import ButtonOverlay from "@/components/header/overlay/button";
import OverlayHeader from "@/components/header/overlay/index";
import { navigationHeader } from "@/components/header/navigation";
import MenuAccordion from "@/components/header/overlay/menu/menuAccordion";
import AuthButtons from "@/components/header/overlay/menu/authButtons";

export default function MenuWrapperOverlayHeader() {
  return (
    <ButtonOverlay icon={<MenuIcon />} OverlayComponent={MenuOverlayHeader} />
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
          <MenuAccordion
            key={navigation.title}
            navigation={navigation}
            isOpen={openMenus.includes(navigation.title)}
            onToggle={() => toggleMenu(navigation.title)}
          />
        ))}
      </div>

      <AuthButtons />
    </OverlayHeader>
  );
}
