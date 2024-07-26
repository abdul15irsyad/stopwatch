'use client';

import { Navbar } from '@/layout/navbar';
import { AlarmSection } from '@/sections/alarm/alarm.section';
import { ClockSection } from '@/sections/clock/clock.section';
import { StopwatchSection } from '@/sections/stopwatch/stopwatch.section';
import { TimerSection } from '@/sections/timer/timer.section';
import { Container } from '@mantine/core';
import React, { ReactNode, useState } from 'react';

export type MenuIdType = 'stopwatch' | 'timer' | 'clock' | 'alarm';
export interface IMenu {
  id: MenuIdType;
  label: string;
  icon: string;
  component?: ReactNode;
}

export default () => {
  const [activePage, setActivePage] = useState<MenuIdType>('stopwatch');

  const menus: IMenu[] = [
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
    },
    {
      id: 'alarm',
      label: 'Alarm',
      icon: 'IconAlarm',
      component: <AlarmSection />
    }
  ];
  return (
    <>
      <Container>
        {menus.find(({ id }) => id === activePage)?.component}
      </Container>
      <Navbar
        menus={menus}
        activePage={activePage}
        setActivePage={setActivePage}
      />
    </>
  );
};
