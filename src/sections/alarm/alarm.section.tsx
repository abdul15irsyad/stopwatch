'use client';

import { Text } from '@mantine/core';

import { ComingSoon } from '@/components/coming-soon/coming-soon';

import styles from './alarm.module.css';

export const AlarmSection = () => (
  <div className={styles['alarm-section']}>
    <Text fz="h1" fw="bold">
      Alarm
    </Text>
    <ComingSoon />
  </div>
);
