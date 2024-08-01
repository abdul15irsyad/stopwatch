import { create } from 'zustand';

export type TimerState = {
  timer: number;
  time: number;
  isActive: boolean;
  timerInterval: NodeJS.Timeout | null;
  startStop: () => void;
  reset: () => void;
  setTimer: (timer: number) => void;
  setTime: (cb: (prev: number) => number) => void;
  setTimerInterval: (timerInterval: NodeJS.Timeout | null) => void;
};

export const useTimerStore = create<TimerState>((set) => {
  const defaultTimer = 10 * 1000;
  const defaultValue = {
    timer: defaultTimer,
    time: defaultTimer,
    isActive: false,
    timerInterval: null
  };

  return {
    ...defaultValue,
    startStop: () => set((state) => ({ isActive: !state.isActive })),
    reset: () =>
      set((state) => ({
        ...defaultValue,
        time: state.timer,
        timer: state.timer
      })),
    setTimer: (timer) => set({ timer }),
    setTime: (cb) => set((state) => ({ time: cb(state.time) })),
    setTimerInterval: (timerInterval) => set({ timerInterval })
  };
});
