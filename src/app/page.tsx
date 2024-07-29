'use client';

import { Layout } from '@/layout/layout';
import { menus } from '@/layout/navbar';
import { useNavbarStore } from '@/hooks/zustand/use-navbar.store';

const HomePage = () => {
  const { activeTab } = useNavbarStore();

  return <Layout>{menus.find(({ id }) => id === activeTab)?.component}</Layout>;
};

export default HomePage;
