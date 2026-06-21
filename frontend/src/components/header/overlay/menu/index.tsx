"use client";

import { useState } from "react";
import MenuIcon from "@/components/icons/menuIcon";
import ButtonOverlay from "@/components/header/overlay/button";
import OverlayHeader from "@/components/header/overlay/index";
import { navigationHeader } from "@/components/header/navigation";
import Hamburger from "@/components/header/overlay/menu/hamburger";
import AuthMenu from "@/components/header/overlay/menu/auth";

export default function MenuWrapperOverlayHeader() {
  return (
    <ButtonOverlay
      icon={<MenuIcon />}
      overlayType={"menu"}
      OverlayComponent={MenuOverlayHeader}
    />
  );
}

export function MenuOverlayHeader() {
  const [openMenus, setOpenMenus] = useState<string[]>([]);

  const toggleMenu = (menu: string) => {
    setOpenMenus((prev) =>
      prev.includes(menu)
        ? prev.filter((item) => item !== menu)
        : [...prev, menu],
    );
  };

  return (
    <OverlayHeader>
      <nav className="flex flex-col gap-8 my-8">
        {navigationHeader.map((navigation) => (
          <Hamburger
            key={navigation.title}
            navigation={navigation}
            isOpen={openMenus.includes(navigation.title)}
            onToggle={() => toggleMenu(navigation.title)}
          />
        ))}
      </nav>

      <AuthMenu />
    </OverlayHeader>
  );
}
