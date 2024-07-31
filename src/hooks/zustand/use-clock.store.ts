import dayjs from 'dayjs';
import { create, StateCreator } from 'zustand';
import { createJSONStorage, persist, PersistOptions } from 'zustand/middleware';

type Item = {
  id: string;
  name: string;
  timezone: string;
};

type ClockState = {
  time: Date;
  list: Item[];
  clockInterval?: NodeJS.Timeout | null;
  setTime: (time: Date) => void;
  setList: (list: Item[]) => void;
  setClockInterval: (clockInterval: NodeJS.Timeout | null) => void;
};

export const useClockStore = create<ClockState>(
  (
    persist as (
      config: StateCreator<ClockState>,
      options: PersistOptions<Pick<ClockState, 'list'>>
    ) => StateCreator<ClockState>
  )(
    (set, get) => {
      return {
        time: dayjs().toDate(),
        list: get()?.list ?? [],
        clockInterval: null,
        setTime: (time) => set({ time }),
        setList: (list) => set({ list }),
        setClockInterval: (clockInterval) => set({ clockInterval })
      };
    },
    {
      name: 'clock',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ list: state.list })
    }
  )
);
