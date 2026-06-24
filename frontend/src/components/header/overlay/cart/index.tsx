"use client";

import ShoppingBagIcon from "@/components/icons/shopping-bag";
import ButtonOverlay from "@/components/header/overlay/button";
import OverlayHeader from "@/components/header/overlay/index";
import Input from "@/components/input/index";
import ProfileIcon from "@/components/icons/profile";
import { useCart } from "@/hooks/use-cart";

export default function CartWrapperOverlayHeader() {
  const { data: cart } = useCart();

  if (!cart) {
    return (
      <ButtonOverlay
        Icon={ShoppingBagIcon}
        overlayType="cart"
        OverlayComponent={CartOverlayHeader}
        showCloseIcon={false}
      />
    );
  }

  return (
    <ButtonOverlay
      Icon={ShoppingBagIcon}
      overlayType="cart"
      OverlayComponent={CartOverlayHeader}
      showCloseIcon={false}
      quantity={cart.summary.quantity}
    />
  );
}

export function CartOverlayHeader() {
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
