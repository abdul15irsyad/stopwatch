'use client';

import { Text } from '@mantine/core';

import { ComingSoon } from '@/components/coming-soon/coming-soon';

import styles from './timer.module.css';

export const TimerSection = () => (
  <div className={styles['timer-section']}>
    <Text fz="h1" fw="bold">
      Timer
    </Text>
    <ComingSoon />
  </div>
);
