import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/container";
import Grid from "@/components/ui/grid";
import ProfileIcon from "@/components/icons/profileIcon";
import FavoriteIcon from "@/components/icons/favoriteIcon";
import ShoppingBagIcon from "@/components/icons/shoppingBagIcon";
import { navigationHeader } from "@/components/header/navigationHeader";
import MenuButton from "@/components/header/menu/MenuButton";
import SearchButton from "@/components/header/search/SearchButton";

export function HeaderMobile() {
  return (
    <div className="flex lg:hidden items-center justify-center h-12">
      <Container>
        <Grid>
          <div className="flex items-center justify-start gap-2">
            <MenuButton />
            <SearchButton />
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

export function HeaderDesktop() {
  return (
    <div className="hidden lg:flex items-center justify-center h-20">
      <Container>
        <Grid>
          <div className="flex items-center justify-center col-span-2">
            <Link href="/">
              <Image
                src="/images/logo-desktop.png"
                alt="Logo"
                width={184}
                height={46}
                priority
              />
            </Link>
          </div>

          {/* TODO ver largura de cada item */}
          <nav className="flex items-center justify-center col-span-8">
            <ul className="flex items-center gap-8">
              {navigationHeader.map((item) => (
                <li key={item.title}>
                  <Link href={item.href} className="text-body-lg text-gray-800">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center justify-center col-span-2 gap-6">
            <SearchButton />
            <Link href="/profile">
              <ProfileIcon />
            </Link>
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
