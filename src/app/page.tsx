'use client';

import { useNavbarStore } from '@/hooks/zustand/use-navbar.store';
import { Layout } from '@/layout/layout';
import { menus } from '@/layout/navbar';

const HomePage = () => {
  const { activeTab } = useNavbarStore();

  return <Layout>{menus.find(({ id }) => id === activeTab)?.component}</Layout>;
};

export default HomePage;
