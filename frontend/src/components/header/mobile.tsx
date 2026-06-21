import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/container";
import Grid from "@/components/ui/grid";
import FavoriteIcon from "@/components/icons/favoriteIcon";
import ShoppingBagIcon from "@/components/icons/shoppingBagIcon";
import MenuOverlay from "@/components/header/overlay/menu/index";
import SearchOverlay from "@/components/header/overlay/search/index";

export default function MobileHeader() {
  return (
    <div className="flex lg:hidden items-center justify-center h-12">
      <Container>
        <Grid>
          <div className="flex items-center justify-start gap-2">
            <MenuOverlay />
            <SearchOverlay />
          </div>

          <div className="flex items-center justify-center col-span-2">
            <Link href="/">
              <Image
                src="/images/logo-mobile.png"
                alt="Logo"
                width={138}
                height={40}
                priority
              />
            </Link>
          </div>

          <div className="flex items-center justify-end gap-2">
            <Link href="/favorites">
              <FavoriteIcon />
            </Link>
            <Link href="/cart">
              <ShoppingBagIcon />
            </Link>
          </div>
        </Grid>
      </Container>
    </div>
  );
}
