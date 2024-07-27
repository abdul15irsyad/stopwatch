'use client';

import { Text } from '@mantine/core';
import styles from './alarm.module.css';

export const AlarmSection = () => (
  <div className={styles['alarm-section']}>
    <Text fz="h1" fw="bold">
      Alarm
    </Text>
  </div>
);
