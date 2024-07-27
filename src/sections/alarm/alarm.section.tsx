'use client';

import { Text } from '@mantine/core';
import styles from './alarm.module.css';
import { ComingSoon } from '@/components/coming-soon/coming-soon';

export const AlarmSection = () => (
  <div className={styles['alarm-section']}>
    <Text fz="h1" fw="bold">
      Alarm
    </Text>
    <ComingSoon />
  </div>
);
