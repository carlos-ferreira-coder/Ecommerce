import Image from "next/image";
import Link from "next/link";

export default function LogoDesktopHeader() {
  return (
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
  );
}
