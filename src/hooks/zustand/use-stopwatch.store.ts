import { create } from 'zustand';

type StopwatchState = {
  time: number;
  isActive: boolean;
  laps: { time: number }[];
  stopwatchInterval: NodeJS.Timeout | null;
  startStop: () => void;
  reset: () => void;
  addLap: (time: number) => void;
  setTime: (cb: (prev: number) => number) => void;
  setStopwatchInterval: (stopwatchInterval: NodeJS.Timeout | null) => void;
};

export const useStopwatchStore = create<StopwatchState>((set) => {
  const defaultTime = 0;
  return {
    time: defaultTime,
    laps: [],
    isActive: false,
    stopwatchInterval: null,
    setStopwatchInterval: (stopwatchInterval) => set({ stopwatchInterval }),
    startStop: () =>
      set((state) => ({
        isActive: !state.isActive,
        time: state.time
      })),
    reset: () =>
      set({
        time: defaultTime,
        isActive: false,
        laps: [],
        stopwatchInterval: null
      }),
    setTime: (cb) => set((state) => ({ time: cb(state.time) })),
    addLap: (time: number) =>
      set((state) => ({ laps: [...state.laps, { time }] }))
  };
});
