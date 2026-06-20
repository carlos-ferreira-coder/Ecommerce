"use client";

import { useState } from "react";
import CancelIcon from "@/components/icons/cancelIcon";
import SearchIcon from "@/components/icons/searchIcon";
import SearchOverlay from "@/components/header/search/SearchOverlay";

interface SearchButtonProps {
  className?: string;
}

export default function SearchButton({ className }: SearchButtonProps) {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  return (
    <>
      <button
        type="button"
        className={className}
        aria-label={isSearchOpen ? "Fechar pesquisa" : "Abrir pesquisa"}
        onClick={() => setIsSearchOpen((prev) => !prev)}
      >
        {isSearchOpen ? <CancelIcon /> : <SearchIcon />}
      </button>

      {isSearchOpen && <SearchOverlay />}
    </>
  );
}
