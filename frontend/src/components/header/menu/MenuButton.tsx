"use client";

import { useState } from "react";
import MenuIcon from "@/components/icons/menuIcon";
import CancelIcon from "@/components/icons/cancelIcon";
import MenuOverlay from "@/components/header/menu/MenuOverlay";

interface MenuButtonProps {
  className?: string;
}

export default function MenuButton({ className }: MenuButtonProps) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <>
      <button
        type="button"
        className={className}
        aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        {isMenuOpen ? <CancelIcon /> : <MenuIcon />}
      </button>

      {isMenuOpen && <MenuOverlay onClose={() => setIsMenuOpen(false)} />}
    </>
  );
}
