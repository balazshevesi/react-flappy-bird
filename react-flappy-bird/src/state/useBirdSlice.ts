import { create } from "zustand";

interface UseBirdSlice {
  fly: Function;
  position: number;
  isCollided: boolean;
}

export const useBirdSlice = create<UseBirdSlice>()((set) => ({
  isCollided: false,
  position: 10,
  fly: () =>
    set((state: any) => {
      return { position: state.position + 100 };
    }),
}));
