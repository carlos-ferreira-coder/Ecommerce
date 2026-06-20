import SearchIcon from "@/components/icons/searchIcon";
import OverlayHeader from "@/components/header/overlayHeader";

export default function SearchOverlay() {
  return (
    <OverlayHeader>
      <div className="flex h-22 lg:h-38 items-center">
        <div className="flex items-center gap-2 w-full h-10 lg:h-14 px-4 border-b border-gray-500">
          <SearchIcon fill="var(--color-gray-500)" />
          {/* TODO desenvolver o pesquisar */}
          <input
            autoFocus
            type="text"
            placeholder="Pesquisar"
            className="w-full outline-none bg-transparent text-gray-500 text-mobile-body-sm lg:text-body-xl"
          />
        </div>
      </div>
    </OverlayHeader>
  );
}
