import Announcement from "@/components/header/announcement";
import Mobile from "@/components/header/mobile/index";
import Desktop from "@/components/header/desktop/index";

export default function Header() {
  return (
    <header>
      <Announcement />
      <Mobile />
      <Desktop />
    </header>
  );
}
