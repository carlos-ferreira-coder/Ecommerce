"use client";

import ShoppingBagIcon from "@/components/icons/shoppingBagIcon";
import ButtonOverlay from "@/components/header/overlay/button";
import OverlayHeader from "@/components/header/overlay/index";
import Button from "@/components/button";

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
  return (
    <OverlayHeader>
      <div className="flex items-center justify-center h-20 gap-2">
        <Button variant="fill">test</Button>
        <Button variant="stroke">test</Button>
        <Button variant="text">test</Button>
      </div>

      <div className="flex items-center justify-center h-20 gap-2">
        <Button variant="fill" disabled>
          test
        </Button>
        <Button variant="stroke" disabled>
          test
        </Button>
        <Button variant="text" disabled>
          test
        </Button>
      </div>
    </OverlayHeader>
  );
}
