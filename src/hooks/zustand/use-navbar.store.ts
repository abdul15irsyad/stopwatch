import { create } from 'zustand';

import { menuIds } from '@/layout/navbar';

type NavbarStoreState = {
  activeTab: (typeof menuIds)[number];
  setActiveTab: (activeTab: (typeof menuIds)[number]) => void;
};

export const useNavbarStore = create<NavbarStoreState>((set) => {
  return {
    // activeTab: 'stopwatch',
    activeTab: 'timer',
    setActiveTab: (activeTab) => set({ activeTab })
  };
});
