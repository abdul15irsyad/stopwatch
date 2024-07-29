'use client';

import { Text } from '@mantine/core';

import { ComingSoon } from '@/components/coming-soon/coming-soon';

import styles from './clock.module.css';

export const ClockSection = () => (
  <div className={styles['clock-section']}>
    <Text fz="h1" fw="bold">
      Clock
    </Text>
    <ComingSoon />
  </div>
);
