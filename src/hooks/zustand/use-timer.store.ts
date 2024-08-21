import { create, StateCreator } from 'zustand';
import { createJSONStorage, persist, PersistOptions } from 'zustand/middleware';

export type TimerState = {
  timer: number;
  time: number;
  isActive: boolean;
  timerInterval: NodeJS.Timeout | null;
  isRehydrated: boolean;
  rehydrate?: () => void;
  startStop: () => void;
  reset: () => void;
  setTimer: (timer: number) => void;
  setTime: (cb: (prev: number) => number) => void;
  setTimerInterval: (timerInterval: NodeJS.Timeout | null) => void;
};

export const useTimerStore = create<TimerState>(
  (
    persist as (
      config: StateCreator<TimerState>,
      options: PersistOptions<Pick<TimerState, 'timer' | 'rehydrate'>>
    ) => StateCreator<TimerState>
  )(
    (set) => {
      const defaultTimer = 10 * 1000;
      return {
        timer: defaultTimer,
        time: defaultTimer,
        isActive: false,
        timerInterval: null,
        enqueueSnackbar: undefined,
        isRehydrated: false,
        rehydrate: () => set({ isRehydrated: true }),
        startStop: () => set((state) => ({ isActive: !state.isActive })),
        reset: () =>
          set((state) => ({
            isActive: false,
            timerInterval: null,
            time: state.timer,
            timer: state.timer
          })),
        setTimer: (timer) => set({ timer }),
        setTime: (cb) => set((state) => ({ time: cb(state.time!) })),
        setTimerInterval: (timerInterval) => set({ timerInterval })
      };
    },
    {
      name: 'timer',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        timer: state.timer,
        time: state.timer,
        rehydrate: undefined
      }),
      onRehydrateStorage: () => (state) => {
        state?.rehydrate?.();
      }
    }
  )
);
