import { navigationHeader } from "@/components/header/navigation";
import Link from "next/link";

interface ListDesktopMenuOverlayHeaderProps {
  list: NonNullable<(typeof navigationHeader)[number]["lists"]>[number];
}

export default function ListsDesktopMenuOverlayHeader({
  list,
}: ListDesktopMenuOverlayHeaderProps) {
  return (
    <div className="col-span-2 flex flex-col gap-6 text-body-lg">
      <div className="text-black">{list.title}</div>

      <ul className="flex flex-col gap-2">
        {list.items.map((item) => (
          <li key={item.label}>
            <Link href={item.href} className="text-gray-800 hover:text-black">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
