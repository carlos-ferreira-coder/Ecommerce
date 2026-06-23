"use client";

import ShoppingBagIcon from "@/components/icons/shoppingBagIcon";
import ButtonOverlay from "@/components/header/overlay/button";
import OverlayHeader from "@/components/header/overlay/index";
import Input from "@/components/input/index";
import ProfileIcon from "@/components/icons/profileIcon";

export default function ShoppingBagWrapperOverlayHeader() {
  return (
    <ButtonOverlay
      Icon={ShoppingBagIcon}
      overlayType="shopping-bag"
      OverlayComponent={ShoppingBagOverlayHeader}
      showCloseIcon={false}
      quantity={10}
    />
  );
}

export function ShoppingBagOverlayHeader() {
  return (
    <OverlayHeader>
      <div className="flex flex-col items-center justify-center h-75 gap-5">
        <Input Icon={ProfileIcon} label="Label" />
        <Input Icon={ProfileIcon} label="Label" disabled />
        <Input Icon={ProfileIcon} label="Label" error="Invalid Username" />
        <Input Icon={ProfileIcon} label="Label" success="Valid Username" />
      </div>

      <div className="flex flex-col items-center justify-center h-75 gap-5 bg-gray-800">
        <Input Icon={ProfileIcon} label="Label" background="dark" />
        <Input Icon={ProfileIcon} label="Label" background="dark" disabled />
        <Input
          Icon={ProfileIcon}
          label="Label"
          background="dark"
          error="Invalid Username"
        />

        <Input
          Icon={ProfileIcon}
          label="Label"
          background="dark"
          success="Valid Username"
        />
      </div>
    </OverlayHeader>
  );
}
