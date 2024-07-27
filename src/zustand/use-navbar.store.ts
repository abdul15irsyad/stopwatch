import { menuIds } from '@/layout/navbar';
import { create } from 'zustand';

type NavbarStoreState = {
  activeTab: (typeof menuIds)[number];
  setActiveTab: (activeTab: (typeof menuIds)[number]) => void;
};

export const useNavbarStore = create<NavbarStoreState>((set) => {
  return {
    activeTab: 'stopwatch',
    setActiveTab: (activeTab) => set({ activeTab })
  };
});
