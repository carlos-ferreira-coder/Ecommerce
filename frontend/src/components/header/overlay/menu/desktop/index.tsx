import { navigationHeader } from "@/components/header/navigation";
import OverlayHeader from "@/components/header/overlay/index";

interface MenuOverlayHeaderProps {
  navigation: (typeof navigationHeader)[number];
}

export default function MenuOverlayHeader({
  navigation,
}: MenuOverlayHeaderProps) {
  return (
    <OverlayHeader>
      <h1>title: {navigation.title}</h1>
      <ul>
        {navigation.list?.map((list) => (
          <>
            <li>list title: {list.title}</li>
            {list.items.map((item) => (
              <>
                item label: {item.label} <br />
              </>
            ))}
          </>
        ))}
      </ul>
    </OverlayHeader>
  );
}
