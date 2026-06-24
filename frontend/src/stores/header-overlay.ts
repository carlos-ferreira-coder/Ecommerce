import { create } from "zustand";

export type HeaderOverlayType = "menu" | "search" | "cart" | null;

interface useHeaderOverlayStoreProps {
  headerOverlay: HeaderOverlayType;
  toggleHeaderOverlay: (overlay: HeaderOverlayType) => void;
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
