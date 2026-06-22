"use client";

import ShoppingBagIcon from "@/components/icons/shoppingBagIcon";
import ButtonOverlay from "@/components/header/overlay/button";
import OverlayHeader from "@/components/header/overlay/index";
import Button from "@/components/button";
import MenuIcon from "@/components/icons/menuIcon copy";

export default function ShoppingBagWrapperOverlayHeader() {
  return (
    <ButtonOverlay
      icon={<ShoppingBagIcon quantity={5} />}
      overlayType="shopping-bag"
      OverlayComponent={ShoppingBagOverlayHeader}
      showCloseIcon={false}
    />
  );
}

export function ShoppingBagOverlayHeader() {
  return (
    <OverlayHeader>
      <div className="flex items-center justify-center h-20 gap-2">
        <Button variant="fill">
          <MenuIcon /> test
        </Button>
        <Button variant="stroke">
          <MenuIcon /> test
        </Button>
        <Button variant="text">
          <MenuIcon /> test
        </Button>
        <Button disabled>
          <MenuIcon /> test
        </Button>
      </div>

      <div className="flex items-center justify-center h-20 gap-2 bg-gray-800">
        <Button variant="fill" background="dark">
          <MenuIcon /> test
        </Button>
        <Button variant="stroke" background="dark">
          <MenuIcon /> test
        </Button>
        <Button variant="text" background="dark">
          <MenuIcon /> test
        </Button>
        <Button background="dark" disabled>
          <MenuIcon /> test
        </Button>
      </div>
    </OverlayHeader>
  );
}
