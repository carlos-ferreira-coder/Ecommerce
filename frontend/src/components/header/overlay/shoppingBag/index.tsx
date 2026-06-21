"use client";

import ShoppingBagIcon from "@/components/icons/shoppingBagIcon";
import ButtonOverlay from "@/components/header/overlay/button";
import OverlayHeader from "@/components/header/overlay/index";

export default function ShoppingBagWrapperOverlayHeader() {
  return (
    <ButtonOverlay
      icon={<ShoppingBagIcon quantity={10} />}
      overlayType="shopping-bag"
      OverlayComponent={ShoppingBagOverlayHeader}
      showCloseIcon={false}
    />
  );
}

export function ShoppingBagOverlayHeader() {
  return <OverlayHeader>abacaxi</OverlayHeader>;
}
