import Link from "next/link";
import { navigationHeader } from "@/components/header/navigation";

export default function NavigationDesktopHeader() {
  return (
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
  );
}
