import Image from "next/image";
import Link from "next/link";

export default function LogoMobileHeader() {
  return (
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
  );
}
