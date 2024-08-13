import { create } from "zustand";
import { useBirdSlice } from "./useBirdSlice";

interface UseGameLoopSlice {
  update: Function;
  lastUpdate: number;
}

export const useGameLoopSlice = create<UseGameLoopSlice>()((set) => ({
  update: () => {
    const now = performance.now();
    const tick = now - useGameLoopSlice.getState().lastUpdate;
    set((state: any) => {
      if (useBirdSlice.getState().position > 0)
        useBirdSlice.setState({
          position: useBirdSlice.getState().position - tick / 20,
        });
      else useBirdSlice.setState({ position: 0 });

      return { lastUpdate: now };
    });
  },
  lastUpdate: 0,
}));

const gravity = 9.82 as const;
const framesPerSecond = 60;
setInterval(useGameLoopSlice.getState().update, 1000 / framesPerSecond);
