import dayjs from 'dayjs';
import { create } from 'zustand';

type ClockState = {
  time: Date;
  list: {
    id: string;
    name: string;
    timezone: string;
    offset: string;
  }[];
  clockInterval: NodeJS.Timeout | null;
  setTime: (time: Date) => void;
  setList: (
    list: {
      id: string;
      name: string;
      timezone: string;
      offset: string;
    }[]
  ) => void;
  setClockInterval: (clockInterval: NodeJS.Timeout | null) => void;
};

export const useClockStore = create<ClockState>((set) => {
  return {
    time: dayjs().toDate(),
    list: [],
    clockInterval: null,
    setTime: (time) => set({ time }),
    setList: (list) => set({ list }),
    setClockInterval: (clockInterval) => set({ clockInterval })
  };
});
