'use client';

import { Text } from '@mantine/core';
import styles from './clock.module.css';

export const ClockSection = () => {
  const title = 'Clock';
  return (
    <div className={styles['clock-section']}>
      <Text fz={'h1'} fw="bold">
        {title}
      </Text>
    </div>
  );
};
