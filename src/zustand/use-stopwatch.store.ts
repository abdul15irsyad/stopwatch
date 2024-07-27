import { create } from 'zustand';

type StopwatchState = {
  time: number;
  isActive: boolean;
  laps: { time: number }[];
  startStop: () => void;
  reset: () => void;
  setTime: (cb: (prev: number) => number) => void;
  addLap: (time: number) => void;
};

export const useStopwatchStore = create<StopwatchState>((set) => {
  const defaultTime = 0;
  return {
    time: defaultTime,
    laps: [],
    isActive: false,
    startStop: () =>
      set((state) => ({
        isActive: !state.isActive,
        time: state.isActive ? state.time : state.time // No change in time if it's already active
      })),
    reset: () => set({ time: defaultTime, isActive: false, laps: [] }),
    setTime: (cb) => set((state) => ({ time: cb(state.time) })),
    addLap: (time: number) =>
      set((state) => ({ laps: [...state.laps, { time }] }))
  };
});
