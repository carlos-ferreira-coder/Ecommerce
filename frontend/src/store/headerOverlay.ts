import { create } from "zustand";

export type HeaderOverlayType = "menu" | "search" | "shopping-bag" | null;

interface HeaderOverlayStoreProps {
  headerOverlay: HeaderOverlayType;
  toggleHeaderOverlay: (overlay: HeaderOverlayType) => void;
  closeHeaderOverlay: () => void;
}

export const useHeaderOverlayStore = create<HeaderOverlayStoreProps>((set) => ({
  headerOverlay: null,
  toggleHeaderOverlay: (overlay) =>
    set((state) => ({
      headerOverlay: state.headerOverlay === overlay ? null : overlay,
    })),
  closeHeaderOverlay: () =>
    set({
      headerOverlay: null,
    }),
}));
