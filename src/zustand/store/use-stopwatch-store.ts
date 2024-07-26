import { create } from 'zustand';

type StopwatchState = {
  time: number;
  isActive: boolean;
  startStop: () => void;
  reset: () => void;
  setTime: (cb: (prev: number) => number) => void;
};

export const useStopwatchStore = create<StopwatchState>((set) => ({
  time: 0,
  isActive: false,
  startStop: () =>
    set((state) => ({
      isActive: !state.isActive,
      time: state.isActive ? state.time : state.time // No change in time if it's already active
    })),
  reset: () => set({ time: 0, isActive: false }),
  setTime: (cb: (prev: number) => number) =>
    set((state) => ({ time: cb(state.time) }))
}));
