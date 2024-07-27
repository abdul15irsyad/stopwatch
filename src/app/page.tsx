'use client';

import { IMenu, menuIds } from '@/layout/layout';
import { Navbar } from '@/layout/navbar';
import { AlarmSection } from '@/sections/alarm/alarm.section';
import { ClockSection } from '@/sections/clock/clock.section';
import { StopwatchSection } from '@/sections/stopwatch/stopwatch.section';
import { TimerSection } from '@/sections/timer/timer.section';
import { Container } from '@mantine/core';
import React, { useState } from 'react';

export default () => {
  const [activeTab, setActiveTab] =
    useState<(typeof menuIds)[number]>('stopwatch');

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
        {menus.find(({ id }) => id === activeTab)?.component}
      </Container>
      <Navbar menus={menus} activeTab={activeTab} setActiveTab={setActiveTab} />
    </>
  );
};
