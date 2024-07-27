import { menuIds } from '@/layout/layout';
import { create } from 'zustand';

type ActiveMenuState = {
  activeMenu: string;
  setActiveMenu: (activeMenu: (typeof menuIds)[number]) => void;
};
export const useActiveMenuStore = create<ActiveMenuState>((set) => {
  return {
    activeMenu: 'stopwatch',
    setActiveMenu: (activeMenu: string) => set({ activeMenu })
  };
});
