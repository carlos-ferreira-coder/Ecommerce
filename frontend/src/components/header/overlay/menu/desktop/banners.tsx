import { navigationHeader } from "@/components/header/navigation";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

interface BannersDesktopMenuOverlayHeaderProps {
  colSpanClass: string;
  banners: NonNullable<(typeof navigationHeader)[number]["banners"]>;
}

export default function BannersDesktopMenuOverlayHeader({
  colSpanClass,
  banners,
}: BannersDesktopMenuOverlayHeaderProps) {
  return (
    <div className={clsx("flex items-center justify-end gap-6", colSpanClass)}>
      {banners.items.map((banner) => (
        <Link
          key={banner.title}
          href={banner.href}
          className="group flex flex-col justify-between gap-2"
        >
          <div className="overflow-hidden">
            <Image
              alt={banner.title}
              src={banner.image}
              width={banner.width}
              height={banner.height}
              className="transition-transform duration-300 ease-out group-hover:scale-105 group-active:scale-105"
            />
          </div>

          {banners.showTitle && (
            <div className="text-body-md text-gray-800 group-hover:text-black group-active:text-black">
              {banner.title}
            </div>
          )}
        </Link>
      ))}
    </div>
  );
}
