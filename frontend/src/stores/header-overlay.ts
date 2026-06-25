import { navigationHeader } from "@/components/header/navigation";
import { create } from "zustand";

export type HeaderOverlayType = "menu" | "search" | "cart" | null;
type NavigationOverlayType = (typeof navigationHeader)[number]["title"];

interface useHeaderOverlayStoreProps {
  headerOverlay: HeaderOverlayType | NavigationOverlayType;
  toggleHeaderOverlay: (
    overlay: HeaderOverlayType | NavigationOverlayType,
  ) => void;
  closeHeaderOverlay: () => void;
}

export const useHeaderOverlayStore = create<useHeaderOverlayStoreProps>(
  (set) => ({
    headerOverlay: null,
    toggleHeaderOverlay: (overlay) =>
      set((state) => ({
        headerOverlay: state.headerOverlay === overlay ? null : overlay,
      })),
    closeHeaderOverlay: () =>
      set({
        headerOverlay: null,
      }),
  }),
);
