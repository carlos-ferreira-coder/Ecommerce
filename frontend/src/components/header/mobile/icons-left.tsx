import MenuOverlay from "@/components/header/overlay/menu/index";
import SearchOverlay from "@/components/header/overlay/search/index";

export default function IconsLeftMobileHeader() {
  return (
    <div className="flex items-center justify-start gap-2">
      <MenuOverlay />
      <SearchOverlay />
    </div>
  );
}
