import { navigationHeader } from "@/components/header/navigation";
import OverlayHeader from "@/components/header/overlay/index";
import MenuList from "@/components/header/overlay/menu/desktop/list";
import MenuBanners from "@/components/header/overlay/menu/desktop/banners";
import Grid from "@/components/ui/grid";

const colSpanClass = {
  1: "col-span-1",
  2: "col-span-2",
  3: "col-span-3",
  4: "col-span-4",
  5: "col-span-5",
  6: "col-span-6",
  7: "col-span-7",
  8: "col-span-8",
  9: "col-span-9",
  10: "col-span-10",
  11: "col-span-11",
  12: "col-span-12",
} as const;

interface MenuOverlayHeaderProps {
  navigation: (typeof navigationHeader)[number];
}

export default function MenuOverlayHeader({
  navigation,
}: MenuOverlayHeaderProps) {
  const listColumns = (navigation.lists?.length ?? 0) * 2;
  const bannerColumns = (navigation.banners?.columns ??
    0) as keyof typeof colSpanClass;
  const emptyColumns = (12 -
    listColumns -
    bannerColumns) as keyof typeof colSpanClass;

  return (
    <OverlayHeader>
      <div className="my-6">
        <Grid>
          {navigation.lists?.map((list) => (
            <MenuList key={list.title} list={list} />
          ))}

          {emptyColumns > 0 && <div className={colSpanClass[emptyColumns]} />}

          {navigation.banners && (
            <MenuBanners
              colSpanClass={colSpanClass[bannerColumns]}
              banners={navigation.banners}
            />
          )}
        </Grid>
      </div>
    </OverlayHeader>
  );
}
