'use client';

import { Container, Grid, Text } from '@mantine/core';
import * as icons from '@tabler/icons-react';
import { ReactNode } from 'react';

// import { AlarmSection } from '@/sections/alarm/alarm.section';
import { ClockSection } from '@/sections/clock/clock.section';
import { StopwatchSection } from '@/sections/stopwatch/stopwatch.section';
import { TimerSection } from '@/sections/timer/timer.section';
import { useNavbarStore } from '@/zustand/use-navbar.store';

import styles from './navbar.module.css';

export const menuIds = ['stopwatch', 'timer', 'clock', 'alarm'] as const;

export interface IMenu {
  id: (typeof menuIds)[number];
  label: string;
  icon: string;
  component?: ReactNode;
}

export const menus: IMenu[] = [
  {
    id: 'stopwatch',
    label: 'Stopwatch',
    icon: 'IconClockRecord',
    component: <StopwatchSection />
  },
  {
    id: 'clock',
    label: 'Clock',
    icon: 'IconClock',
    component: <ClockSection />
  },
  {
    id: 'timer',
    label: 'Timer',
    icon: 'IconHourglassEmpty',
    component: <TimerSection />
  }
  // {
  //   id: 'alarm',
  //   label: 'Alarm',
  //   icon: 'IconAlarm',
  //   component: <AlarmSection />
  // }
];

export const Navbar = () => {
  const { activeTab, setActiveTab } = useNavbarStore();

  return (
    <div className={styles.navbar}>
      <Container>
        <Grid align="center">
          {menus?.map((menu, index) => {
            const Icon = icons[menu.icon];
            return (
              <Grid.Col span="auto" key={index}>
                <button
                  className={`${styles['nav-link']} ${activeTab === menu.id ? styles.active : ''}`}
                  onClick={() => setActiveTab(menu.id)}
                >
                  <Icon stroke={2} size={20} />
                  <Text mb={0}>{menu.label}</Text>
                </button>
              </Grid.Col>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};
