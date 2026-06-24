"use client";

import { ChangeEvent } from "react";
import { useQueryState, parseAsString, debounce } from "nuqs";
import SearchIcon from "@/components/icons/search";
import CancelIcon from "@/components/icons/cancel";
import ButtonOverlay from "@/components/header/overlay/button";
import OverlayHeader from "@/components/header/overlay/index";
import Button from "@/components/button";

export default function SearchWrapperOverlayHeader() {
  return (
    <ButtonOverlay
      Icon={SearchIcon}
      overlayType={"search"}
      OverlayComponent={SearchOverlayHeader}
    />
  );
}

export function SearchOverlayHeader() {
  const [search, setSearch] = useQueryState("q", parseAsString.withDefault(""));

  function handleSearchUpdate(
    event: ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) {
    setSearch(event.target.value, {
      limitUrlUpdates: event.target.value === "" ? undefined : debounce(500),
    });
  }

  return (
    <OverlayHeader>
      <div className="flex h-22 lg:h-38 items-center">
        <div className="group flex items-center gap-2 w-full h-10 lg:h-14 px-4 border-b border-gray-500 text-gray-500 focus-within:border-primary-500 focus-within:text-primary-500">
          <SearchIcon />

          <input
            autoFocus
            type="text"
            name="search"
            placeholder="Pesquisar"
            value={search}
            onChange={handleSearchUpdate}
            className="flex-1 outline-none bg-transparent text-mobile-body-sm lg:text-body-xl"
          />

          <Button
            variant="text"
            onClick={() => setSearch(null)}
            className={search ? "opacity-100" : "opacity-0 pointer-events-none"}
          >
            <CancelIcon />
          </Button>
        </div>
      </div>
    </OverlayHeader>
  );
}
