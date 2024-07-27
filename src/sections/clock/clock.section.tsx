'use client';

import { Text } from '@mantine/core';
import styles from './clock.module.css';

export const ClockSection = () => (
  <div className={styles['clock-section']}>
    <Text fz="h1" fw="bold">
      Clock
    </Text>
  </div>
);
