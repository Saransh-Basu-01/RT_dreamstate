import { create } from "zustand";

type UiState = {
  isSidebarOpen: boolean;
  activeModal: string | null;
  theme: "light" | "dark";
  setSidebarOpen: (isSidebarOpen: boolean) => void;
  setActiveModal: (activeModal: string | null) => void;
  setTheme: (theme: "light" | "dark") => void;
};

export const useUiStore = create<UiState>((set) => ({
  isSidebarOpen: false,
  activeModal: null,
  theme: "dark",
  setSidebarOpen: (isSidebarOpen) => set({ isSidebarOpen }),
  setActiveModal: (activeModal) => set({ activeModal }),
  setTheme: (theme) => set({ theme }),
}));
