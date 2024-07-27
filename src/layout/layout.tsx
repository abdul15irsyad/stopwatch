import { Container } from '@mantine/core';
import React, { ReactNode } from 'react';
import { Navbar } from './navbar';

export const menuIds = ['stopwatch', 'timer', 'clock', 'alarm'] as const;

export interface IMenu {
  id: (typeof menuIds)[number];
  label: string;
  icon: string;
  component?: ReactNode;
}

export const Layout = ({ children }) => {
  const menus: IMenu[] = [
    {
      id: 'stopwatch',
      label: 'Stopwatch',
      icon: 'IconClockRecord'
      // component: <StopwatchSection />
    },
    {
      id: 'clock',
      label: 'Clock',
      icon: 'IconClock'
      // component: <ClockSection />
    },
    {
      id: 'timer',
      label: 'Timer',
      icon: 'IconHourglassEmpty'
      // component: <TimerSection />
    },
    {
      id: 'alarm',
      label: 'Alarm',
      icon: 'IconAlarm'
      // component: <AlarmSection />
    }
  ];
  return (
    <>
      <Container>{children}</Container>
      <Navbar menus={menus} />
    </>
  );
};
