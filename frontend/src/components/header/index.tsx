import Announcement from "@/components/header/announcement";
import Mobile from "@/components/header/mobile";
import Desktop from "@/components/header/desktop";

export default function Header() {
  return (
    <header>
      <Announcement />
      <Mobile />
      <Desktop />
    </header>
  );
}
