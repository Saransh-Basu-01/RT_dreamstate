import { create } from "zustand";

type AuthUser = {
  id: string;
  name: string;
  role: "buyer" | "agent" | "admin";
};

type AuthState = {
  user: AuthUser | null;
  setUser: (user: AuthUser | null) => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
